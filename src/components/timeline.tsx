import {DayData, TimelineProps} from "@/types";
import '../app/globals.css';
import Day from "@/components/day";
import Link from "next/link";

export default function Timeline({timeline, monthStringCapitalized, yyyymm}: TimelineProps) {

	// todo: fix timezone issue
	// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
	return (
		<>
			<div className="grid grid-cols-3 text-blue-50 align-middle justify-center items-center h-20">
				<button>{"<<"}</button>
				<h2 className="text-3xl font-bold text-blue-50 text-center">{monthStringCapitalized}</h2>
				<button>{">>"}</button>
			</div>


			<div className={
				`grid 
					   grid-cols-[repeat(auto-fill,_minmax(3em,_1fr))] 
					   grid-rows-[50px]
					   gap-2`
			}>
				{timeline.map(({day, word_count, is_today}: DayData) => (<Link href={`/${yyyymm}-${("0" + (day + 1)).slice(-2)}`} prefetch={false} replace key={day} >
						<Day day={day} word_count={word_count} is_today={is_today}/>
					</Link>)
				)}
			</div>
		</>
	)
}
