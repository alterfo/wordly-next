'use client';

import type { Session } from '@supabase/auth-helpers-nextjs';
import { createContext, useContext, useState } from 'react';
import { createClient } from '@/supabase-browser';
type MaybeSession = Session | null;

// @ts-ignore
const Context = createContext<SupabaseContext>();

export default function SupabaseProvider({
											 children,
											 session
										 }: {
	children: React.ReactNode;
	session: MaybeSession;
}) {
	const [supabase] = useState(() => createClient());

	return (
		<Context.Provider value={{ supabase, session }}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useSupabase = () => useContext(Context);