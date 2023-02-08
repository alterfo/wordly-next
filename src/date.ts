import {Temporal} from "@js-temporal/polyfill";

export function getMonthStringCapitalized(yyyymm: Temporal.PlainYearMonth): string {
	const monthString = yyyymm // e.g. Январь
		.toLocaleString('ru-RU', {
			month: 'long',
			year: 'numeric',
			calendar: 'iso8601'
		})

	const monthStringCapitalized = monthString.charAt(0).toUpperCase() + monthString.slice(1)

	return monthStringCapitalized
}

export function getMonthOfDay(yyyymmdd: Temporal.PlainDate): Temporal.PlainYearMonth {
	return yyyymmdd.toPlainYearMonth()
}