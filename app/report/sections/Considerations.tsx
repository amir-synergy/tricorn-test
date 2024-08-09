import ImageGrid from "@/app/report/components/ImageGrid";

interface Props {
    responses: any,
    imageResponses: any
}

const Considerations = ({ responses, imageResponses }: Props) => {
    const considerations = [
        { label: '8.1 Crime Prevention Through Environmental Design Considerations', name: 'crime-prevention-through-environmental-design-considerations' },
        { label: '8.2 Physical Security Considerations', name: 'physical-security-considerations' },
        { label: '8.3 Lighting Considerations', name: 'lighting-considerations' },
        { label: '8.4 Disorder Considerations', name: 'disorder-considerations' },
        { label: '8.5 Other Considerations', name: 'other-considerations' }
    ];

    return (
        <section id='considerations'>
            <div className='mb-10 mt-16'>
                <div className='mb-10'>
                    <h1 className='text-orange-600 text-3xl mb-3 uppercase'>
                        8. Considerations
                    </h1>
                    <p>
                        Following is a list with considerations based on the observations during the CPTED assessment.
                    </p>
                </div>

                {considerations.map((consideration, index) => (
                    <div key={index} className='mb-10' id={consideration.name}>
                        <h3 className='text-2xl mb-5 px-5 uppercase'>
                            {consideration.label}
                        </h3>

                        <div className='px-10'>
                            {responses[consideration.name] &&
                            Object.keys(responses[consideration.name]).length > 0 ? (
                                (Object.entries(responses[consideration.name]) as [string, string][]).map(([name, value], index) => {
                                    return (
                                        <div key={index} className='mb-5'>
                                            <p className='mb-5'>
                                                <b>8.1.{index + 1} </b>
                                                {value}
                                            </p>

                                            <ImageGrid images={imageResponses[consideration.name]?.[name] || []} />
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No considerations were found</p>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Considerations