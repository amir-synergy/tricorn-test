import Header from "@/app/dashboard/components/Header";
import SideNav from "@/app/dashboard/components/SideNav";
import MobileNavBar from "@/app/dashboard/components/MobileNavBar";
import {Avatar, Box, Flex, Text} from "@radix-ui/themes";
import {FiLogOut, FiMail} from "react-icons/fi";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/auth/authOptions";
import Link from "next/link";

const ProfilePage = async () => {
    const session = await getServerSession(authOptions);
    const user = session!.user!;

    return (
        <>
            <SideNav/>
            <MobileNavBar/>
            <div className="sm:ml-64 bg-gradient min-h-screen pb-[105px]">
                <article className="lg:p-10 md:p-8 p-6">
                    <Header page={'Profile'} button={false}/>

                    <div className='mt-5'>
                        <div className='lg:p-10 md:p-8 p-5 bg-white rounded-lg relative'>
                            <Flex align='center'>
                                <Avatar radius="full" fallback={user?.name![0]} size='6'
                                        className='!border-2 !border-blue-500'/>
                                <Text size='5' as='p' ml='6' color='blue'>{user.name}</Text>
                            </Flex>

                            <Box mt='6'>
                                <Text size='4' color='blue' className='!flex'>
                                    <FiMail size={25} className='me-3'/>
                                    Email:
                                </Text>
                                <Text size='3' as='p' mt='2'>
                                    {user.email}
                                </Text>
                            </Box>
                        </div>

                        <Link href={'/auth/logout'} className="flex sm:hidden mt-5 rounded-lg text-[18px] items-center bg-white py-4 px-7 text-gray-900">
                            <FiLogOut size={23} />
                            <span className="ms-3 block">Log Out</span>
                        </Link>
                    </div>
                </article>
            </div>
        </>
    );
}

export default ProfilePage