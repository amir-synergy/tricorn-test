import ReactMarkdown from "react-markdown";
import ImageGrid from "@/app/report/components/ImageGrid";

interface Props {
    responses: any,
    imageResponses: any
}

const Summary = ({ responses, imageResponses }: Props) => {
    return (
        responses['summary'].summary && (
            <section id=''>
                <div className='my-16'>
                    <div className='mb-10' id='summary'>
                        <h1 className='text-orange-600 text-3xl uppercase mb-3'>
                            Summary
                        </h1>
                    </div>

                    <div className='mb-10 prose !w-full'>
                        <div className='mb-5'>
                            <ReactMarkdown>
                                {responses['summary'].summary}
                            </ReactMarkdown>
                        </div>
                    </div>

                    <div className='mb-10'>
                        <ImageGrid
                            images={imageResponses['summary']?.summary_images}
                            caption='Summary Images'
                        />
                    </div>
                </div>
            </section>
        )
    );
}

export default Summary