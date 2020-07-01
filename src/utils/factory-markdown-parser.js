import { MarkdownParser } from 'prosemirror-markdown'
import markdownit from 'markdown-it'

/**
 * @method factoryMarkdownParser
 * @param  {ProsemirrorModelSchema} schema schema from prosemirror-model package
 * @return {MarkdownParser} an instance of MarkdownParser class
 */
const factoryMarkdownParser = (schema) => {
  const tokens = {
    blockquote: {
      block: 'blockquote'
    },
    paragraph: {
      block: 'paragraph'
    },
    list_item: {
      block: 'list_item'
    },
    bullet_list: {
      block: 'bullet_list'
    },
    ordered_list: {
      block: 'ordered_list',
      getAttrs: token => ({ order: +token.attrGet('order') || 1 })
    },
    heading: {
      block: 'heading',
      getAttrs: token => ({ level: +token.tag.slice(1) })
    },
    code_block: {
      block: 'code_block'
    },
    fence: {
      block: 'code_block',
      getAttrs: token => ({ params: token.info || '' })
    },
    hr: {
      node: 'horizontal_rule'
    },
    image: {
      node: 'image',
      getAttrs: token => ({
        src: token.attrGet('src'),
        title: token.attrGet('title') || null,
        alt: (token.children[0] && token.children[0].content) || null
      })
    },
    hardbreak: {
      node: 'hard_break'
    },
    em: {
      mark: 'italic'
    },
    strong: {
      mark: 'bold'
    },
    link: {
      mark: 'link',
      getAttrs: token => ({
        href: token.attrGet('href'),
        title: token.attrGet('title') || null
      })
    },
    code_inline: {
      mark: 'code'
    }
  }

  const tokenizer = markdownit('commonmark', {
    html: false
  })

  return new MarkdownParser(schema, tokenizer, tokens)
}

export default factoryMarkdownParser
