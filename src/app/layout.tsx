import './globals.css'
import {ReactNode} from "react";
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={inter.className + "bg-gray-900 bg-[url(/bg/body-bg.png)] bg-repeat"}>
      <head />
      <body>{children}</body>
    </html>
  )
}
