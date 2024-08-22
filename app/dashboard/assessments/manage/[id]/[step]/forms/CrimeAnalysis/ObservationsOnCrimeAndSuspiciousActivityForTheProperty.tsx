import {Callout} from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";
import { textAreaClass } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/InputsStyleClass";

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