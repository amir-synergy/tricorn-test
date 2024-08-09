import ImageGrid from "@/app/report/components/ImageGrid";

interface Props {
    responses: any,
    imageResponses: any
}

const Disorder = ({ responses, imageResponses }: Props) => {
    return (
        <section id='disorder'>
            <div className='mb-10 mt-16'>
                <div className='mb-10'>
                    <h1 className='text-orange-600 text-3xl mb-3 uppercase'>
                        6. Disorder
                    </h1>
                    <p>
                        Signs of social and physical disorder on the property observed during the CPTED assessment
                    </p>
                </div>

                <div className='mb-10' id='social-disorder'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-2 px-5 uppercase'>
                            6.1 Social Disorder
                        </h3>
                    </div>

                    <p className='mb-5'>
                        {responses['social-disorder'].socialDisorder}
                    </p>

                    <ImageGrid
                        images={imageResponses['social-disorder']?.social_disorder_images}
                        caption='Social disorder images'
                    />
                </div>

                <div className='mb-10' id='physical-disorder'>
                    <div className='mb-5'>
                        <h3 className='text-2xl mb-2 px-5 uppercase'>
                            6.2 Physical Disorder
                        </h3>
                    </div>

                    <p className='mb-5'>
                        {responses['physical-disorder'].physicalDisorder}
                    </p>

                    <ImageGrid
                        images={imageResponses['physical-disorder']?.physical_disorder_images}
                        caption='Physical disorder images'
                    />
                </div>

            </div>
        </section>
    );
}

export default Disorder