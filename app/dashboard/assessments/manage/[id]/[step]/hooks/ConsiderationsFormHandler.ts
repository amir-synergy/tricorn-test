// import { useEffect, useCallback, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
//
// interface ConsiderationsFormHandlerProps {
//     assessmentId: string;
//     currentStep: string;
//     saveData: (formData: any) => Promise<void>;
//     setFormSubmit: (submitFn: () => Promise<boolean>) => void;
//     setError: (message: string) => void;
//     setIsLoading: (loading: boolean) => void;
// }
//
// export const ConsiderationsFormHandler = ({
//                                               assessmentId,
//                                               currentStep,
//                                               saveData,
//                                               setFormSubmit,
//                                               setError,
//                                               setIsLoading
//                                           }: ConsiderationsFormHandlerProps) => {
//     const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm<any>({
//         mode: 'onChange'
//     });
//     const [data, setData] = useState<any[]>([]);
//
//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 setIsLoading(true);
//                 const response = await axios.get(`/api/assessments/${assessmentId}/responses/${currentStep}`);
//                 const records = Object.entries(response.data).map(([name, value]) => ({ name, value }));
//                 setData(records);
//                 reset(response.data);
//             } catch (error) {
//                 setError('Failed to fetch data');
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//
//         getData().catch(() => setError('Failed to fetch data'));
//     }, [assessmentId, currentStep, reset, setError, setIsLoading]);
//
//     const onSubmit = useCallback(async (formData: any) => {
//         if (!isDirty) return true;
//         try {
//             await saveData(formData);
//             return true;
//         } catch (error) {
//             return false;
//         }
//     }, [isDirty, saveData]);
//
//     useEffect(() => {
//         const wrappedSubmit = async () => {
//             if (!isValid) return false;
//             const result = await handleSubmit(onSubmit)();
//             return result === undefined;
//         };
//         setFormSubmit(wrappedSubmit);
//     }, [isValid, setFormSubmit, handleSubmit, onSubmit]);
//
//     useEffect(() => {
//         const handleBeforeUnload = (event: BeforeUnloadEvent) => {
//             if (isDirty) {
//                 event.preventDefault();
//             }
//         };
//
//         window.addEventListener('beforeunload', handleBeforeUnload);
//         return () => {
//             window.removeEventListener('beforeunload', handleBeforeUnload);
//         };
//     }, [isDirty]);
//
//     const removeFromData = async (index: number) => {
//         try {
//             setIsLoading(true);
//             await axios.delete(`/api/assessments/${assessmentId}/responses/${currentStep}/${data[index].name}`);
//         } catch (error) {
//             setError('Failed to remove consideration');
//         } finally {
//             setIsLoading(false);
//         }
//     };
//
//     return { register, errors, handleSubmit, onSubmit, setData, data, removeFromData };
// };