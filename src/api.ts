import {Temporal} from "@js-temporal/polyfill";
import {DayData} from "@/types";
import prisma from "@/prisma";

export function inCurrentMonth(yearMonth: Temporal.PlainYearMonth) {
	return yearMonth.equals(Temporal.Now.plainDateISO().toPlainYearMonth());
}

export function isToday(yyyymmdd: Temporal.PlainDate) {
	return yyyymmdd.equals(Temporal.Now.plainDateISO().toString());
}

function fillTimelineArray(	yearMonth: Temporal.PlainYearMonth,
							timelineData: { date: Date; word_count: number; }[]): DayData[] {

	const timeline: DayData[] = []
	const isCurrentMonth = inCurrentMonth(yearMonth)
	const todayDayNumber = Temporal.Now.plainDateISO().day - 1

	for (let i = 0; i < yearMonth.daysInMonth; i++) {
		timeline[i] = {
			day: i,
			word_count: 0
		};
	}

	if (isCurrentMonth) {
		for (let i = todayDayNumber; i < yearMonth.daysInMonth; i++) {
			timeline[i].word_count = -1;
		}
	}

	timelineData.forEach(({date, word_count}) => {
		const day = Temporal.Instant.from(date.toISOString())
			.toZonedDateTimeISO(Intl.DateTimeFormat().resolvedOptions().timeZone)
			.toPlainDate()
			.getISOFields()
			.isoDay - 1

		timeline[timeline.findIndex((tlDay) => (tlDay.day === day))] = {
			day,
			word_count,
			is_today: todayDayNumber === day
		};
	});
	return timeline;
}

export async function getTimelineData(yyyymm: Temporal.PlainYearMonth): Promise<DayData[]> {
	const timelineData = await prisma.diaries.findMany({
		where: {
			date: {
				gte: new Date(yyyymm.toPlainDate({day: 1}).toString()),
				lte: new Date(yyyymm.toPlainDate({day: yyyymm.daysInMonth}).toString()),
			}
		},
		select: {
			date: true,
			word_count: true,
		}
	})

	return fillTimelineArray(yyyymm, timelineData)
}

export async function getTextByDate(yyyymmdd: Temporal.PlainDate): Promise<string> {
	const text = await prisma.diaries.findUnique({
		where: {
			date: new Date(yyyymmdd.toString())
		},
		select: {
			text: true,
		}
	})

	return text?.text || ''
}