import '@radix-ui/themes/styles.css';
import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "./custom.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Dashboard | Signal",
    description: "Mobile Patrol Security Services",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Theme accentColor='blue'>
                    {children}
                </Theme>
            </body>
        </html>
    );
}
