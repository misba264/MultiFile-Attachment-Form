import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';



const SFProDisplay = localFont({
  // weight: ['400', '500', '700', '800', '900'],
  // weight: "../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_regular.woff2",
  src: [
    {
      path: '../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_regular.woff2',
   
      weight: '400',
    },
    {
      path: '../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_medium.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_semibold.woff2',
      weight: '600',
    },
    {
      path: '../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-SFPro',
});

export const metadata: Metadata = {
  title: 'OPS 2.0',
  description: 'Generated by Ops',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${SFProDisplay.variable} font-SFPro`}>
       
          {children}
          {/* <Footer /> */}
   
      </body>
    </html>
  );
}
