import {getTimelineData} from "@/api";
import {getMonthStringCapitalized} from "@/date";
import EditableEntry from "@/components/editable-entry";

export default async function MonthView({searchParams: {yyyymm}}: { searchParams: { yyyymm: string }; }) {
	const timeline = await getTimelineData(yyyymm)

	const monthStringCapitalized = getMonthStringCapitalized(yyyymm)

	return <>
		<EditableEntry timeline={timeline} monthStringCapitalized={monthStringCapitalized} />
	</>
}