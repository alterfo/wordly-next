import Timeline from "@/components/timeline";
import {getTimelineData} from "@/api";
import {Temporal} from "@js-temporal/polyfill";
import {getMonthStringCapitalized} from "../../date";

export default async function MonthView({searchParams: {yyyymm}}: { searchParams: { yyyymm: string }; }) {
	const timeline = await getTimelineData(yyyymm)

	const monthStringCapitalized = getMonthStringCapitalized(yyyymm)

	return <>
		<Timeline timeline={timeline} month={monthStringCapitalized}/>
		{/*	DiaryEntry */}
	</>
}