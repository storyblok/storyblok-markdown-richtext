# HTML/Markdown to Richtext converter

This tool helps you to parse html/markdown and convert it into the JSON format of Storyblok's richtext field.

## Usage

Install the npm module `storyblok-markdown-richtext`:

```sh
$ yarn add storyblok-markdown-richtext # npm install storyblok-markdown-richtext
```

And use the functions where you need:

```js
import { markdownToRichtext } from 'storyblok-markdown-richtext'

const richtextData = markdownToRichtext(`# Hello World`)

// ...
```

To convert html to richtext you need to include a HTML to Markdown converter. In this example we use [turndown](https://github.com/domchristie/turndown).

```js
import TurndownService from 'turndown'
import { markdownToRichtext } from 'storyblok-markdown-richtext'

const turndownService = new TurndownService()
const richtextData = markdownToRichtext(turndownService.turndown('<h1>Hello world!</h1>'))
```

## Functions

### markdownToRichtext

Transform html/markdown data into a Richtext object

```js
import { markdownToRichtext } from 'storyblok-markdown-richtext'

markdownToRichtext(`# Hello World`)
/**
 * // Richtext object
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
 *
* /
```

---

<p align="center">
  <h5 align="center">Powered by <a href="https://www.storyblok.com/" title="link to the Storyblok website">Storyblok</a></h5>
</p>
