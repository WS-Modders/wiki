import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { remarkAlert } from './remark/alert'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .use(remarkGfm)
    .use(remarkAlert)
    .use(require('remark-prism'), {
      plugins: [
        'autolinker',
        'command-line',
        'data-uri-highlight',
        'diff-highlight',
        'inline-color',
        'keep-markup',
        'line-numbers',
        'show-invisibles',
        'treeview',
      ],
    })
    .process(markdown);
  return result.toString();
}