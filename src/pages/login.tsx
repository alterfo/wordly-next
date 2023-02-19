import {
	useSessionContext,
	useSupabaseClient,
	useUser
} from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {Temporal} from "@js-temporal/polyfill";
import {useRouter} from "next/router";

const LoginPage: NextPage = () => {
	const { isLoading, session, error } = useSessionContext();
	const user = useUser();
	const supabaseClient = useSupabaseClient();

	const [data, setData] = useState(null);

	const router = useRouter()

	if (!session) {
		return (
			<>
				{error && <p>{error.message}</p>}
				{isLoading ? <h1>Loading...</h1> : <h1>Loaded!</h1>}
				<Auth
					redirectTo="http://localhost:3000"
					appearance={{theme: ThemeSupa}}
					supabaseClient={supabaseClient}
					providers={['github']}
					socialLayout="horizontal"
				/>
			</>
		);
	} else {
		router.push('/' + Temporal.Now.plainDateISO().toString())
	}
	return (
		<>
			<p>
				[<Link href="/profile">getServerSideProps</Link>] | [
				<Link href="/protected-page">server-side RLS</Link>] |{' '}
			</p>
			{isLoading ? <h1>Loading...</h1> : <h1>Loaded!</h1>}
			{/*<p>user:</p>*/}
			{/*<pre>{JSON.stringify(session, null, 2)}</pre>*/}
			{/*<p>client-side data fetching with RLS</p>*/}
			{/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
		</>
	);
};

export default LoginPage;