import React from 'react'
import { FiAlertCircle, FiX } from "react-icons/fi";

interface ErrorToastProps {
    error: string | null;
    setError: (error: string | null) => void;
}

const ErrorToast = ({ error, setError }: ErrorToastProps) => {
    if (!error) return null;

    return (
        <div className='fixed top-0 right-0 m-3 z-50'>
            <div className='animate-fadeDown bg-red-100 py-3 px-5 shadow-md rounded-lg'>
                <div className='flex items-center text-red-700 gap-5'>
                    <div className='flex items-center gap-3'>
                        <FiAlertCircle size={20} />
                        <p>{error}</p>
                    </div>
                    <button type='button'
                            className='block cursor-pointer p-1 bg-red-200 rounded-full hover:bg-red-300'
                            onClick={() => setError(null)}>
                        <FiX size={15} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ErrorToast