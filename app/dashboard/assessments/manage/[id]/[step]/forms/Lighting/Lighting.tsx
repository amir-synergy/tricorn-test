import FileUploader from "@/app/dashboard/assessments/manage/[id]/[step]/components/FileUploader";
import {Callout} from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";
import { textAreaClass } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/InputsStyleClass";

const Lighting = ({
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
                5. Lighting
            </h1>

            <Callout.Root>
                <Callout.Text>
                    A comprehensive light assessment was conducted by the assessor. Utilizing a NIST certified light meter, measurements in
                    footcandles were taken at a height of 18” to identify insufficient illumination levels and other deficiencies with lighting. The
                    assessor proposes considerations based on the requirements in Florida Statue 768.0706. Attached is a lighting map that includes
                    specific measurements and light placement. The assessor is not a lighting engineer. The light assessment is conducted on the
                    basic understanding of lighting and lighting applications.
                </Callout.Text>
            </Callout.Root>

            <div className='my-5'>
                <div className='mb-5'>
                    <label className='text-lg font-medium' htmlFor='notes'>
                        Notes
                    </label>
                    <textarea
                        className={textAreaClass}
                        id='notes'
                        placeholder='Type your answer here'
                        {...register('notes')}
                        rows={4}
                    />
                    {errors.notes && (
                        <span className='text-red-500'>{errors.notes.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-5'>
                    <p className='text-lg font-medium'>
                        Lighting Images
                    </p>
                    <FileUploader
                        assessmentId={assessmentId}
                        step={currentStep}
                        name={'lighting_images'}
                        setError={setError}
                        setIsLoading={setIsLoading}
                    />
                </div>

                <div className='mb-5'>
                    <p className='text-lg font-medium'>
                        Lighting Map
                    </p>
                    <FileUploader
                        assessmentId={assessmentId}
                        step={currentStep}
                        name={'lighting_map'}
                        setError={setError}
                        setIsLoading={setIsLoading}
                    />
                </div>

                <div className='mb-5'>
                    <p className='text-lg font-medium'>
                        Lighting Layout
                    </p>
                    <FileUploader
                        assessmentId={assessmentId}
                        step={currentStep}
                        name={'lighting_layout'}
                        setError={setError}
                        setIsLoading={setIsLoading}
                    />
                </div>

            </div>
        </form>
    );
}

export default Lighting