import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { AppProvider } from '@/components/AppProvider';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
    title: "Meridian",
    description: "个人二手卖家轻量级利润记账应用",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN">
        <body>
        <AppProvider>
            {children}
        </AppProvider>
        <Analytics />
        </body>
        </html>
    );
}