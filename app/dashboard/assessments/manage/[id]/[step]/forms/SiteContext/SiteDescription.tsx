import FileUploader from "@/app/dashboard/assessments/manage/[id]/[step]/components/FileUploader";
import { Callout } from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";
import { textAreaClass } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/InputsStyleClass";

const SiteDescription = ({
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
                2. Site Context
            </h1>

            <Callout.Root>
                <Callout.Text>
                    General information about the property.
                </Callout.Text>
            </Callout.Root>

            <div className='my-5'>
                <div className='mb-5'>
                    <label className='text-lg font-medium' htmlFor='siteDescription'>
                        2.1 Site Description
                    </label>
                    <textarea
                        className={textAreaClass}
                        id='siteDescription'
                        placeholder='Type your answer here'
                        {...register('siteDescription')}
                        rows={4}
                    />
                    {errors.siteDescription && (
                        <span className='text-red-500'>{errors.siteDescription.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-5'>
                <p className='text-lg font-medium'>Satellite image</p>
                    <FileUploader
                        assessmentId={assessmentId}
                        step={currentStep}
                        name={'satellite_image'}
                        setError={setError}
                        setIsLoading={setIsLoading}
                    />
                </div>

            </div>
        </form>
    );
}

export default SiteDescription