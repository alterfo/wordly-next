'use client';

import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';

export const DayContext = createContext<{wc: number, setWc: Dispatch<SetStateAction<number>>}>(null!);

export default function DayContextProvider({ children }: {children: ReactNode}) {
	const [wc, setWc] = useState(0);
	return (
		<DayContext.Provider value={{wc, setWc}}>
			{children}
		</DayContext.Provider>
	);
}