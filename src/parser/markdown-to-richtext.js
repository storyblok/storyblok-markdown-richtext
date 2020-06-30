import factoryMarkdownParser from '../utils/factory-markdown-parser'
import defaultSchema from '../utils/schema'

const markdownToRichtext = (content, options = {}) => {
  const schema = options.schema || defaultSchema
  const markdownParser = factoryMarkdownParser(schema)

  return markdownParser.parse(content).toJSON()
}

export default markdownToRichtext
