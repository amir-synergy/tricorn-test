import {Flex, Skeleton, Text} from "@radix-ui/themes";
import SideNav from "@/app/dashboard/components/SideNav";
import MobileNavBar from "@/app/dashboard/components/MobileNavBar";

const ProfileLoading = () => {
    return (
        <>
            <SideNav/>
            <MobileNavBar/>

            <div className="sm:ml-64 bg-gradient min-h-screen pb-[105px]">
                <article className="lg:p-10 md:p-8 p-6">
                    <Flex align='center' justify='between'>
                        <Text size='8' className='font-medium'>Profile</Text>
                    </Flex>

                    <div className='mt-5'>
                        <Skeleton className='sm:!h-[250px] !h-[210px]' />
                    </div>

                    <div className='mt-5'>
                        <Skeleton height='60px' className='sm:!hidden'/>
                    </div>

                </article>
            </div>
        </>
    );
}

export default ProfileLoading