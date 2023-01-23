import {useRouter} from 'next/router'
import {PrismaClient} from "@prisma/client";
import {GetServerSidePropsContext} from "next";
import {DayData, Diary, TimelineProps} from "@/types";
import {Temporal} from "@js-temporal/polyfill";
import Timeline from "@/components/timeline";

async function getTimelineData(yyyymm: string): Promise<TimelineProps> {
	const prisma = new PrismaClient()
	const date: Temporal.PlainYearMonth = Temporal.PlainYearMonth.from(yyyymm!.toString())
	const timeline: DayData[] = []
	const isCurrentMonth = date.equals(Temporal.Now.plainDateISO().toPlainYearMonth())
	const todayDayNumber = Temporal.Now.plainDateISO().day

	const timelineData = await prisma.diaries.findMany({
		where: {
			date: {
				gte: new Date(date.toPlainDate({day: 1}).toString()),
				lte: new Date(date.toPlainDate({day: date.daysInMonth}).toString()),
			}
		},
		select: {
			date: true,
			word_count: true,
		}
	})

	for (let i = 0; i < date.daysInMonth; i++) {
		timeline[i] = {
			date: i,
			word_count: 0
		};
	}

	if (isCurrentMonth) {
		for (let i = todayDayNumber; i < date.daysInMonth; i++) {
			timeline[i].word_count = -1;
		}
	}

	timelineData.forEach(({date, word_count}) => {
		const day = Temporal.Instant.from(date.toISOString())
			.toZonedDateTimeISO('UTC')
			.toPlainDate()
			.getISOFields()
			.isoDay
		timeline[timeline.findIndex((tlDay) => (tlDay.date === day))] = {
			date: day,
			word_count
		};
	});

	return {
		timeline,
		month: date
	};
}

export default async function DiaryEntry({searchParams: {yyyymm}}: { searchParams: { yyyymm: string }; }) {
	const {timeline, month} = await getTimelineData(yyyymm)

	return <>
		<Timeline timeline={timeline} month={month}/>
		{/*	DiaryEntry */}
	</>
}