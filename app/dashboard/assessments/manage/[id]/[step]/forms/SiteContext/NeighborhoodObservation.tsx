import FileUploader from "@/app/dashboard/assessments/manage/[id]/[step]/components/FileUploader";
import {Callout} from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";
import { textAreaClass } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/InputsStyleClass";

const NeighborhoodObservation = ({
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
                    <label className='text-lg font-medium' htmlFor='neighborhoodObservation'>
                        2.2 Neighborhood observation
                    </label>
                    <textarea
                        className={textAreaClass}
                        id='neighborhoodObservation'
                        placeholder='Type your answer here'
                        {...register('neighborhoodObservation')}
                        rows={8}
                    />
                    {errors.neighborhoodObservation && (
                        <span className='text-red-500'>{errors.neighborhoodObservation.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-5'>
                    <p className='text-lg font-medium'>Neighborhood observation images</p>
                    <FileUploader
                        assessmentId={assessmentId}
                        step={currentStep}
                        name={'neighborhood_observation_images'}
                        setError={setError}
                        setIsLoading={setIsLoading}
                    />
                </div>

            </div>
        </form>
    );
}

export default NeighborhoodObservation