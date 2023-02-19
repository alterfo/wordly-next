import {useRouter} from 'next/router';
import {
	createBrowserSupabaseClient,
	Session
} from '@supabase/auth-helpers-nextjs';
import {SessionContextProvider, useUser} from '@supabase/auth-helpers-react';
import type {AppProps} from 'next/app';
import {useState} from 'react';
import '../globals.css';
import {Caveat} from "@next/font/google";

const font = Caveat({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-caveat',
});

function MyApp({
				   Component,
				   pageProps
			   }: AppProps<{ initialSession: Session }>) {
	const router = useRouter();
	const [supabaseClient] = useState(() =>
		createBrowserSupabaseClient()
	);
	console.log(pageProps.initialSession);

	return (<main className={font.variable}>
			<SessionContextProvider
				supabaseClient={supabaseClient}
				initialSession={pageProps.initialSession}
			>
				{<button
					onClick={async () => {
						await supabaseClient.auth.signOut();
						router.push('/');
					}}
					className="text-blue-50"
				>
					Logout
				</button>}

				<Component {...pageProps} />
			</SessionContextProvider>
		</main>
	);
}

export default MyApp;