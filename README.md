# Link.js v2

Turns text links into clickable HTML links. It even ignores normal text and works for most link formats.

For example:

`console.log(Link("Test https://google.com").out());`

# Usage

`Link("Input Text")`

`.out()`

`.setTo("Element")`

# Usage Examples

### Turning a text link into a link tag.

`Link("https://google.com").out();`

Output: `<a href="https://google.com" target="_blank">https://google.com</a>`

### Turning text links from the body tag into link tags then replacing them.

`Link(document.getElementsByTagName("body")[0].innerHTML).setTo("body");`
