import ImageGrid from "@/app/report/components/ImageGrid";

interface Props {
    responses: any,
    imageResponses: any
}

const SiteContext = ({ responses, imageResponses }: Props) => {
    return (
        <section id='site-context'>
            <div className='mb-10 mt-16'>
                <div className='mb-10'>
                    <h1 className='text-orange-600 text-3xl uppercase'>
                        2. Site Context
                    </h1>
                </div>

                <div className='mb-10' id='site-description'>
                    <h3 className='text-2xl mb-5 px-5 uppercase'>
                        2.1 Site description
                    </h3>

                    <p className='mb-5'>
                        {responses['site-description'].siteDescription}
                    </p>

                    <ImageGrid
                        images={imageResponses['site-description']?.satellite_image}
                        caption='Satellite image'
                        imageGridOnPrint={'imageGrid-1'}
                    />
                </div>

                <div className='mb-10' id='neighborhood-observation'>
                    <h3 className='text-2xl mb-5 px-5 uppercase'>
                        2.2 Neighborhood observation
                    </h3>

                    <p className='mb-5'>
                        {responses['neighborhood-observation'].neighborhoodObservation}
                    </p>

                    <ImageGrid
                        images={imageResponses['neighborhood-observation']?.neighborhood_observation_images}
                        caption='Neighborhood observation images'
                    />
                </div>
            </div>
        </section>
    )
}

export default SiteContext