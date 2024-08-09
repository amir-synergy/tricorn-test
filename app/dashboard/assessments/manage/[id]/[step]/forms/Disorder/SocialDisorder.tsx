import FileUploader from "@/app/dashboard/assessments/manage/[id]/[step]/components/FileUploader";
import {Callout} from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";

const SocialDisorder = ({
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
                6. Disorder
            </h1>

            <Callout.Root>
                <Callout.Text>
                    Signs of social and physical disorder on the property observed during the CPTED assessment.
                </Callout.Text>
            </Callout.Root>

            <div className='my-5'>
                <div className='mb-5'>
                    <label className='text-lg font-medium' htmlFor='socialDisorder'>
                        6.1 Social Disorder
                    </label>
                    <textarea
                        className={textAreaClass}
                        id='socialDisorder'
                        placeholder='Type your answer here'
                        {...register('socialDisorder')}
                        rows={4}
                    />
                    {errors.socialDisorder && (
                        <span className='text-red-500'>{errors.socialDisorder.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-5'>
                    <p className='text-lg font-medium'>
                        Social Disorder Images
                    </p>
                    <FileUploader
                        assessmentId={assessmentId}
                        step={currentStep}
                        name={'social_disorder_images'}
                        setError={setError}
                        setIsLoading={setIsLoading}
                    />
                </div>

            </div>
        </form>
    );
}

export default SocialDisorder