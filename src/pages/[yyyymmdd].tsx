import { getMonthStringCapitalized} from "@/date";
import {getTextByDate, getTimelineData, isToday} from "@/api";
import Timeline from "@/components/timeline";
import {Temporal} from "@js-temporal/polyfill";
import EditableEntry from "@/components/editable-entry";
import PlainYearMonth = Temporal.PlainYearMonth;
import {DayData} from "@/types";

export default function DayView({
	timeline,
	monthStringCapitalized,
	is_today,
	yyyymmdd,
	text
}: {
	timeline: DayData[],
	monthStringCapitalized: string,
	is_today: boolean,
	yyyymmdd: string,
	text: string
}) {
	const yearMonth = PlainYearMonth.from(yyyymmdd)

	return <>
		<Timeline timeline={timeline} monthStringCapitalized={monthStringCapitalized} yyyymm={yearMonth}/>

		{is_today ? <EditableEntry
			initialText={text}
			yyyymmdd={yyyymmdd}
		/> :
				<pre className="whitespace-pre bg-zinc-300 rounded whitespace-pre-wrap p-10 m-10">{text}</pre>}
			</>
}

export const getServerSideProps = async ({params} : {
	params: {
		yyyymmdd: string
	}
}) => {
	const yyyymmdd = params.yyyymmdd

	const date = Temporal.PlainDate.from(yyyymmdd)

	const is_today = isToday(date)

	const yearMonth = PlainYearMonth.from(yyyymmdd)

	const timeline = await getTimelineData(yearMonth)

	const monthStringCapitalized = getMonthStringCapitalized(yearMonth)

	const text = await getTextByDate(date)

	return {
		props: {
			timeline,
			monthStringCapitalized,
			is_today,
			yyyymmdd,
			text
		},
	}
}

// export async function generateStaticParams() {
// 	const yearMonth = Temporal.Now.plainDateISO().toPlainYearMonth()
// 	const today = Temporal.Now.plainDateISO().day;
// 	const timeline = await prisma.diaries.findMany({
// 		where: {
// 			date: {
// 				gte: new Date(yearMonth.toPlainDate({day: 1}).toString()),
// 				lte: new Date(yearMonth.toPlainDate({day: today - 1}).toString()),
// 			}
// 		},
// 		select: {
// 			date: true,
// 			word_count: true,
// 		}
// 	})
//
// 	return timeline.map(({date}) => ({
// 		yyyymmdd: Temporal.Instant.from(date.toISOString())
// 			.toZonedDateTimeISO(Intl.DateTimeFormat().resolvedOptions().timeZone)
// 			.toPlainDate()
// 			.toString()
// 	}));
// }
