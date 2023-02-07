import type {NextApiRequest, NextApiResponse} from 'next'
import {Temporal} from '@js-temporal/polyfill';
import {Diary} from "@/types";
import prisma from "@/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Diary[] | {message: string}>
) {
	const date = Temporal.Now.plainDateISO();
	if (req.body.date !== date.toString()) {
		return res.status(422).json({
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
	return res.status(200).json({message: "Ok"})
}
