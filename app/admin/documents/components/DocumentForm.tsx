'use client';

import React, {useEffect, useState} from 'react'
import {Button} from "@radix-ui/themes";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import axios from "axios";

interface Props {
    document?: {
        id: string;
        url: string;
        title: string;
        description: string;
    }
}

type FormData = {
    url: string;
    title: string;
    description: string;
}

const DocumentForm = ({ document }: Props) => {
    const router = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (document) {
            setValue('url', document.url);
            setValue('title', document.title);
            setValue('description', document.description);
        }
    }, [document, setValue]);

    const onSubmit = handleSubmit(async data => {
        try {
            setIsSubmitting(true);
            if (document) {
                await axios.put(`/api/admin/documents/${document!.id}`, data);
            } else {
                await axios.post('/api/admin/documents', data);
            }

            router.push('/admin/documents');
            router.refresh();
        } catch (error) {
            setIsSubmitting(false);
            setError('An error occurred. Please try again.');
        }
    });

    return (
        <>
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
                    <label htmlFor="url" className='block'>Document URL</label>
                    <input type="url"
                           id='url'
                           {...register("url", {required: "Document URL is required"})}
                           className='block border py-2 px-4 rounded-lg w-full'/>
                    {errors.url && <p className="text-sm text-red-600 mt-1">{errors.url.message}</p>}
                </div>

                <div className='mb-5'>
                    <label htmlFor="title" className='block'>Title</label>
                    <input type="text"
                           id='title'
                           {...register("title", {required: "Email is required"})}
                           className='block border py-2 px-4 rounded-lg w-full'/>
                    {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>}
                </div>

                <div className='mb-5'>
                    <label htmlFor="description" className='block'>Description</label>
                    <textarea
                        id='description'
                        {...register("description", {required: "Description is required"})}
                        className='block border py-2 px-4 rounded-lg w-full'
                    />
                    {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description.message}</p>}
                </div>

                <div className='flex items-center justify-between'>
                    <Button loading={isSubmitting} size='3'>
                        {document ? 'Update' : 'Add'} Document
                    </Button>

                    <Link href={'/admin/documents'}>
                        <Button size='3' variant='surface'>
                            Go Back
                        </Button>
                    </Link>
                </div>
            </form>
        </>
    );
}

export default DocumentForm