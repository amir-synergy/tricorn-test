import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/prisma/client";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@domain.com" },
                password: { label: "Password", type: "password", placeholder: "Password"}
            },
            async authorize(credentials){
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials!.email }
                });

                if (!user) {
                    return null;
                }

                const passwordsMatch = await bcrypt.compare(
                    credentials.password,
                    user.password!
                );

                return passwordsMatch ? user : null;
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
}