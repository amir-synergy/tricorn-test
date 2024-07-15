import React from 'react';
import { useForm } from 'react-hook-form';

export default function Introduction() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    };
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="datetime" placeholder="Assessment Date" {...register("Assessment Date", {required: true, maxLength: 191})} />
            <input type="text" placeholder="Property Name" {...register("Property Name", {required: true, maxLength: 191})} />
            <input type="text" placeholder="Property Manager" {...register("Property Manager", {required: true})} />
            <input type="text" placeholder="Street" {...register("Street", {required: true})} />
            <input type="text" placeholder="City" {...register("City", {required: true})} />
            <input type="text" placeholder="State" {...register("State", {required: true})} />
            <input type="text" placeholder="Zip" {...register("Zip", {required: true})} />

            <input type="submit" />
        </form>
    );
}