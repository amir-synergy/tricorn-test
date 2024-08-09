import ImageGrid from "@/app/report/components/ImageGrid";

interface Props {
    responses: any,
    imageResponses: any
}

const CrimeAnalysis = ({ responses, imageResponses }: Props) => {
    return (
        <section id='crime-analysis'>
            <div className='mb-10 mt-16'>
                <div className='mb-10'>
                    <h1 className='text-orange-600 text-3xl uppercase mb-3'>
                        3. Crime Analysis
                    </h1>
                    <p>
                        This section provides information on crime statistics for the surrounding
                        neighborhood and for the property.
                    </p>
                </div>

                <div className='mb-10' id='violent-and-property-crime-risk'>
                    <h3 className='text-2xl mb-5 px-5 uppercase'>
                        3.1 Violent and property crime risk
                    </h3>

                    <ImageGrid
                        images={imageResponses['violent-and-property-crime-risk']?.violent_and_property_crime_risk}
                        caption='Violent and property crime risk images'
                        imageGridOnPrint={'imageGrid-1'}
                    />

                    <div className='mb-5'>
                        <div className="overflow-x-auto border rounded-lg">
                            <table
                                className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                                <thead className="bg-blue-300">
                                <tr>
                                    <th scope="col"
                                        colSpan={2}
                                        className="px-6 py-3 text-md font-medium uppercase text-left sm:text-center">
                                        Calls service on property calculated per 1000 capita based
                                        on <b>{responses['violent-and-property-crime-risk'].callsServiceOnPropertyCalculatedPer1000Capita}</b>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="divide-x divide-gray-200">
                                    <td className="w-1/2 px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                        Homicide
                                    </td>
                                    <td className="w-1/2 px-6 py-4 whitespace-nowrap font-medium">
                                        {responses['violent-and-property-crime-risk'].homicide}
                                    </td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="w-1/2 px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                        Rape
                                    </td>
                                    <td className="w-1/2 px-6 py-4 whitespace-nowrap font-medium">
                                        {responses['violent-and-property-crime-risk'].rape}
                                    </td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="w-1/2 px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                        Aggravated Assault
                                    </td>
                                    <td className="w-1/2 px-6 py-4 whitespace-nowrap font-medium">
                                        {responses['violent-and-property-crime-risk'].aggravatedAssault}
                                    </td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="w-1/2 px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                        Armed Robbery
                                    </td>
                                    <td className="w-1/2 px-6 py-4 whitespace-nowrap font-medium">
                                        {responses['violent-and-property-crime-risk'].armedRobbery}
                                    </td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="w-1/2 px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                        Burglary
                                    </td>
                                    <td className="w-1/2 px-6 py-4 whitespace-nowrap font-medium">
                                        {responses['violent-and-property-crime-risk'].burglary}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='mb-5'>
                        <h3 className='text-2xl mb-3 text-blue-500 italic'>
                            Comments
                        </h3>

                        <p className='mb-5'>
                            {responses['violent-and-property-crime-risk'].comments}
                        </p>

                        <ImageGrid
                            images={imageResponses['violent-and-property-crime-risk']?.radius_of_heatmaps_images}
                            caption='Heatmaps images'
                            imageGridOnPrint={'imageGrid-2'}
                        />
                    </div>

                    <div className='mb-5'>
                        <h3 className='text-2xl mb-3 text-blue-500 italic'>
                            Crime Analysis
                        </h3>

                        <p className='mb-5'>
                            {responses['violent-and-property-crime-risk'].crimeAnalysis}
                        </p>
                    </div>
                </div>

                <div className='mb-10' id='crime-trend-analysis'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-3 px-5 uppercase'>
                            3.2 Crime trend analysis
                        </h3>
                        <p>
                            The graphs below plot past, present and future crime risk trends in
                            5-year intervals. The Risk Index uses a
                            0 to 5,000 scale where 100 is the national average and 0 is lowest risk.
                        </p>
                    </div>

                    <ImageGrid
                        images={imageResponses['crime-trend-analysis']?.crime_trend_analysis}
                        caption={'Crime trend analysis'}
                        imageGridOnPrint={'imageGrid-1'}
                    />

                    <div className='mb-5'>
                        <h3 className='text-2xl mb-3 text-blue-500 italic'>
                            Notes
                        </h3>

                        <p className='mb-5'>
                            {responses['crime-trend-analysis'].notes}
                        </p>
                    </div>
                </div>

                <div className='mb-10'
                     id='observations-on-crime-and-suspicious-activity-for-the-property'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-3 px-5 uppercase'>
                            3.3 Observations on crime and suspicious activity for the property
                        </h3>
                        <p>
                            Observations by the assessor and reporting of crime by residents and
                            site staff.
                        </p>
                    </div>

                    <div className='mb-5'>
                        <h3 className='text-2xl mb-3 text-blue-500 italic'>
                            Assessor observations
                        </h3>

                        <p className='mb-5'>
                            {responses['observations-on-crime-and-suspicious-activity-for-the-property'].assessorObservations}
                        </p>
                    </div>

                    <div className='mb-5'>
                        <h3 className='text-2xl mb-3 text-blue-500 italic'>
                            Concerns expressed by site staff and residents
                        </h3>

                        <p className='mb-5'>
                            {responses['observations-on-crime-and-suspicious-activity-for-the-property'].concernsExpressedBySiteStaffAndResidents}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default CrimeAnalysis