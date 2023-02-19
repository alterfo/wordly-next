'use client'

import {DayData} from "@/types";
import {useContext, useEffect} from "react";
import {DayContext} from "@/day-context";

export default function Day({day, word_count, is_today}: DayData) {

	// todo: fix timezone issue
	// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
	// const {wc} = useContext(DayContext)
	// useEffect( () => {
	// 	if (is_today) word_count = wc
	// })
	return (
			<div className="my-1.5 mx-0.5 cursor-pointer flex flex-col max-w-[100px]">
				<span className="block text-xs text-blue-50 text-center">{day + 1}</span>
				<button className='block font-normal text-center py-1'>
					<span className={"block " + (
						word_count === -1 || word_count === 0 ?	"bg-zinc-300"
							: word_count > 0 && word_count < 500 ? "bg-yellow-300"
								: word_count > 500 ? "bg-red-300"
									: ""
					)}>
						{word_count === -1 ? "—" : word_count}
					</span>
				</button>
			</div>
	)
}