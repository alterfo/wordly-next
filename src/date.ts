import {Temporal} from "@js-temporal/polyfill";

export function getMonthStringCapitalized(yyyymm: string): string {
	const monthString = Temporal.PlainYearMonth.from(yyyymm) // e.g. Январь
		.toLocaleString('ru-RU', {
			month: 'long',
			year: 'numeric',
			calendar: 'iso8601'
		})

	const monthStringCapitalized = monthString.charAt(0).toUpperCase() + monthString.slice(1)

	return monthStringCapitalized
}

export function getMonthOfDay(yyyymmdd: string): string {
	return yyyymmdd.substring(0, 7)
}