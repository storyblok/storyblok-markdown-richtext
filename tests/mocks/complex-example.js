const fullBlogText = `# Heading one

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem nisi, imperdiet non ultricies at, luctus sit amet nisi.

## Heading two

Aliquam consectetur sem et convallis hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In tincidunt placerat velit vel lobortis.

### Heading three

Suspendisse ultricies urna arcu, id tincidunt nibh posuere ut. Nunc dapibus, tellus sit amet fermentum eleifend, risus augue pretium massa, a imperdiet tortor ante placerat diam.

#### Heading four

Fusce non vehicula eros. Duis diam orci, efficitur porta mauris et, porttitor aliquet nisl.

##### Heading five

Integer quis euismod nulla. Nam dapibus maximus nisi, in tempor ante consequat ac. Vestibulum rutrum hendrerit ex, ac dapibus dui finibus id. Praesent molestie dictum neque vel lobortis

###### Heading six

Proin congue felis faucibus, volutpat lorem non, imperdiet lacus. Curabitur sed mattis tellus. Maecenas at aliquam odio

---

# More examples to another tags

## Blockquote

> This is an example of blockquote

## Lists

Unordered List:

- Item one
- Item two

Bullet List:

* Item one
* Item two

Ordered List:

1. Item one
2. Item two

## Code blocks

\`\`\`
// this is a code test test
const gretting = 'Hey!'
\`\`\`

## Formats

Lorem \`ipsum dolor\` sit amet, consectetur adipiscing elit. **Vestibulum** sem *nisi*, imperdiet non ultricies at, luctus sit amet nisi.

[A link to Vue.js website](https://vuejs.org)

![This is the Vue.js logo](https://vuejs.org/images/logo.png)

# this is an example of fence

\`\`\`js
const world = 'Hello'
\`\`\`

# nested lists

* list item
  - internal list item
* another list item
`

const fullRichtextExample = {
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
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem nisi, imperdiet non ultricies at, luctus sit amet nisi.',
          type: 'text'
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 2
      },
      content: [
        {
          text: 'Heading two',
          type: 'text'
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Aliquam consectetur sem et convallis hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In tincidunt placerat velit vel lobortis.',
          type: 'text'
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 3
      },
      content: [
        {
          text: 'Heading three',
          type: 'text'
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Suspendisse ultricies urna arcu, id tincidunt nibh posuere ut. Nunc dapibus, tellus sit amet fermentum eleifend, risus augue pretium massa, a imperdiet tortor ante placerat diam.',
          type: 'text'
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 4
      },
      content: [
        {
          text: 'Heading four',
          type: 'text'
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Fusce non vehicula eros. Duis diam orci, efficitur porta mauris et, porttitor aliquet nisl.',
          type: 'text'
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 5
      },
      content: [
        {
          text: 'Heading five',
          type: 'text'
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Integer quis euismod nulla. Nam dapibus maximus nisi, in tempor ante consequat ac. Vestibulum rutrum hendrerit ex, ac dapibus dui finibus id. Praesent molestie dictum neque vel lobortis',
          type: 'text'
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 6
      },
      content: [
        {
          text: 'Heading six',
          type: 'text'
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Proin congue felis faucibus, volutpat lorem non, imperdiet lacus. Curabitur sed mattis tellus. Maecenas at aliquam odio',
          type: 'text'
        }
      ]
    },
    {
      type: 'horizontal_rule'
    },
    {
      type: 'heading',
      attrs: {
        level: 1
      },
      content: [
        {
          text: 'More examples to another tags',
          type: 'text'
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 2
      },
      content: [
        {
          text: 'Blockquote',
          type: 'text'
        }
      ]
    },
    {
      type: 'blockquote',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              text: 'This is an example of blockquote',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 2
      },
      content: [
        {
          text: 'Lists',
          type: 'text'
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Unordered List:',
          type: 'text'
        }
      ]
    },
    {
      type: 'bullet_list',
      attrs: {
        tight: false
      },
      content: [
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: 'Item one',
                  type: 'text'
                }
              ]
            }
          ]
        },
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: 'Item two',
                  type: 'text'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Bullet List:',
          type: 'text'
        }
      ]
    },
    {
      type: 'bullet_list',
      attrs: {
        tight: false
      },
      content: [
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: 'Item one',
                  type: 'text'
                }
              ]
            }
          ]
        },
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: 'Item two',
                  type: 'text'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Ordered List:',
          type: 'text'
        }
      ]
    },
    {
      type: 'ordered_list',
      attrs: {
        order: 1,
        tight: false
      },
      content: [
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: 'Item one',
                  type: 'text'
                }
              ]
            }
          ]
        },
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: 'Item two',
                  type: 'text'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 2
      },
      content: [
        {
          text: 'Code blocks',
          type: 'text'
        }
      ]
    },
    {
      type: 'code_block',
      attrs: {
        params: ''
      },
      content: [
        {
          text: "// this is a code test test\nconst gretting = 'Hey!'",
          type: 'text'
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 2
      },
      content: [
        {
          text: 'Formats',
          type: 'text'
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Lorem ',
          type: 'text'
        },
        {
          text: 'ipsum dolor',
          type: 'text',
          marks: [
            {
              type: 'code'
            }
          ]
        },
        {
          text: ' sit amet, consectetur adipiscing elit. ',
          type: 'text'
        },
        {
          text: 'Vestibulum',
          type: 'text',
          marks: [
            {
              type: 'bold'
            }
          ]
        },
        {
          text: ' sem ',
          type: 'text'
        },
        {
          text: 'nisi',
          type: 'text',
          marks: [
            {
              type: 'italic'
            }
          ]
        },
        {
          text: ', imperdiet non ultricies at, luctus sit amet nisi.',
          type: 'text'
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'A link to Vue.js website',
          type: 'text',
          marks: [
            {
              type: 'link',
              attrs: {
                href: 'https://vuejs.org',
                title: null
              }
            }
          ]
        }
      ]
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'image',
          attrs: {
            alt: 'This is the Vue.js logo',
            src: 'https://vuejs.org/images/logo.png',
            title: null
          }
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 1
      },
      content: [
        {
          text: 'this is an example of fence',
          type: 'text'
        }
      ]
    },
    {
      type: 'code_block',
      attrs: {
        params: 'js'
      },
      content: [
        {
          text: "const world = 'Hello'",
          type: 'text'
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 1
      },
      content: [
        {
          text: 'nested lists',
          type: 'text'
        }
      ]
    },
    {
      type: 'bullet_list',
      attrs: {
        tight: false
      },
      content: [
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: 'list item',
                  type: 'text'
                }
              ]
            },
            {
              type: 'bullet_list',
              attrs: {
                tight: false
              },
              content: [
                {
                  type: 'list_item',
                  content: [
                    {
                      type: 'paragraph',
                      content: [
                        {
                          text: 'internal list item',
                          type: 'text'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'list_item',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  text: 'another list item',
                  type: 'text'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default {
  markdown: fullBlogText,
  richtext: fullRichtextExample
}
