"use client"
import '../app/globals.css';
import {useState} from "react";

export default function DiaryEntry({setTimelineWordcount}: {setTimelineWordcount: (wc: number) => void}) {
	const [text, setText] = useState('')
	const [isSaved, setIsSaved] = useState(true)
	const [saving, setSaving] = useState(false)

	function getWordsCount(): number {
		const wordsArr = text.trim().split(/[\s,.;]+/);
		for (let i = 0; i < wordsArr.length; i++) {
			if (wordsArr[i] === '') wordsArr.splice(i, 1) && i--;
		}
		return wordsArr.length;
	}

	function onChangeText(e: React.FormEvent<HTMLTextAreaElement>) {
		setText(e.currentTarget.value)
		setIsSaved(false)
		setTimelineWordcount(getWordsCount())
	}

	return (
		<>
			{saving &&
				<img alt="loading" width="16" height="16" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
			}
			{isSaved && <span>Сохранено</span>}

			<h2 className="text-blue-50 text-3xl self-start w-full">Автор, жги!</h2>
			{!isSaved && <span className="text-red-100">Изменено, но пока не сохранено</span>}
			<textarea
				className="overflow-hidden w-full text-gray-800 mt-5
				text-2xl leading-10 pt-12 px-24 pb-9 bg-local bg-blue-300
				rounded-xl shadow-lg border-t-2 border-b-2 border-white max-w-screen-xl"
				style={{background: "url('/bg/lines.png') repeat-y, url('/bg/paper.png') repeat"}}
				value={text}
				onChange={onChangeText}
				title="write something"
				cols={30}
				rows={10}
				name="entry"
			/>
		</>
	)
}