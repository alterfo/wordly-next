import type {NextApiRequest, NextApiResponse} from 'next'
import {Temporal, Intl, toTemporalInstant} from '@js-temporal/polyfill';
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

type Diary = {
	uuid: string;
	date: Date;
	text: string;
	word_count: number;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Diary[]>
) {
	const date = Temporal.Now.plainDateISO();
	const diaries = await prisma.diaries.findMany({
		where: {
			date: {
				gte: new Date(date.with({day: 1}).toString()),
				lte: new Date(date.with({day: date.daysInMonth}).toString()),
			}
		}
	})
	res.status(200).json(diaries)
}
