import FileUploader from "@/app/dashboard/assessments/manage/[id]/[step]/components/FileUploader";
import {Callout} from "@radix-ui/themes";
import { useFormHandler } from "@/app/dashboard/assessments/manage/[id]/[step]/hooks/useFormHandler";
import { FormProps } from "@/app/dashboard/assessments/manage/[id]/[step]/utilities/types";

const FloridaStatute76807062Requirements = ({
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

    const checkBoxes = [
        'A security camera system at points of entry and exit which records, and maintains as retrievable for at least 30 days, video footage to assist in offender identification and apprehension.',
        'A lighted parking lot illuminated at an intensity of at least an average of 1.8 foot-candles per square foot at 18 inches above the surface from dusk until dawn or controlled by photocell or any similar electronic device that provides light from dusk until dawn.',
        'Lighting in walkways, laundry rooms, common areas, and porches. Such lighting must be illuminated from dusk until dawn or controlled by photocell or any similar electronic device that provides light from dusk until dawn.',
        'At least a 1-inch deadbolt in each dwelling unit door.',
        'A locking device on each window, each exterior sliding door, and any other doors not used for community purposes.',
        'Locked gates with key or fob access along pool fence areas.',
        'A peephole or door viewer on each dwelling unit door that does not include a window or that does not have a window next to the door.'
    ];

    const textAreaClass = 'block w-full bg-white border-b py-2 px-3 focus:outline-0 focus:border-b-blue-400 resize-none disabled:bg-gray-100';
    const textInputClass = 'block w-full bg-white border-b py-2 px-3 focus:outline-0 focus:border-b-blue-400';
    const numberInputClass = 'bg-white border rounded-lg py-2 px-3 focus:outline-0 focus:border-blue-400 block ms-0 w-full sm:inline sm:ms-3 sm:w-auto';

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-2xl uppercase mb-3'>
                7. Physical Security
            </h1>

            <Callout.Root>
                <Callout.Text>
                    An overview of physical security measures on the property.
                </Callout.Text>
            </Callout.Root>

            <div className='my-5'>
                <div className='mb-5'>
                    <div className='mb-3'>
                        <p className='text-lg font-medium'>
                            7.6 Florida Statute 768.0706 (2) Requirements
                        </p>
                        <span className='block text-sm text-blue-500'>
                            FS 768.0706 (2a)
                        </span>
                    </div>

                    <div className='bg-gray-100 rounded-lg border px-2'>
                        {
                            checkBoxes.map((checkBox, index) => (
                                <div key={index}
                                     className={`flex items-center gap-1 px-3 py-4 ${index !== checkBoxes.length - 1 ? 'border-b' : ''}`}
                                >
                                    <input id={`option-${index}`}
                                           type="checkbox"
                                           className=""
                                           {...register(`option-${index}`)}
                                    />
                                    <label htmlFor={`option-${index}`}
                                           className="ms-2 text-sm font-medium text-gray-900">
                                        {checkBox}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </form>
    );
}

export default FloridaStatute76807062Requirements