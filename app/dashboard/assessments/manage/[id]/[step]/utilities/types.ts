export interface FormProps {
    assessmentId: string;
    currentStep: string;
    saveData: (formData: any) => Promise<void>;
    setFormSubmit: (submitFn: () => Promise<boolean>) => void;
    setError: (message: string) => void;
    setIsLoading: (loading: boolean) => void;
}