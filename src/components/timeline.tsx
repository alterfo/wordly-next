'use client'
import {TimelineProps} from "@/types";
import '../app/globals.css';

export default function Timeline({timeline, month}: TimelineProps) {

	// todo: fix timezone issue
	// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

	return (
		<>
			<h2 className="text-3xl font-bold text-blue-50 mt-10">{month}</h2>

			<div className="flex flex-row flex-nowrap mb-10">
				<button className="flex flex-initial">{"<<"}</button>

				<div className="flex flex-row flex-wrap overflow-hidden w-full mx-[10px] ">
					{timeline.length && timeline.map(({day, word_count}) => {
						return (
							<div className="my-1.5 mx-0.5 cursor-pointer flex flex-column flex-wrap w-5" key={day}>
								<div className="text-xs text-blue-50">{ day }</div>
								{word_count === -1 && <a type="button" className='block font-normal text-center bg-zink-300 w-10 py-2'>--</a>}
								{word_count >= 0 && <a type="button" className='block font-normal text-center bg-yellow-300 w-10 py-2'>{word_count}</a>}
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
