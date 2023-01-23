import type {NextApiRequest, NextApiResponse} from 'next'
import {Temporal} from '@js-temporal/polyfill';
import {PrismaClient} from '@prisma/client'
import {Diary} from "@/types";

const prisma = new PrismaClient()

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
