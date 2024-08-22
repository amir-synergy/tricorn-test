import FileUploader from "@/app/dashboard/assessments/manage/[id]/[step]/components/FileUploader";
import {Callout} from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";
import { textAreaClass, numberInputClass } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/InputsStyleClass";

const ViolentAndPropertyCrimeRisk = ({
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
                        3.1 Violent and property crime risk
                    </p>
                    <FileUploader
                        assessmentId={assessmentId}
                        step={currentStep}
                        name={'violent_and_property_crime_risk'}
                        setError={setError}
                        setIsLoading={setIsLoading}
                    />
                </div>

                <div className='mb-5'>
                    <label className='text-lg font-medium' htmlFor='callsServiceOnPropertyCalculatedPer1000Capita'>
                        Calls service on property calculated per 1000 capita based on
                    </label>
                    <input type="number"
                           id='callsServiceOnPropertyCalculatedPer1000Capita'
                           className={numberInputClass}
                           placeholder='# Residents'
                           {...register("callsServiceOnPropertyCalculatedPer1000Capita")} />
                    {errors.callsServiceOnPropertyCalculatedPer1000Capita && (
                        <span
                            className='text-red-500'>{errors.callsServiceOnPropertyCalculatedPer1000Capita.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-4'>
                    <label className='text-lg' htmlFor='homicide'>
                        Homicide
                    </label>
                    <input type="number"
                           id='homicide'
                           className={numberInputClass}
                           {...register("homicide")} />
                    {errors.homicide && (
                        <span className='text-red-500'>{errors.homicide.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-4'>
                    <label className='text-lg' htmlFor='rape'>
                        Rape
                    </label>
                    <input type="number"
                           id='rape'
                           className={numberInputClass}
                           {...register("rape")} />
                    {errors.rape && (
                        <span className='text-red-500'>{errors.rape.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-4'>
                    <label className='text-lg' htmlFor='aggravatedAssault'>
                        Aggravated Assault
                    </label>
                    <input type="number"
                           id='aggravatedAssault'
                           className={numberInputClass}
                           {...register("aggravatedAssault")} />
                    {errors.aggravatedAssault && (
                        <span className='text-red-500'>{errors.aggravatedAssault.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-4'>
                    <label className='text-lg' htmlFor='armedRobbery'>
                        Armed Robbery
                    </label>
                    <input type="number"
                           id='armedRobbery'
                           className={numberInputClass}
                           {...register("armedRobbery")} />
                    {errors.armedRobbery && (
                        <span className='text-red-500'>{errors.armedRobbery.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-5'>
                    <label className='text-lg' htmlFor='burglary'>
                        Burglary
                    </label>
                    <input type="number"
                           id='burglary'
                           className={numberInputClass}
                           {...register("burglary")} />
                    {errors.burglary && (
                        <span className='text-red-500'>{errors.burglary.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-5'>
                    <label className='text-lg font-medium' htmlFor='comments'>
                        Comments
                    </label>
                    <textarea
                        className={textAreaClass}
                        id='comments'
                        placeholder='Type your answer here'
                        {...register('comments')}
                        rows={4}
                    />
                    {errors.comments && (
                        <span className='text-red-500'>{errors.comments.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-5'>
                    <p className='text-lg font-medium'>
                        Radius of Heatmaps Images
                    </p>
                    <FileUploader
                        assessmentId={assessmentId}
                        step={currentStep}
                        name={'radius_of_heatmaps_images'}
                        setError={setError}
                        setIsLoading={setIsLoading}
                    />
                </div>

                <div className='mb-5'>
                    <label className='text-lg font-medium' htmlFor='crimeAnalysis'>
                        Crime Analysis
                    </label>
                    <textarea
                        className={textAreaClass}
                        id='crimeAnalysis'
                        placeholder='Type your answer here'
                        {...register('crimeAnalysis')}
                        rows={4}
                    />
                    {errors.crimeAnalysis && (
                        <span className='text-red-500'>{errors.crimeAnalysis.message?.toString()}</span>
                    )}
                </div>

            </div>
        </form>
    );
}

export default ViolentAndPropertyCrimeRisk