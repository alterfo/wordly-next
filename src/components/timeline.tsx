'use client'
import {DayData, TimelineProps} from "@/types";
import '../app/globals.css';
import Day from "@/components/day";

export default function Timeline({timeline, month}: TimelineProps) {

	// todo: fix timezone issue
	// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

	return (
		<>
			<div className="grid grid-cols-3 text-blue-50 align-middle justify-center items-center h-20">
				<button>{"<<"}</button>
				<h2 className="text-3xl font-bold text-blue-50 text-center">{month}</h2>
				<button>{">>"}</button>
			</div>


				<div className={
					  `grid 
					   grid-cols-[repeat(auto-fill,_minmax(3em,_1fr))] 
					   grid-rows-[50px]
					   gap-2`
				} >
					{timeline.map(({day, word_count}: DayData) => (
						<Day key={day} day={day} word_count={word_count} />
					))}
				</div>
		</>
	)
}
