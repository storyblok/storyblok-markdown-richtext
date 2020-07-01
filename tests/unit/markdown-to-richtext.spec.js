import markdownToRichtext from '../../src/parser/markdown-to-richtext'
import complexExample from '../mocks/complex-example'

describe('test markdownToRichtext function', () => {
  it('should transform markdown text to richtext', () => {
    expect(
      markdownToRichtext(complexExample.markdown)
    ).toEqual(complexExample.richtext)
  })
})
