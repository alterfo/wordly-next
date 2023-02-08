import Textarea from "@/components/textarea";

export default function EditableEntry({
	initialText,
	yyyymmdd
}: {
	initialText: string
	yyyymmdd: string
}) {
	return <>
		<Textarea initialText={initialText} yyyymmdd={yyyymmdd}/>
	</>
}