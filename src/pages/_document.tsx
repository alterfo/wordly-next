import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en" className="bg-gray-900 bg-[url(/bg/body-bg.png)] bg-repeat">
			<Head />
			<body className="grid grid-cols-1 mx-4">
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}