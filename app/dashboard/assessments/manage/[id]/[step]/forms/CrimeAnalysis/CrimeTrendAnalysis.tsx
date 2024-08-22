import FileUploader from "@/app/dashboard/assessments/manage/[id]/[step]/components/FileUploader";
import {Callout} from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";
import { textAreaClass } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/InputsStyleClass";

const CrimeTrendAnalysis = ({
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
                        3.2 Crime trend analysis
                    </p>
                    <FileUploader
                        assessmentId={assessmentId}
                        step={currentStep}
                        name={'crime_trend_analysis'}
                        setError={setError}
                        setIsLoading={setIsLoading}
                    />
                </div>

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

            </div>
        </form>
    );
}

export default CrimeTrendAnalysis