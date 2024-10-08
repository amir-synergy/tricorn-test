import '@radix-ui/themes/styles.css';
import "./globals.css";
import React from "react";
import type {Metadata, Viewport} from "next";
import { Montserrat } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "./custom.css";
import SessionWrapper from "@/app/SessionWrapper";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Team Signal",
    description: "Mobile Patrol Security Services",

};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    userScalable: false,
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
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
