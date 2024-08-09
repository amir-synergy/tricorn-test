import {Callout} from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";

const ObservationsOnCrimeAndSuspiciousActivityForTheProperty = ({
    assessmentId, currentStep, saveData, setFormSubmit, setError, setIsLoading
}: FormProps) => {
    const { register, errors, handleSubmit, onSubmit } = useFormHandler({
        assessmentId,
        currentStep,
        saveData,
        setFormSubmit,
        setError,
        setIsLoading
    });

    const textAreaClass = 'block w-full bg-white border-b py-2 px-3 focus:outline-0 focus:border-b-blue-400 resize-none disabled:bg-gray-100';
    const textInputClass = 'block w-full bg-white border-b py-2 px-3 focus:outline-0 focus:border-b-blue-400';
    const numberInputClass = 'bg-white border rounded-lg py-2 px-3 focus:outline-0 focus:border-blue-400 block ms-0 w-full sm:inline sm:ms-3 sm:w-auto';

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-2xl uppercase mb-3'>
                3. Crime Analysis
            </h1>

            <Callout.Root>
                <Callout.Text>
                    This section provides information on crime statistics for the surrounding neighborhood and for the property.
                </Callout.Text>
            </Callout.Root>

            <div className='my-5'>
                <div className='mb-5'>
                    <p className='text-lg font-medium'>
                        3.3 Observations on crime and suspicious activity for the property
                    </p>
                </div>

                <div className='mb-5'>
                    <label className='text-lg font-medium' htmlFor='assessorObservations'>
                        Assessor observations
                    </label>
                    <textarea
                        className={textAreaClass}
                        id='assessorObservations'
                        placeholder='Type your answer here'
                        {...register('assessorObservations')}
                        rows={4}
                    />
                    {errors.assessorObservations && (
                        <span className='text-red-500'>{errors.assessorObservations.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-5'>
                    <label className='text-lg font-medium' htmlFor='concernsExpressedBySiteStaffAndResidents'>
                        Concerns expressed by site staff and residents
                    </label>
                    <textarea
                        className={textAreaClass}
                        id='concernsExpressedBySiteStaffAndResidents'
                        placeholder='Type your answer here'
                        {...register('concernsExpressedBySiteStaffAndResidents')}
                        rows={4}
                    />
                    {errors.concernsExpressedBySiteStaffAndResidents && (
                        <span className='text-red-500'>{errors.concernsExpressedBySiteStaffAndResidents.message?.toString()}</span>
                    )}
                </div>

            </div>
        </form>
    );
}

export default ObservationsOnCrimeAndSuspiciousActivityForTheProperty