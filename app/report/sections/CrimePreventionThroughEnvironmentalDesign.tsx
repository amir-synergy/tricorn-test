import ImageGrid from "@/app/report/components/ImageGrid";

interface Props {
    responses: any,
    imageResponses: any
}

const CrimePreventionThroughEnvironmentalDesign = ({ responses, imageResponses }: Props) => {
    return (
        <section id='crime-prevention-through-environmental-design'>
            <div className='mb-10 mt-16'>
                <div className='mb-10'>
                    <h1 className='text-orange-600 text-3xl mb-3 uppercase'>
                        4. Crime Prevention Through Environmental Design
                    </h1>
                    <p>
                        Observations based on the 4 principles of Crime Prevention Through
                        Environmental Design
                    </p>
                </div>

                <div className='mb-10' id='natural-surveillance'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-2 px-5 uppercase'>
                            4.1 Natural Surveillance
                        </h3>
                        <i>
                            Natural surveillance is the placement of physical features, activities,
                            and people in a way that maximizes visibility.
                        </i>
                    </div>

                    <p className='mb-5'>
                        {responses['natural-surveillance'].naturalSurveillance}
                    </p>

                    <ImageGrid
                        images={imageResponses['natural-surveillance']?.natural_surveillance_photos}
                        caption={'Natural surveillance images'}
                    />
                </div>

                <div className='mb-10' id='natural-access-control'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-2 px-5 uppercase'>
                            4.2 Natural Access Control
                        </h3>
                        <i>
                            Natural access control physically guides people through a space by the
                            strategic design of streets, sidewalks, building entrances, and
                            landscaping.
                        </i>
                    </div>

                    <p className='mb-5'>
                        {responses['natural-access-control'].naturalAccessControl}
                    </p>

                    <ImageGrid
                        images={imageResponses['natural-access-control']?.natural_access_control_images}
                        caption={'Natural access control images'}
                    />
                </div>

                <div className='mb-10' id='territorial-reinforcement'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-2 px-5 uppercase'>
                            4.3 Territorial Reinforcement
                        </h3>
                        <i>
                            Territorial reinforcement is the use of physical attributes that express
                            ownership such as fencing, pavement treatments, signage, and
                            landscaping.
                        </i>
                    </div>

                    <p className='mb-5'>
                        {responses['territorial-reinforcement'].territorialReinforcement}
                    </p>

                    <ImageGrid
                        images={imageResponses['territorial-reinforcement']?.territorial_reinforcement_images}
                        caption={'Territorial reinforcement images'}
                    />
                </div>

                <div className='mb-10' id='maintenance-and-management'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-2 px-5 uppercase'>
                            4.4 Maintenance and Management
                        </h3>
                        <i>
                            The overall state of the property grounds and buildings on the property.
                            Maintenance allows for the continued use of a space for its intended
                            purpose and shows potential offenders that the owner takes ownership and
                            cares about the property.
                        </i>
                    </div>

                    <p className='mb-5'>
                        {responses['maintenance-and-management'].maintenanceAndManagement}
                    </p>

                    <ImageGrid
                        images={imageResponses['maintenance-and-management']?.maintenance_and_management_images}
                        caption={'Maintenance and management images'}
                    />
                </div>

            </div>
        </section>
    );
}

export default CrimePreventionThroughEnvironmentalDesign