import {Temporal} from "@js-temporal/polyfill";
import PlainYearMonth = Temporal.PlainYearMonth;

export type Diary = {
	uuid: string;
	date: Date;
	text: string;
	word_count: number;
}

export type DayData = {
	day: number;
	word_count: number;
	is_today?: boolean;
}

export type TimelineProps = {
	timeline: DayData[],
	monthStringCapitalized: string; // Февраль 2023
	yyyymm: PlainYearMonth;
}
