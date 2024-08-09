import FileUploader from "@/app/dashboard/assessments/manage/[id]/[step]/components/FileUploader";
import { Callout } from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";

import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useEffect} from "react";
import "@/app/dashboard/assessments/manage/[id]/editor.css";

const Summary = ({
    assessmentId, currentStep, saveData, setFormSubmit, setError, setIsLoading
}: FormProps) => {
    const { control, Controller, errors, handleSubmit, onSubmit } = useFormHandler({
        assessmentId,
        currentStep,
        saveData,
        setFormSubmit,
        setError,
        setIsLoading
    });

    useEffect(() => {
        const toolbar = document.querySelector('.editor-toolbar') as HTMLElement;
        if (toolbar) {
            toolbar.style.position = 'sticky';
            toolbar.style.top = '0';
            toolbar.style.zIndex = '1000';
            toolbar.style.background = '#fff';
        }
    }, []);

    const simpleMdeOptions = {
        toolbar: [
            'bold', 'italic', 'heading', '|',
            'quote', 'unordered-list', 'ordered-list', '|',
            'link', 'table', '|',
            'preview'
        ] as any
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-2xl uppercase mb-3'>
                9. Summary
            </h1>

            <Callout.Root>
                <Callout.Text>
                    Summary of the assessment.
                </Callout.Text>
            </Callout.Root>

            <div className='my-5'>
                <div className='mb-5 prose w-full'>
                    <Controller
                        name="summary"
                        control={control}
                        render={({field}) => <SimpleMde placeholder='Summary' options={simpleMdeOptions} {...field} />}
                    />
                    {errors.summary && (
                        <span className='text-red-500'>{errors.summary.message?.toString()}</span>
                    )}
                </div>

                <div className='mb-5'>
                    <p className='text-lg font-medium'>
                        Summary Images
                    </p>
                    <FileUploader
                        assessmentId={assessmentId}
                        step={currentStep}
                        name={'summary_images'}
                        setError={setError}
                        setIsLoading={setIsLoading}
                    />
                </div>

            </div>
        </form>
    );
}

export default Summary;