"use client"
import {useContext, useEffect, useRef, useState} from "react";
import {Temporal} from "@js-temporal/polyfill";
import {DayContext} from "@/day-context";

export default function Textarea({
	initialText,
	yyyymmdd
}: {
	initialText: string,
	yyyymmdd: string
}) {
	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	// const {setWc} = useContext(DayContext)

	const [text, setText] = useState(initialText)
	const [isSaved, setIsSaved] = useState(true)
	const [saving, setSaving] = useState(false)

	function getWordsCount(): number {
		const wordsArr = text.trim().split(/[\s,.;]+/);
		for (let i = 0; i < wordsArr.length; i++) {
			if (wordsArr[i] === '') wordsArr.splice(i, 1) && i--;
		}
		return wordsArr.length;
	}

	useEffect(() => {
		const scrollLeft = window.scrollX;
		const scrollTop = window.scrollY;

		if (textAreaRef.current) {
			textAreaRef.current.style.overflow = 'hidden';
			textAreaRef.current.style.height = "auto";
			textAreaRef.current.style.height = `${Math.max(
				textAreaRef.current.scrollHeight,
				160
			)}px`;
		}
		window.scrollTo(scrollLeft, scrollTop);
	}, [text]);

	useEffect(() => {
		// setWc(getWordsCount())
	}, [text])

	function onChangeText(e: React.FormEvent<HTMLTextAreaElement>) {
		setText(e.currentTarget.value)
		setIsSaved(false)
	}

	async function onSave() {
		setSaving(true)
		await fetch('/api/today', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				text: text,
				date: yyyymmdd,
				word_count: getWordsCount()
			})
		}).then(() => {
			setIsSaved(true)
		}).finally(() => {
			setSaving(false)
		})
	}

	function putTab(e: React.KeyboardEvent<HTMLTextAreaElement>) {
		const start = e.currentTarget.selectionStart;
		const end = e.currentTarget.selectionEnd;
		setText(text.substring(0, start) + '\t' + text.substring(end));
		e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 1;
	}

	return (
		<>
			<h2 className="text-blue-50 text-3xl self-start w-full">Автор, жги!</h2>

			{saving &&
				// eslint-disable-next-line @next/next/no-img-element
                <img alt="loading" width="16" height="16"
                     src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
			}
			{isSaved && <span>Сохранено</span>}
			{!isSaved && <span className="text-red-100">Изменено, но пока не сохранено</span>}
			<textarea
				ref={textAreaRef}
				className="overflow-hidden w-full text-gray-800 mt-5
				text-2xl leading-10 pt-[50px] px-24 pb-9 mb-16 bg-local bg-blue-300
				rounded-xl shadow-lg border-t-2 border-b-2 border-white max-w-screen-xl"
				style={{background: "url('/bg/lines.png') repeat-y, url('/bg/paper.png') repeat"}}
				value={text}
				onChange={onChangeText}
				title="write something"
				cols={30}
				rows={10}
				name="entry"
				autoFocus={true}
				onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
					if (e.ctrlKey && (e.key === 's' || e.key === 'ы')) {
						e.preventDefault()
						e.stopPropagation()
						onSave()
						return false
					}
					if (e.key === 'Tab') {
						e.preventDefault()
						e.stopPropagation()
						putTab(e)
					}
				}}
				onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
					if (e.ctrlKey && (e.key === 's' || e.key === 'ы')) {
						e.preventDefault()
						e.stopPropagation()
						return false
					}
				}}
			/>
		</>
	)
}
