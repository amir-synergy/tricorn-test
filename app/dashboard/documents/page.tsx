import Header from "@/app/dashboard/components/Header";
import SideNav from "@/app/dashboard/components/SideNav";
import MobileNavBar from "@/app/dashboard/components/MobileNavBar";
import { prisma } from "@/prisma/client";
import { Grid } from "@radix-ui/themes";

const DocumentsPage = async () => {
    const documents = await prisma.documents.findMany();

    return (
        <>
            <SideNav/>
            <MobileNavBar/>
            <div className="sm:ml-64 bg-gradient min-h-screen pb-[105px]">
                <article className="lg:p-10 md:p-8 p-6">
                    <Header page={'Documents'} button={false}/>

                    <div>
                        <Grid columns={{ initial: '1', md: '3' }} gap="3" width="auto" mt='4'>
                            {
                                documents.map(document => (
                                    <div key={document.id} className='p-4 bg-white rounded-lg relative'>
                                        <iframe src={document.url} className='w-full rounded-lg h-[300px]'></iframe>

                                        <div className='mt-3'>
                                            <p className='text-xl font-medium'>{document.title}</p>
                                            <p>{document.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Grid>
                    </div>
                </article>
            </div>
        </>
    );
}

export default DocumentsPage