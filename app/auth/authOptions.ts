import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/prisma/client";
import {CustomUser} from "@/types";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        Credentials({
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
                    // return Promise.resolve(null);
                    return null;
                }

                const passwordsMatch = await bcrypt.compare(
                    credentials.password,
                    user.password!
                );

                if (!passwordsMatch) {
                    // return Promise.resolve(null);
                    return null;
                }

                // return Promise.resolve(user);
                return user;
            }
        })
    ],

    session: {
        strategy: 'jwt'
    },

    pages: {
        signIn: '/auth/login',
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user as CustomUser;
            }

            return token;
        },

        async session({ session, token }) {
            session.user = token.user!;
            return session;
        },

        // async redirect({ url, baseUrl, token }) {
        //     if (token.user.role === 'admin') {
        //         return `${baseUrl}/admin`;
        //     } else {
        //         return `${baseUrl}/dashboard`;
        //     }
        // }
    },
}