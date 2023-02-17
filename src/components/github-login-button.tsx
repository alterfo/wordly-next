'use client'
import {createClient} from "@/supabase-browser";

export default function GithubLoginButton() {
	const supabase = createClient()

	const handleGitHubLogin = async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'github'
		});

		if (error) {
			console.log({ error });
		}
	};

	return <>
		<button className="text-blue-50" onClick={handleGitHubLogin}>GitHub Login</button>
	</>
}
