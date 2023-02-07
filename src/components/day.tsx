'use client'

import {DayData} from "@/types";

export default function Day({day, word_count}: DayData) {

	// todo: fix timezone issue
	// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

	return (
		<div className="my-1.5 mx-0.5 cursor-pointer flex flex-col max-w-[100px]">
			<span className="block text-xs text-blue-50 text-center">{day + 1}</span>
			<a type="button" className='block font-normal text-center py-1'>
				<span className={"block " + (
					word_count === -1 || word_count === 0 ?	"bg-zinc-300"
						: word_count > 0 && word_count < 500 ? "bg-yellow-300"
							: word_count > 500 ? "bg-red-300"
								: ""
				)}>
					{word_count === -1 ? "—" : word_count}
				</span>
			</a>
		</div>
	)
}