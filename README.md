# Storyblok Markdown to Richtext converter

Do you need help converting HTML or markdown into Storyblok's richtext format?

Here's how to use it:

## Usage

Install the npm module `storyblok-markdown-richtext` by running:

```sh
$ yarn add storyblok-markdown-richtext # npm install storyblok-markdown-richtext
```

And use the functions where you need:

```js
import { markdownToRichtext } from 'storyblok-markdown-richtext'

const richtextData = markdownToRichtext(`# Hello World`)

// ...
```

To convert HTML to richtext, you'll also need an HTML to markdown converter. In the example below, we use [turndown](https://github.com/domchristie/turndown).

```js
import TurndownService from 'turndown'
import { markdownToRichtext } from 'storyblok-markdown-richtext'

const turndownService = new TurndownService()
const richtextData = markdownToRichtext(
	turndownService.turndown('<h1>Hello world!</h1>')
)
```

### markdownToRichtext

This function transforms your HTML or markdown data into a richtext JSON object. Here's an example:

```js
import { markdownToRichtext } from 'storyblok-markdown-richtext'

const richtextObject = markdownToRichtext(`# Hello World`)
```

The resulting richtext object will look like this:

```
{
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: {
        level: 1
      },
      content: [
        {
          text: 'Hello World',
          type: 'text'
        }
      ]
    }
  ]
}
```

---

<p align="center">
  <h5 align="center">Powered by <a href="https://www.storyblok.com/" title="link to the Storyblok website">Storyblok</a></h5>
</p>
