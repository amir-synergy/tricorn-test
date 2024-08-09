interface Props {
    responses: any;
}

const Introduction = ({ responses }: Props ) => {
    return (
        <section id='introduction'>
            <div className='mb-10 mt-16'>
                <h1 className='text-orange-600 text-3xl uppercase mb-10'>
                    1. Introduction
                </h1>

                <div className='mb-10' id='scope'>
                    <h3 className='text-2xl mb-5 px-5 uppercase'>
                        1.1 Scope
                    </h3>

                    <p className='mb-3'>
                        <span>On <b>{responses.introduction.assessmentDate}</b>, Signal conducted a CPTED assessment at <b>{responses.introduction.propertyName}</b>. </span>
                        <span>Based on the physical inspection conducted of the property, and the surrounding neighborhood, this security assessment serves to identify critical, physical, and procedural vulnerabilities to provide stakeholders with common mitigation solutions for consideration. </span>
                        {
                            responses.introduction.propertyState.toLowerCase() === 'fl' &&
                            <span>The primary focus of this report is on physical security, crime prevention through environmental design and compliance with Florida Statute 768.0706 (2) . </span>
                        }
                        <span>A CPTED assessment is a specialist study undertaken to help reduce opportunities for crime by using design and place management principles. </span>
                        <span>A CPTED assessment examines four key principles. </span>
                    </p>

                    <p className='mb-3'>
                        Where CPTED risks are identified during the assessment, considerations are
                        suggested within this report to aid in reducing the likelihood of the crime
                        from occurring. Lighting will be addressed separately, and a lighting map
                        will be attached to the report.
                    </p>

                    <p className='mb-3'>
                        Although this report references elements regarding building safety, ADA
                        compliance or fire hazard prevention, it is beyond the scope of this report
                        and should be addressed respectively.
                    </p>

                    <p className='mb-3'>
                        The observations made by the assessor and presented in this report are based
                        on industry standard references, best practices, acquired knowledge and the
                        assessor’s professional experience in efforts to tailor the suggested mitigation
                        options to the physical and operational needs of the property. Solutions for
                        consideration listed within the report do not necessarily include every option
                        available, but rather present some of the most common options employed within
                        the security industry.
                    </p>
                </div>

                <div className='mb-10' id='disclaimer'>
                    <h3 className='text-2xl mb-5 px-5 uppercase'>
                        1.2 Disclaimer
                    </h3>

                    <p className='mb-3'>
                        Any action taken by a recipient of this report or by his/her representatives
                        based upon this assessment does not guarantee nor warrant in any way whatsoever
                        that the assessed location/s, property, its users or visitors may or may not be
                        rendered safer, invulnerable or in any fashion impervious to successful penetration,
                        attack or other act which could cause property damage and/or personal injury to the
                        facility or its patrons. By accepting this assessment report, and or by taking or
                        avoiding to take any action based on its written or verbal content, client hereby
                        agrees to RELEASE, WAIVE, DISCHARGE, HOLD HARMLESS and NOT SUE Signal, any of its
                        officers and or employees, for any and all loss, harm, liability or damage caused
                        as a consequence of the assessment, release of the written report, pictures and assessors’
                        opinion including any loss arising from a claim of negligence. Further, by accepting
                        this report, client agrees to INDEMNIFY Signal, its agents, officers and employees
                        from any loss, harm, liability, lawsuits, damages, or costs, including court costs
                        and attorney fees.
                    </p>
                </div>

                <div className='mb-10' id='methodology'>
                    <h3 className='text-2xl mb-5 px-5 uppercase'>
                        1.3 Methodology
                    </h3>

                    {/*<div className="border rounded-lg mb-10">*/}
                    {/*    <table className="w-full bg-white rounded-lg table-fixed">*/}
                    {/*        <thead>*/}
                    {/*        <tr className="bg-blue-300">*/}
                    {/*            <th className="w-1/3 text-sm sm:text-[16px] py-3 px-2 sm:px-4 text-left text-blue-900 font-semibold border-b border-e rounded-tl-lg">*/}
                    {/*                Crime analysis*/}
                    {/*            </th>*/}
                    {/*            <th className="w-1/3 text-sm sm:text-[16px] py-3 px-2 sm:px-4 text-left text-blue-900 font-semibold border-b border-e">*/}
                    {/*                Assessment*/}
                    {/*            </th>*/}
                    {/*            <th className="w-1/3 text-sm sm:text-[16px] py-3 px-2 sm:px-4 text-left text-blue-900 font-semibold border-b rounded-tr-lg">*/}
                    {/*                Considerations & Compliance*/}
                    {/*            </th>*/}
                    {/*        </tr>*/}
                    {/*        </thead>*/}
                    {/*        <tbody>*/}
                    {/*        <tr>*/}
                    {/*            <td className="py-3 px-1 text-sm sm:p-4 sm:text-[16px] border-e">*/}
                    {/*                <ul className="list-disc pl-5 space-y-2">*/}
                    {/*                    <li>Crime statistics analysis for Homicide, Rape, Aggravated*/}
                    {/*                        assault, Armed Robbery and Burglary*/}
                    {/*                    </li>*/}
                    {/*                    <li>Comparison between crime statistics for the neighborhood*/}
                    {/*                        and the property*/}
                    {/*                    </li>*/}
                    {/*                </ul>*/}
                    {/*            </td>*/}
                    {/*            <td className="py-3 px-1 text-sm sm:p-4 sm:text-[16px] border-e">*/}
                    {/*                <ul className="list-disc pl-5 space-y-2">*/}
                    {/*                    <li>Neighborhood CPTED assessment</li>*/}
                    {/*                    <li>Site CPTED assessment</li>*/}
                    {/*                    <li>Physical security assessment</li>*/}
                    {/*                    <li>Comprehensive light assessment</li>*/}
                    {/*                </ul>*/}
                    {/*            </td>*/}
                    {/*            <td className="py-3 px-1 text-sm sm:p-4 sm:text-[16px]">*/}
                    {/*                <ul className="list-disc pl-5 space-y-2">*/}
                    {/*                    <li>Considerations based on observations</li>*/}
                    {/*                    <li>Compliance on considerations</li>*/}
                    {/*                </ul>*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        </tbody>*/}
                    {/*    </table>*/}
                    {/*</div>*/}

                    <div className='grid md:grid-cols-3 gap-5'>
                        <div className='flex flex-col'>
                            <div className='px-4 py-3 bg-blue-300 text-blue-900 flex items-start rounded-t-lg'>
                                <b className='flex-grow'>Crime analysis</b>
                            </div>
                            <div className='p-4 border bg-white rounded-b-lg flex-grow'>
                                <ul className='list-disc px-4'>
                                    <li className='mb-3'>
                                        Crime statistics analysis for Homicide, Rape, Aggravated
                                        assault, Armed Robbery, and Burglary
                                    </li>
                                    <li>
                                        Comparison between crime statistics for the neighborhood and
                                        the property
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='px-4 py-3 bg-blue-300 text-blue-900 flex items-start rounded-t-lg'>
                                <b className='flex-grow'>Assessment</b>
                            </div>
                            <div className='p-4 border bg-white rounded-b-lg flex-grow'>
                                <ul className='list-disc px-4'>
                                    <li className='mb-3'>
                                        Neighborhood CPTED assessment
                                    </li>
                                    <li className='mb-3'>
                                        Site CPTED assessment
                                    </li>
                                    <li className='mb-3'>
                                        Physical security assessment
                                    </li>
                                    <li>
                                        Comprehensive light assessment
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='px-4 py-3 bg-blue-300 text-blue-900 flex items-start rounded-t-lg'>
                                <b className='flex-grow'>Considerations & Compliance</b>
                            </div>
                            <div className='p-4 border bg-white rounded-b-lg flex-grow'>
                                <ul className='list-disc px-4'>
                                    <li className='mb-3'>
                                        Considerations based on observations
                                    </li>
                                    <li>
                                        Compliance on considerations
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*<div className="container mx-auto mt-10">*/}
                    {/*    <div className="overflow-x-auto">*/}
                    {/*        <table className="min-w-full bg-white border border-gray-200">*/}
                    {/*            <thead className="bg-blue-100">*/}
                    {/*            <tr>*/}
                    {/*                <th className="py-3 px-6 text-left text-blue-800 border border-gray-200">Crime*/}
                    {/*                    analysis*/}
                    {/*                </th>*/}
                    {/*                <th className="py-3 px-6 text-left text-blue-800 border border-gray-200">Assessment</th>*/}
                    {/*                <th className="py-3 px-6 text-left text-blue-800 border border-gray-200">Considerations*/}
                    {/*                    and Compliance*/}
                    {/*                </th>*/}
                    {/*            </tr>*/}
                    {/*            </thead>*/}
                    {/*            <tbody>*/}
                    {/*            <tr className="border border-gray-200">*/}
                    {/*                <td className="py-3 px-6 border border-gray-200">*/}
                    {/*                    <ul className="list-disc list-inside">*/}
                    {/*                        <li>Crime statistics analysis for Homicide, Rape,*/}
                    {/*                            Aggravated*/}
                    {/*                            assault, Armed Robbery and Burglary*/}
                    {/*                        </li>*/}
                    {/*                        <li>Comparison between crime statistics for the*/}
                    {/*                            neighborhood*/}
                    {/*                            and the property*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                </td>*/}
                    {/*                <td className="py-3 px-6 border border-gray-200">*/}
                    {/*                    <ul className="list-disc list-inside">*/}
                    {/*                        <li>Neighborhood CPTED assessment</li>*/}
                    {/*                        <li>Site CPTED assessment</li>*/}
                    {/*                        <li>Physical security assessment</li>*/}
                    {/*                        <li>Comprehensive light assessment</li>*/}
                    {/*                    </ul>*/}
                    {/*                </td>*/}
                    {/*                <td className="py-3 px-6 border border-gray-200">*/}
                    {/*                    <ul className="list-disc list-inside">*/}
                    {/*                        <li>Considerations based on observations</li>*/}
                    {/*                        <li>Compliance on considerations</li>*/}
                    {/*                    </ul>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </table>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
);
}

export default Introduction