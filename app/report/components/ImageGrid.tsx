import { Image } from "antd";

interface Props {
    images: any[],
    caption?: string,
    imageGridOnPrint?: string
}

const ImageGrid = ( { images, caption, imageGridOnPrint = 'imageGrid-3' }: Props ) => {
    if (!images) {
        return;
    }

    return (
        <div className='mb-5'>
            <div className={`grid grid-cols-3 sm:grid-cols-5 gap-5 mb-2 ${imageGridOnPrint}`}>
                {images.map((image: any, index: number) => (
                    <Image key={index}
                           src={image.filePath}
                           alt={''}
                           className='object-cover col-span-1 w-full aspect-[3/4] rounded-lg'
                           loading='lazy'
                    />
                ))}
            </div>

            {caption && <i className='text-gray-500'>{caption}</i>}
        </div>
    )
}

export default ImageGrid