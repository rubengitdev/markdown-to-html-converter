const markdownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

function convertMarkdown() {
  let html = markdownInput.value;

  // headings
  html = html.replace(/^\s*### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^\s*## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^\s*# (.+)$/gm, "<h1>$1</h1>");

  // images
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // italic text
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Italic _text_
  html = html.replace(/_(.+?)_/g, "<em>$1</em>");

  // links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // quotes
  html = html.replace(/^\s*> (.+)$/gm, "<blockquote>$1</blockquote>");

  return html;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();

  htmlOutput.textContent = html;
  preview.innerHTML = html;
});
