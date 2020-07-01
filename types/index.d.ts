type Richtext = {
  doc: string;
  content: Array<Object>;
}

declare function markdownToRichtext(content: string): Richtext;

export {
  markdownToRichtext
};