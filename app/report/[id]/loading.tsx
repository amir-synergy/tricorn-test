import {Spinner} from "@radix-ui/themes";

const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Spinner size='3' />
        </div>
    );
}

export default loading