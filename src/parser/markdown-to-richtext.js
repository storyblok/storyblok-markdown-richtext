import factoryMarkdownParser from '../utils/factory-markdown-parser'
import defaultSchema from '../utils/schema'

/**
 * @typedef {{type: 'doc', content: Array<Object>}} RichtextInstance
 *
 * @method markdownToRichtext
 * @param  {String} content            a markdown string
 * @return {RichtextInstance}
 */
const markdownToRichtext = (content) => {
  const markdownParser = factoryMarkdownParser(defaultSchema)

  return markdownParser.parse(content).toJSON()
}

export default markdownToRichtext
