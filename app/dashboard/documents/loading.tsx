import {Flex, Grid, Skeleton, Text} from "@radix-ui/themes";
import SideNav from "@/app/dashboard/components/SideNav";
import MobileNavBar from "@/app/dashboard/components/MobileNavBar";

const DocumentsLoading = () => {
    return (
        <>
            <SideNav/>
            <MobileNavBar/>

            <div className="sm:ml-64 bg-gradient min-h-screen pb-[105px]">
                <article className="lg:p-10 md:p-8 p-6">
                    <Flex align='center' justify='between'>
                        <Text size='8' className='font-medium'>Documents</Text>
                    </Flex>

                    <div>
                        <Grid columns={{initial: '1', md: '3'}} gap="3" width="auto" mt='4'>
                            <Skeleton height='400px'/>
                            <Skeleton height='400px'/>
                            <Skeleton height='400px'/>
                        </Grid>
                    </div>

                </article>
            </div>
        </>
    );
}

export default DocumentsLoading