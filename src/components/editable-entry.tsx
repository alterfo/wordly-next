'use client'
import {Temporal} from "@js-temporal/polyfill";
import Timeline from "@/components/timeline";
import Textarea from "@/components/textarea";
import {DayData} from "@/types";
import {useState} from "react";

export default function EditableEntry({
	timeline,
	monthStringCapitalized,
	initialText
}: {
	timeline: DayData[];
	monthStringCapitalized: string,
	initialText: string
}) {
	const [tl, setTl] = useState(timeline)

	function setTimelineWordcount(word_count: number) {
		const day = Temporal.Now.zonedDateTimeISO().day - 1
		tl[day] = {
			day,
			word_count
		};
		setTl([...tl])
	}

	return <>
		<div className="">
			<Timeline timeline={tl} month={monthStringCapitalized}/>
			<Textarea setTimelineWordcount={setTimelineWordcount} initialText={initialText}/>
		</div>
	</>
}