'use client';

import React, {useState} from 'react'
import Header from "@/app/admin/components/Header";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import axios from "axios";
import {Button} from "@radix-ui/themes";
import Link from "next/link";

type FormData = {
    name: string;
    email: string;
    password: string;
};

const AddUserPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = handleSubmit(async data => {
        try {
            setIsSubmitting(true);
            await axios.post('/api/admin/users', data);

            router.push('/admin/users');
            router.refresh();
        } catch (error) {
            setIsSubmitting(false);
            setError('An error occurred. Please try again. ERROR: ' + error);
        }
    });

    return (
        <>
            <Header />

            <div className='px-10 py-5'>
                <h1 className='text-2xl font-bold'>Add User</h1>
            </div>

            <div className='px-10 py-5'>
                {
                    error &&
                    <div
                        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                    >
                        <span>{error}</span>
                    </div>
                }

                <form onSubmit={onSubmit}>
                    <div className='mb-5'>
                        <label htmlFor="name" className='block'>Name</label>
                        <input type="text"
                               id='name'
                               {...register("name", {required: "Name is required"})}
                               className='block border py-2 px-4 rounded-lg w-full'/>
                        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
                    </div>

                    <div className='mb-5'>
                        <label htmlFor="email" className='block'>Email</label>
                        <input type="email"
                               id='email'
                               {...register("email", {required: "Email is required"})}
                               className='block border py-2 px-4 rounded-lg w-full'/>
                        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                    </div>

                    <div className='mb-5'>
                        <label htmlFor="password" className='block'>Password</label>
                        <input type="password"
                               id='password'
                               {...register("password", {required: "Password is required"})}
                               className='block border py-2 px-4 rounded-lg w-full'/>
                        {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
                    </div>

                    <div className='flex items-center justify-between'>
                        <Button loading={isSubmitting} size='3'>
                            Add User
                        </Button>

                        <Link href={'/admin/users'}>
                            <Button size='3' variant='surface'>
                                Go Back
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddUserPage