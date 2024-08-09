import {FiCheck} from "react-icons/fi";
import ImageGrid from "@/app/report/components/ImageGrid";

interface Props {
    responses: any,
    imageResponses: any
}

const PhysicalSecurity = ({ responses, imageResponses }: Props) => {
    const checkBoxes = [
        'A security camera system at points of entry and exit which records, and maintains as retrievable for at least 30 days, video footage to assist in offender identification and apprehension.',
        'A lighted parking lot illuminated at an intensity of at least an average of 1.8 foot-candles per square foot at 18 inches above the surface from dusk until dawn or controlled by photocell or any similar electronic device that provides light from dusk until dawn.',
        'Lighting in walkways, laundry rooms, common areas, and porches. Such lighting must be illuminated from dusk until dawn or controlled by photocell or any similar electronic device that provides light from dusk until dawn.',
        'At least a 1-inch deadbolt in each dwelling unit door.',
        'A locking device on each window, each exterior sliding door, and any other doors not used for community purposes.',
        'Locked gates with key or fob access along pool fence areas.',
        'A peephole or door viewer on each dwelling unit door that does not include a window or that does not have a window next to the door.'
    ];

    return (
        <section id='physical-security'>
            <div className='mb-10 mt-16'>
                <div className='mb-10'>
                    <h1 className='text-orange-600 text-3xl mb-3 uppercase'>
                        7. Physical Security
                    </h1>
                    <p>
                        An overview of physical security measures on the property.
                    </p>
                </div>

                <div className='mb-10' id='camera-system'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-2 px-5 uppercase'>
                            7.1 Camera system
                        </h3>
                    </div>

                    <p className='mb-5'>
                        {responses['camera-system'].cameraSystem}
                    </p>

                    <ImageGrid
                        images={imageResponses['camera-system']?.camera_system_images}
                        caption={'Camera system images'}
                    />
                </div>

                <div className='mb-10' id='security-services'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-2 px-5 uppercase'>
                            7.2 Security Services
                        </h3>
                    </div>

                    <p className='mb-5'>
                        {responses['security-services'].securityServices}
                    </p>

                    <ImageGrid
                        images={imageResponses['security-services']?.security_services_images}
                        caption={'Security services images'}
                    />
                </div>

                <div className='mb-10' id='electronic-access-control'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-2 px-5 uppercase'>
                            7.3 (Electronic) access control
                        </h3>
                    </div>

                    <p className='mb-5'>
                        {responses['electronic-access-control'].electronicAccessControl}
                    </p>

                    <ImageGrid
                        images={imageResponses['electronic-access-control']?.electronic_access_control_images}
                        caption={'Electronic access control images'}
                    />
                </div>

                <div className='mb-10' id='residential-units'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-2 px-5 uppercase'>
                            7.4 Residential units
                        </h3>
                    </div>

                    <p className='mb-5'>
                        {responses['residential-units'].residentialUnits}
                    </p>

                    <ImageGrid
                        images={imageResponses['residential-units']?.residential_units_images}
                        caption={'Residential units images'}
                    />
                </div>

                <div className='mb-10' id='key-control'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-2 px-5 uppercase'>
                            7.5 Key control
                        </h3>
                    </div>

                    <p className='mb-5'>
                        {responses['key-control'].keyControl}
                    </p>

                    <ImageGrid
                        images={imageResponses['key-control']?.key_control_images}
                        caption={'Residential units images'}
                    />
                </div>

                {
                    responses.introduction.propertyState.toLowerCase() === 'fl' &&
                    (
                        <div className='mb-10' id='florida-statute-7680706-2-requirements'>
                            <div className='mb-5'>
                                <h3 className='text-2xl mb-2 px-5 uppercase'>
                                    7.6 Florida Statute 768.0706 (2) requirements
                                </h3>

                                <p className='mb-3'>
                                    The owner or principal operator of a multifamily residential property which
                                    substantially implements the following security measures on that property has a
                                    presumption against liability in connection with criminal acts that occur on the
                                    premises which are committed by third parties who are not employees or agents of the
                                    owner or operator: The property will receive a check mark for all items that are in
                                    compliance with the requirements
                                </p>

                                <i className='text-blue-500'>
                                    FS 768.0706 (2a)
                                </i>
                            </div>

                            <div className='bg-white rounded-lg border px-2 mb-5'>
                                {
                                    checkBoxes.map((checkBox, index) => (
                                        <div key={index}
                                             className={`flex items-center gap-1 px-3 py-4 ${index !== checkBoxes.length - 1 ? 'border-b' : ''}`}
                                        >
                                            {responses['florida-statute-7680706-2-requirements'][`option-${index}`] === 'true' ? (
                                                <div
                                                    className='w-[15px] h-[15px] rounded-md flex justify-center content-center align-middle bg-blue-500'>
                                                    <FiCheck color='#fff'/>
                                                </div>
                                            ) : (
                                                <div
                                                    className='w-[15px] h-[15px] border rounded-md flex justify-center content-center align-middle'>
                                                </div>
                                            )}

                                            <label htmlFor={`option-${index}`}
                                                   className="ms-2 text-sm font-medium text-gray-900 w-[90%]">
                                                {checkBox}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='mb-5'>
                                <i className='text-blue-500'>
                                    FS 768.0706 (2b)
                                </i>
                                <p className='mt-2'>
                                    By January 1, 2025, the owner or principal operator of a multifamily residential
                                    property has a crime prevention through environmental design assessment that is
                                    no more than 3 years old completed for the property. Such assessment must be
                                    performed by a law enforcement agency or a Florida Crime Prevention Through
                                    Environmental Design Practitioner designated by the Florida Crime Prevention
                                    Training Institute of the Department of Legal Affairs. The owner or principal
                                    operator must remain in substantial compliance with the assessment for purposes
                                    of this paragraph.
                                </p>
                            </div>

                            <div className='mb-5'>
                                <i className='text-blue-500'>
                                    FS 768.0706 (2c)
                                </i>
                                <p className='mt-2'>
                                    By January 1, 2025, the owner or principal operator of a multifamily residential
                                    property provides proper crime deterrence and safety training to its current
                                    employees. After January 1, 2025, the owner or principal operator must provide
                                    such training to an employee within 60 days after his or her hire date for
                                    purposes of this paragraph.
                                </p>
                            </div>
                        </div>
                    )
                }

            </div>
        </section>
    );
}

export default PhysicalSecurity