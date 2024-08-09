import {useEffect, useCallback, useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

interface UseFormHandlerProps {
    assessmentId: string;
    currentStep: string;
    saveData: (formData: any) => Promise<void>;
    setFormSubmit: (submitFn: () => Promise<boolean>) => void;
    setError: (message: string) => void;
    setIsLoading: (loading: boolean) => void;
}

export const useFormHandler = ({
    assessmentId,
    currentStep,
    saveData,
    setFormSubmit,
    setError,
    setIsLoading
}: UseFormHandlerProps) => {
    const { register, control, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm<any>({
        mode: 'onChange'
    });

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`/api/dashboard/responses/${assessmentId}/${currentStep}`);

                const formattedData = Object.entries(response.data).reduce<any>((acc, [key, value]) => {
                    acc[key] = value === "true" ? true : (value === "false" ? false : value);
                    return acc;
                }, {});

                const records = Object.entries(response.data).map(([name, value]) => ({ name, value }));

                setData(records);
                reset(formattedData);
            } catch (error) {
                setError('Failed to fetch data');
            } finally {
                setIsLoading(false);
            }
        };

        getData().catch(() => setError('Failed to fetch data'));
    }, [assessmentId, currentStep, reset, setError, setIsLoading]);

    const onSubmit = useCallback(async (data: any) => {
        if (!isDirty) return true;
        try {
            const formattedData = Object.entries(data).reduce<any>((acc, [key, value]) => {
                acc[key] = typeof value === 'boolean' ? value.toString() : value;
                return acc;
            }, {});
            await saveData(formattedData);

            return true;
        } catch (error) {
            return false;
        }
    }, [isDirty, saveData]);

    useEffect(() => {
        const wrappedSubmit = async () => {
            if (!isValid) return false;
            const result = await handleSubmit(onSubmit)();
            return result === undefined;
        };
        setFormSubmit(wrappedSubmit);
    }, [isValid, setFormSubmit, handleSubmit, onSubmit]);

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (isDirty) {
                event.preventDefault();
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isDirty]);

    const removeFromData = async (index: number) => {
        try {
            setIsLoading(true);
            await axios.delete(`/api/dashboard/responses/${assessmentId}/${currentStep}/${data[index].name}`);
            setData(data.filter((_, i) => i !== index));
        } catch (error) {
            setError('Failed to remove consideration');
        } finally {
            setIsLoading(false);
        }
    };

    return { register, Controller, control, errors, handleSubmit, onSubmit, setData, data, removeFromData };
};