import { Spinner, Text } from "@radix-ui/themes";

const TopLoadingOverlay = ({ isLoading }: { isLoading: boolean }) => {
    if (!isLoading) return null;

    return (
        <div className='fixed inset-0 flex items-start justify-center m-3 z-50' role="status" aria-live="polite">
            <div className='animate-fadeDown bg-white inline py-1 px-2 shadow-md rounded-lg'>
                <div className='flex items-center text-black gap-3'>
                    <Spinner />
                    <Text size='2'>
                        Loading...
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default TopLoadingOverlay;