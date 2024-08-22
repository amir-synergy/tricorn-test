import ImageGrid from "@/app/report/components/ImageGrid";

interface Props {
    responses: any,
    imageResponses: any
}

const Lighting = ({ responses, imageResponses }: Props) => {
    return (
        <section id=''>
            <div className='mb-10 mt-16'>
                <div className='mb-10' id='lighting'>
                    <h1 className='text-orange-600 text-3xl mb-3 uppercase'>
                        5. Lighting
                    </h1>
                    <i>
                        <span>A comprehensive light assessment was conducted by the assessor. Utilizing a NIST certified light meter, measurements in footcandles were taken at a height of 18” to identify insufficient illumination levels and other deficiencies with lighting. </span>

                        {responses.introduction.propertyState.toLowerCase() === 'fls' &&
                            'The assessor proposes considerations based on the requirements in Florida HB 837.'}

                        <span> Attached is a lighting map that includes specific measurements and light placement. The assessor is not a lighting engineer. The light assessment is conducted on the basic understanding of lighting and lighting applications.</span>
                    </i>
                </div>

                <div className='mb-10'>
                    {/*<h3 className='text-2xl mb-3 text-blue-500 italic'>*/}
                    {/*    Notes*/}
                    {/*</h3>*/}

                    <p className='mb-5 whitespace-pre-line'>
                        {responses['lighting'].notes}
                    </p>

                    <ImageGrid
                        images={imageResponses['lighting']?.lighting_images}
                        caption='Lighting images'
                    />

                    <ImageGrid
                        images={imageResponses['lighting']?.lighting_map}
                        caption='Lighting Map'
                        imageGridOnPrint='imageGrid-1'
                    />

                    <ImageGrid
                        images={imageResponses['lighting']?.lighting_layout}
                        caption='Lighting Layout'
                        imageGridOnPrint='imageGrid-1'
                    />
                </div>

            </div>
        </section>
    );
}

export default Lighting