'use client'
import {Temporal} from "@js-temporal/polyfill";
import Timeline from "@/components/timeline";
import DiaryEntry from "@/components/diary-entry";
import {DayData} from "@/types";
import {useState} from "react";

export default function EditableEntry({timeline, monthStringCapitalized}:
{ timeline: DayData[]; monthStringCapitalized: string }) {
	const [tl, setTl] = useState(timeline)

	function setTimelineWordcount(word_count: number) {
		const day = Temporal.Now.zonedDateTimeISO().day
		tl[day] = {
			day,
			word_count
		};
		setTl([...tl])
	}

	return <>
		<div className="flex flex-col items-center w-full px-10 max-w-screen-xl">
			<Timeline timeline={tl} month={monthStringCapitalized}/>
			<DiaryEntry setTimelineWordcount={setTimelineWordcount}/>
		</div>
	</>
}