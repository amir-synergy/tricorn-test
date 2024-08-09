import FileUploader from "@/app/dashboard/assessments/manage/[id]/[step]/components/FileUploader";
import {Callout} from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";

const NaturalSurveillance = ({
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
                4. Crime Prevention Through Environmental Design
            </h1>

            <Callout.Root>
                <Callout.Text>
                    Observations based on the 4 principles of Crime Prevention Through Environmental Design
                </Callout.Text>
            </Callout.Root>

            <div className='my-5'>
                <div className='mb-5'>
                    <label className='text-lg font-medium' htmlFor='naturalSurveillance'>
                        4.1 Natural Surveillance
                    </label>
                    <textarea
                        className={textAreaClass}
                        id='naturalSurveillance'
                        placeholder='Type your answer here'
                        {...register('naturalSurveillance')}
                        rows={4}
                    />
                    {errors.naturalSurveillance && (
                        <span className='text-red-500'>{errors.naturalSurveillance.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-5'>
                    <p className='text-lg font-medium'>
                        Natural Surveillance photos
                    </p>
                    <FileUploader
                        assessmentId={assessmentId}
                        step={currentStep}
                        name={'natural_surveillance_photos'}
                        setError={setError}
                        setIsLoading={setIsLoading}
                    />
                </div>
            </div>
        </form>
    );
}

export default NaturalSurveillance