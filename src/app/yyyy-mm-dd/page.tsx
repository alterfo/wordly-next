import {getMonthOfDay, getMonthStringCapitalized} from "@/date";
import {getTextByDate, getTimelineData, isToday} from "@/api";
import Timeline from "@/components/timeline";
import {Temporal} from "@js-temporal/polyfill";
import EditableEntry from "@/components/editable-entry";
import PlainYearMonth = Temporal.PlainYearMonth;

export default async function DayView({
	searchParams: { yyyymmdd }
}: {
	searchParams: { yyyymmdd: string};
}) {
	const yearMonth = PlainYearMonth.from(yyyymmdd)

	const timeline = await getTimelineData(yearMonth)

	const monthStringCapitalized = getMonthStringCapitalized(yearMonth)

	const date = Temporal.PlainDate.from(yyyymmdd)

	const text = await getTextByDate(date)

	const is_today = isToday(date)

	return <>
		<Timeline timeline={timeline} monthStringCapitalized={monthStringCapitalized} yyyymm={yearMonth}/>

		{is_today ? <EditableEntry
			initialText={text}
			yyyymmdd={yyyymmdd}
		/> :
				<pre className="whitespace-pre bg-zinc-300 rounded whitespace-pre-wrap p-10 m-10">{text}</pre>}
			</>
}
