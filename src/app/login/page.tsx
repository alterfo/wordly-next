import 'server-only'
import {createClient} from "@/supabase-server";
import {redirect} from "next/navigation";

export default async function LoginPage() {
	const supabase = createClient()

	const {
		data: {session},
	} = await supabase.auth.getSession()

	if (session) {
		redirect('/')
	}

	return <>

	</>
}
