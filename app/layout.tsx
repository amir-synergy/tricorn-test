import '@radix-ui/themes/styles.css';
import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "./custom.css";
import SessionWrapper from "@/app/SessionWrapper";
import Head from "next/head";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Team Signal",
    description: "Mobile Patrol Security Services",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            </Head>
            <body className={montserrat.className}>
                <SessionWrapper>
                    <Theme accentColor='blue'>
                        {children}
                    </Theme>
                </SessionWrapper>
            </body>
        </html>
    );
}
