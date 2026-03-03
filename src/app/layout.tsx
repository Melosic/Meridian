import type { Metadata, Viewport } from "next";
import React from "react";
import "./globals.css";
import { AppProvider } from '@/components/AppProvider';
import { Analytics } from "@vercel/analytics/next";
import LanguageManager from '@/components/LanguageManager';

export const metadata: Metadata = {
    metadataBase: new URL('https://meridian.us.ci'),
    title: {
        default: 'Meridian - 商品利润记账 | Profit Bookkeeping',
        template: '%s | Meridian',
    },
    description: '面向个人卖家的轻量级利润记账Web应用，支持记录商品售价、成本、邮费，自动计算利润，支持商品图片、分类管理，并提供多账号内部成本结算功能。免费在线使用，无需下载。',
    keywords: [
        '利润记账', '商品管理', '财务管理', '卖家工具', '利润计算', '交易记录',
        '电商记账', '销售管理', '库存管理', '账单管理', '收入支出',
        'profit bookkeeping', 'seller tools', 'financial management', 
        'inventory management', 'sales tracking', 'business accounting',
        'small business', 'online store', 'reseller', 'bookkeeping software'
    ],
    authors: [{ name: 'Meridian' }],
    creator: 'Meridian',
    publisher: 'Meridian',
    category: 'business',
    classification: 'Finance/Accounting Software',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: 'https://meridian.us.ci',
        languages: {
            'zh-CN': 'https://meridian.us.ci',
            'en': 'https://meridian.us.ci',
        },
        media: {
            'only screen and (max-width: 640px)': 'https://meridian.us.ci',
        },
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Meridian',
    },
    appLinks: {
        ios: {
            url: 'https://meridian.us.ci',
            app_store_id: '',
        },
        android: {
            package: '',
            app_name: 'Meridian',
        },
        web: {
            url: 'https://meridian.us.ci',
            should_fallback: true,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'zh_CN',
        alternateLocale: 'en_US',
        url: 'https://meridian.us.ci',
        siteName: 'Meridian',
        title: 'Meridian - 商品利润记账',
        description: '面向个人卖家的轻量级利润记账Web应用，支持记录商品售价、成本、邮费，自动计算利润。免费在线使用，无需下载。',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Meridian - 商品利润记账',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Meridian - 商品利润记账',
        description: '面向个人卖家的轻量级利润记账Web应用，支持记录商品售价、成本、邮费，自动计算利润。免费在线使用，无需下载。',
        site: '@meridian',
        creator: '@meridian',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.svg',
        apple: '/favicon.svg',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: '#1677ff',
};

export default function RootLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Meridian',
        alternateName: 'Meridian - 商品利润记账',
        description: '面向个人卖家的轻量级利润记账Web应用，支持记录商品售价、成本、邮费，自动计算利润，支持商品图片、分类管理，并提供多账号内部成本结算功能。',
        url: 'https://meridian.us.ci',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web Browser, iOS, Android',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'CNY',
        },
        author: {
            '@type': 'Organization',
            name: 'Meridian',
            url: 'https://meridian.us.ci',
        },
    };

    return (
        <html lang="zh-CN">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
        <body>
        <AppProvider>
            <LanguageManager>{children}</LanguageManager>
        </AppProvider>
        <Analytics />
        </body>
        </html>
    );
}