import {TimelineProps} from "@/types";
import {Temporal} from "@js-temporal/polyfill";
import '../app/globals.css';

export default function Timeline({timeline, month}: TimelineProps) {

	const monthString = Temporal.PlainYearMonth.from(month)
		.toLocaleString('ru-RU', {
			month: 'long',
			year: 'numeric',
			calendar: 'iso8601'
		})

	const monthStringCapitalized =
		monthString.charAt(0).toUpperCase()
		+ monthString.slice(1)

	return (
		<>
			<h2 className="text-3xl font-bold">{monthStringCapitalized}</h2>

			<div className="flex flex-row flex-nowrap">
				<button className="flex flex-initial">{"<<"}</button>

				<div className="flex flex-row flex-wrap overflow-hidden w-full mx-[10px] justify-center">
					{timeline.length && timeline.map(({date, word_count}) => {
						return (
							<div className="my-1.5 mx-0.5 cursor-pointer flex flex-column flex-wrap w-5" key={date}>
								<div className="text-xs">{ date }</div>
								{word_count === -1 && <a type="button" className='block font-normal text-center bg-zink-300 w-10 py-2'>--</a>}
								{word_count >= 0 && <a type="button" className='block font-normal text-center bg-yellow-300 w-10 py-2'>{word_count}</a>}
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
