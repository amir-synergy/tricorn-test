import FileUploader from "@/app/dashboard/assessments/manage/[id]/[step]/components/FileUploader";
import {AlertDialog, Button, Callout, Flex, Text} from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";
import {FiPlus, FiTrash} from "react-icons/fi";
import React from "react";
import { textAreaClass } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/InputsStyleClass";

const LightingConsiderations = ({
    assessmentId, currentStep, saveData, setFormSubmit, setError, setIsLoading
}: FormProps) => {
    const { register, handleSubmit, onSubmit, setData, data, removeFromData } = useFormHandler({
        assessmentId,
        currentStep,
        saveData,
        setFormSubmit,
        setError,
        setIsLoading
    });

    const addConsideration = () => {
        // setData([...data, { name: `comment_${data.length + 1}`, value: '' }]);
        setData([...data, { name: `consideration_${Date.now()}`, value: '' }]);
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-2xl uppercase mb-3'>
                8. Considerations
            </h1>

            <Callout.Root>
                <Callout.Text>
                    Following is a list with considerations based on the observations during the CPTED assessment.
                </Callout.Text>
            </Callout.Root>

            <div className='my-5'>
                <div className='mb-5'>
                    <p className='text-lg font-medium'>
                        8.3 Lighting Considerations
                    </p>
                </div>

                {data.map((item, index) => (
                    <div key={index} className='mb-5 p-4 border rounded-lg relative'>
                        <div className='mb-5'>
                            <label className='text-lg font-medium' htmlFor={item.name}>
                                Consideration Comment
                            </label>
                            <textarea
                                className={textAreaClass}
                                id={item.name}
                                placeholder='Type your answer here'
                                {...register(item.name)}
                                defaultValue={item.value}
                                rows={4}
                            />
                        </div>

                        <div className='mb-5'>
                            <p className='text-lg font-medium'>
                                Consideration Images
                            </p>
                            <FileUploader
                                assessmentId={assessmentId}
                                step={currentStep}
                                name={`${item.name}`}
                                setError={setError}
                                setIsLoading={setIsLoading}
                            />
                        </div>

                        <div className='absolute top-4 right-4'>
                            <AlertDialog.Root>
                                <AlertDialog.Trigger>
                                    <Button variant='outline'
                                            color='red'
                                            size='2'
                                            type='button'
                                            className='!cursor-pointer'>
                                        <FiTrash/>
                                        <span className="hidden md:block">Delete</span>
                                    </Button>
                                </AlertDialog.Trigger>
                                <AlertDialog.Content maxWidth="450px">
                                    <AlertDialog.Title>
                                        Delete consideration
                                    </AlertDialog.Title>
                                    <AlertDialog.Description size="2">
                                        Are you sure you want to delete this consideration?
                                    </AlertDialog.Description>

                                    <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                                Cancel
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button variant="solid" color="red" onClick={() => removeFromData(index)}>
                                                Delete consideration
                                            </Button>
                                        </AlertDialog.Action>
                                    </Flex>
                                </AlertDialog.Content>
                            </AlertDialog.Root>
                        </div>
                    </div>
                ))}

                <div className='mb-5'>
                    <Button variant='outline' size='3' onClick={addConsideration}>
                        <FiPlus />
                        <Text>
                            Add consideration
                        </Text>
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default LightingConsiderations;