import './globals.css'
import {ReactNode} from "react";
import { Caveat } from '@next/font/google';

const font = Caveat({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-caveat',
});

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={font.variable + " bg-gray-900 bg-[url(/bg/body-bg.png)] bg-repeat"}>
      <head />
      <body className="grid grid-cols-1 mx-4">{children}</body>
    </html>
  )
}
