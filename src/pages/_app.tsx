import {useRouter} from 'next/router';
import {
	createBrowserSupabaseClient, createServerSupabaseClient,
	Session
} from '@supabase/auth-helpers-nextjs';
import {SessionContextProvider, useSessionContext, useUser} from '@supabase/auth-helpers-react';
import type {AppProps} from 'next/app';
import {useState} from 'react';
import '../globals.css';
import {Caveat} from "@next/font/google";
import {Temporal} from "@js-temporal/polyfill";

const font = Caveat({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-caveat',
});

function MyApp({
						 Component,
						 pageProps
					 }: AppProps<{ initialSession: Session, user: any }>) {
	const [supabaseClient] = useState(() =>
		createBrowserSupabaseClient()
	);

	return (<main className={font.variable}>
			<SessionContextProvider
				supabaseClient={supabaseClient}
				initialSession={pageProps.initialSession}
			>
				<Component {...pageProps} />
			</SessionContextProvider>
		</main>
	);
}

export default MyApp;