import markdownToRichtextParser from './markdown-parser'

const markdownToRichtext = (content: any) => {
	if (!content) return {}
	return markdownToRichtextParser.parse(content).toJSON()
}

export { markdownToRichtext }
