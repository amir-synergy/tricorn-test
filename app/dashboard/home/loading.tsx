import {Flex, Grid, Skeleton, Text} from "@radix-ui/themes";
import SideNav from "@/app/dashboard/components/SideNav";
import MobileNavBar from "@/app/dashboard/components/MobileNavBar";

const HomeLoading = () => {
    return (
        <>
            <SideNav/>
            <MobileNavBar/>

            <div className="sm:ml-64 bg-gradient min-h-screen pb-[105px]">
                <article className="lg:p-10 md:p-8 p-6">
                    <Flex align='center' justify='between'>
                        <Text size='8' className='font-medium'>Home</Text>
                        <Skeleton width='210px' height='50px' className='!hidden sm:!block'/>
                    </Flex>

                    <div className='mt-5'>
                        <Text size='7' mt='4'>My Drafts</Text>
                        <Grid columns={{initial: '1', md: '3'}} gap="4" width="auto" mt='4'>
                            <Skeleton height='200px'/>
                            <Skeleton height='200px'/>
                            <Skeleton height='200px'/>
                        </Grid>
                    </div>
                </article>
            </div>
        </>
    );
}

export default HomeLoading