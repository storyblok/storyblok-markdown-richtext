# storyblok-markdown-richtext

Utils library to work with Markdown/HTML and Richtext in the Storyblok.

## Usage

Install the `storyblok-markdown-richtext`:

```sh
$ yarn add storyblok-markdown-richtext # npm install storyblok-markdown-richtext
```

And uses the functions where you need:

```js
import { markdownToRichtext } from 'storyblok-markdown-richtext'

const richtextData = markdownToRichtext(`# Hello World`)

// ...
```

## Functions

### markdownToRichtext

Transform a markdown/html data into a Richtext object

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
          text: 'Heading one',
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