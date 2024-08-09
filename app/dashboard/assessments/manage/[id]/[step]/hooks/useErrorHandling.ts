import { useState } from 'react';

export const useErrorHandling = () => {
    const [error, setError] = useState<string | null>(null);

    return { error, setError };
};