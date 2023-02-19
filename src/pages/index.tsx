import {Temporal} from "@js-temporal/polyfill";
import {useSessionContext} from "@supabase/auth-helpers-react";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Index() {
	const { session } = useSessionContext();
	const router = useRouter()

	useEffect(() => {
		if(session) {
			router.push('/' + Temporal.Now.plainDateISO().toString())
		} else {
			router.push('/login')
		}
	}, [])
}