import { useRouter } from 'next/router'
import {PrismaClient} from "@prisma/client";
import {GetServerSidePropsContext} from "next";
import {Diary} from "@/types";
import {Temporal} from "@js-temporal/polyfill";

const DiaryEntry = (diaryEntry: Diary | null) => {
	return <>
		{/*	Timeline */}
		{/*	DiaryEntry */}
	</>
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
	const prisma = new PrismaClient()


	const paramsDate = new Date(params!.date!.toString())

	console.log(paramsDate.toString());

	const diaryEntry: Diary | null = await prisma.diaries.findUnique({
		where: {
			date: paramsDate
		}
	})

	if (!diaryEntry) {
		return {
			notFound: true,
		}
	}

	return {
		props: diaryEntry && JSON.parse(JSON.stringify(diaryEntry)),
	}
}

export default DiaryEntry