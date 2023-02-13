import './globals.css'
import {ReactNode} from "react";
import { Caveat } from '@next/font/google';
import DayContextProvider from "@/day-context";
import 'server-only';

import SupabaseListener from '../components/supabase-listener';
import SupabaseProvider from '../components/supabase-provider';
import Login from '../components/login';
import './globals.css';
import {createClient} from "@/supabase-browser";

const font = Caveat({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-caveat',
});

export default async function RootLayout({
                                             children,
                                         }: {
    children: ReactNode
}) {
    const supabase = createClient()

    const {
        data: {session},
    } = await supabase.auth.getSession()


    return (
        <html lang="en" className={font.variable + " bg-gray-900 bg-[url(/bg/body-bg.png)] bg-repeat"}>
        <head/>
        <body className="grid grid-cols-1 mx-4">
        <SupabaseProvider session={session}>
            <SupabaseListener serverAccessToken={session?.access_token}/>
            <Login/>
            <DayContextProvider>
                {children}
            </DayContextProvider>
        </SupabaseProvider>
        </body>
        </html>
    )
}