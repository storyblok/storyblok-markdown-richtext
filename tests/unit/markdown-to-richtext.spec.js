import { markdownToRichtext } from '../../dist/index.js'
import complexExample from '../mocks/complex-example'

describe('test markdownToRichtext function', () => {
  it('should transform markdown text to richtext', () => {
    expect(
      markdownToRichtext(complexExample.markdown)
    ).toEqual(complexExample.richtext)
  })
})
