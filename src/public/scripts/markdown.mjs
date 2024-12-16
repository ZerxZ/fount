var converter = markdownit({
	html: true
}).use(
	markdown_it_katex
).use(
	markdown_it_highlightjs
)

export function renderMarkdown(markdown) {
	return converter.render(markdown)
}
