import {getMonthOfDay, getMonthStringCapitalized} from "@/date";
import {getTextByDate, getTimelineData} from "@/api";
import Timeline from "@/components/timeline";

export default async function DayView({
	searchParams: { yyyymmdd }
}: {
	searchParams: { yyyymmdd: string };
}) {

	const text = await getTextByDate(yyyymmdd)

	const yyyymm = getMonthOfDay(yyyymmdd)

	const timeline = await getTimelineData(yyyymm)

	const monthStringCapitalized = getMonthStringCapitalized(yyyymm)

	return <>
		<Timeline timeline={timeline} month={monthStringCapitalized} />
		<pre className="whitespace-pre bg-zinc-300 rounded whitespace-pre-wrap p-10 m-10">{text}</pre>
	</>
}
