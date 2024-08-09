'use client';

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import {useEffect, useState} from "react";

import Image from "next/image";
import Spinner from "@/app/components/Spinner";
import {CustomUser} from "@/types";

type FormData = {
    email: string;
    password: string;
};

const Login = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = handleSubmit(async data => {
        try {
            setIsSubmitting(true);

            const result = await signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            });

            if (result?.error) {
                setError('Invalid email or password');
                setIsSubmitting(false);
            } else {
                const response = await fetch('/api/auth/session');
                const session = await response.json();

                const user = session.user as CustomUser;
                if (user.role === 'ADMIN') {
                    router.push('/admin');
                } else {
                    if (user.status === 'ACTIVE') {
                        router.push('/dashboard');
                    } else {
                        setError('Your account is not active');
                        setIsSubmitting(false);
                    }
                }
            }
        } catch (error) {
            setError('Invalid email or password');
            setIsSubmitting(false);
        } finally {
            // setIsSubmitting(false);
        }
    });

    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'authenticated') {
            const user = session.user as CustomUser;
            if (user.role === 'ADMIN') {
                router.push('/admin');
            } else {
                if (user.status === 'ACTIVE') {
                    router.push('/dashboard');
                } else {
                    setError('Your account is not active');
                }
            }
        }
    }, [status, session, router]);

    if (status === 'loading') return null;

    return (
        <>
            <section className="bg-gradient">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <Image
                            src="/logo/logo.png"
                            alt="logo"
                            width={150}
                            height={40}
                            priority
                            className='mx-auto'
                        />
                    </div>
                    <div className="w-full bg-white rounded-2xl md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>

                            {
                                error &&
                                <div
                                    className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                                    role="alert"
                                >
                                    <span>{error}</span>
                                </div>
                            }

                            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                        Your email
                                    </label>
                                    <input type="email"
                                           id='email'
                                           {...register("email", {required: "Email is required"})}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full py-2.5 px-3"
                                           placeholder="name@company.com" />
                                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                        Password
                                    </label>
                                    <input type="password"
                                           id='password'
                                           {...register("password", {required: "Password is required"})}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full py-2.5 px-3"
                                           placeholder="•••••••••" />
                                    {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
                                </div>
                                <button type="submit"
                                        className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        disabled={isSubmitting}
                                >
                                    <span className='pe-2'>Sign in</span>
                                    {isSubmitting && <Spinner/>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;