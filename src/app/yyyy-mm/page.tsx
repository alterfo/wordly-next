import {getTextByDate, getTimelineData} from "@/api";
import {getMonthStringCapitalized} from "@/date";
import EditableEntry from "@/components/editable-entry";
import {Temporal} from "@js-temporal/polyfill";

export default async function MonthView({searchParams: {yyyymm}}: { searchParams: { yyyymm: string }; }) {
	const timeline = await getTimelineData(yyyymm)

	const monthStringCapitalized = getMonthStringCapitalized(yyyymm)

	const initialText = await getTextByDate(Temporal.Now.plainDateISO().toString())

	return <>
		<EditableEntry
			timeline={timeline}
			monthStringCapitalized={monthStringCapitalized}
			initialText={initialText}
		/>
	</>
}