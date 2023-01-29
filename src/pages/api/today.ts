import type {NextApiRequest, NextApiResponse} from 'next'
import {Temporal} from '@js-temporal/polyfill';
import {PrismaClient} from '@prisma/client'
import {Diary} from "@/types";
import {create} from "domain";

const prisma = new PrismaClient()

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Diary[] | {message: string}>
) {
	const date = Temporal.Now.plainDateISO();
	if (req.body.date !== date.toString()) {
		res.status(422).json({
			message: 'День закончился, перезагрузите страницу'
		})
	}
	await prisma.diaries.upsert({
		where: {
			date: new Date(date.toString())
		},
		create: {
			date: new Date(date.toString()),
			text: req.body.text,
			word_count: req.body.word_count,
		},
		update: {
			text: req.body.text,
			word_count: req.body.word_count,
		}
	})
	res.status(200).json({message: "Ok"})
}
