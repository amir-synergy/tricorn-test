import { Callout } from '@radix-ui/themes';
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";
import { textInputClass } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/InputsStyleClass";

export default function Introduction({
    assessmentId, currentStep, saveData, setFormSubmit, setError, setIsLoading
}: FormProps) {
    const { register, errors, handleSubmit, onSubmit } = useFormHandler({
        assessmentId,
        currentStep,
        saveData,
        setFormSubmit,
        setError,
        setIsLoading
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-2xl uppercase mb-3'>
                1. Introduction
            </h1>

            <Callout.Root>
                <Callout.Text>
                    General information about the property.
                </Callout.Text>
            </Callout.Root>

            <div className='my-5'>
                <div className='my-5'>
                    <div className='mb-5'>
                        <label className='text-lg font-medium' htmlFor='assessmentDate'>
                            Assessment Date
                        </label>
                        <input type="date"
                               id='assessmentDate'
                               className={`${textInputClass} !w-100`}
                               {...register("assessmentDate")} />
                        {errors.assessmentDate && (
                            <span className='text-red-500'>{errors.assessmentDate.message?.toString()}</span>
                        )}
                    </div>

                    <div className='mb-5'>
                        <label className='text-lg font-medium' htmlFor='propertyName'>
                            Property Name
                        </label>
                        <input type="text"
                               id='propertyName'
                               className={textInputClass}
                               placeholder='Property Name'
                               {...register("propertyName")} />
                        {errors.propertyName && (
                            <span className='text-red-500'>{errors.propertyName.message?.toString()}</span>
                        )}
                    </div>

                    <div className='mb-5'>
                        <label className='text-lg font-medium' htmlFor='propertyManager'>
                            Property Manager
                        </label>
                        <input type="text"
                               id='propertyManager'
                               className={textInputClass}
                               placeholder='John Doe'
                               {...register("propertyManager")} />
                        {errors.propertyManager && (
                            <span className='text-red-500'>{errors.propertyManager.message?.toString()}</span>
                        )}
                    </div>

                    <div className='mb-5'>
                        <label className='text-lg font-medium' htmlFor='propertyStreet'>
                            Street
                        </label>
                        <input type="text"
                               id='propertyStreet'
                               className={textInputClass}
                               placeholder='Street name'
                               {...register("propertyStreet")} />
                        {errors.propertyStreet && (
                            <span className='text-red-500'>{errors.propertyStreet.message?.toString()}</span>
                        )}
                    </div>

                    <div className='mb-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div>
                            <label className='text-lg font-medium' htmlFor='propertyCity'>
                                City
                            </label>
                            <input type="text"
                                   id='propertyCity'
                                   className={textInputClass}
                                   placeholder='City'
                                   {...register("propertyCity")} />
                            {errors.propertyCity && (
                                <span className='text-red-500'>{errors.propertyCity.message?.toString()}</span>
                            )}
                        </div>

                        <div>
                            <label className='text-lg font-medium' htmlFor='propertyState'>
                                State
                            </label>
                            <input type="text"
                                   id='propertyState'
                                   className='uppercase placeholder:capitalize block w-full bg-white border-b py-2 px-3 focus:outline-0 focus:border-b-blue-400'
                                   placeholder='State'
                                   {...register("propertyState", {
                                       minLength: {
                                             value: 2,
                                             message: 'Please use the 2 letter abbreviation for the state'
                                       },
                                       maxLength: {
                                           value: 2,
                                           message: 'Please use the 2 letter abbreviation for the state'
                                       }
                                   })} />
                            {errors.propertyState && (
                                <span className='text-red-500'>{errors.propertyState.message?.toString()}</span>
                            )}
                        </div>

                        <div>
                            <label className='text-lg font-medium' htmlFor='propertyZip'>
                                Zip / Postal Code
                            </label>
                            <input type="number"
                                   id='propertyZip'
                                   pattern="[0-9]*" inputMode="numeric"
                                   className='block w-full bg-white border-b py-2 px-3 focus:outline-0 focus:border-b-blue-400'
                                   placeholder='Zip / Postal code'
                                   {...register("propertyZip", {
                                       min: {
                                             value: 10000,
                                             message: 'Please enter a valid zip code'
                                       },
                                       max: {
                                             value: 99999,
                                             message: 'Please enter a valid zip code'
                                       }
                                   })} />
                            {errors.propertyZip && (
                                <span className='text-red-500'>{errors.propertyZip.message?.toString()}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}