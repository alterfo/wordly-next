import {Temporal} from "@js-temporal/polyfill";

export type Diary = {
	uuid: string;
	date: Date;
	text: string;
	word_count: number;
}

export type DayData = {
	date: number;
	word_count: number;
}

export type TimelineProps = {
	timeline: DayData[],
	month: Temporal.PlainYearMonth;
}
