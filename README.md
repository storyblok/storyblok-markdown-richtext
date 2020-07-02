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
