import {Diary} from "@/types";
import prisma from "@/prisma";
import {getMonthOfDay, getMonthStringCapitalized} from "../../date";
import {getTimelineData} from "../../api";
import Timeline from "../../components/timeline";

export default async function DayView(
	{
		searchParams: {yyyymmdd}
	}: {
		searchParams: { yyyymmdd: string };
	}) {

	const diaryEntry = await prisma.diaries.findUnique({
		where: {
			date: new Date(yyyymmdd)
		}
	})

	const yyyymm = getMonthOfDay(yyyymmdd)

	const timeline = await getTimelineData(yyyymm)

	const monthStringCapitalized = getMonthStringCapitalized(yyyymm)

	return <>
		<Timeline timeline={timeline} month={monthStringCapitalized} />
		{/*	DiaryEntry */}
	</>
}
