CMS.registerEditorComponent({
  id: 'katex',
  label: 'KaTeX',
  fields: [
    {
      name: 'expression',
      label: 'Expression',
      widget: 'text',
      required: true,
      hint: 'Enter the LaTeX expression. Make sure to escape special characters as needed.'
    }
  ],
  pattern: /^{{< katex >}}\n*\\\((.*?)\\\)\n*{{< \/katex >}}$/,
  fromBlock: function(match) {
    return {
      expression: match[1]
    };
  },
  toBlock: function(data) {
    return `{{< katex >}}\n\\(${data.expression}\\)\n{{< /katex >}}`;
  },
  toPreview: function(data) {
    // To render LaTeX in the preview, you may need to include KaTeX in your project
    return `
      <div>
        <span class="katex">${data.expression}</span>
        <script>
          if (window.katex) {
            window.katex.render("\\(${data.expression}\\)", document.querySelector('.katex'), { throwOnError: false });
          }
        </script>
      </div>
    `;
  }
});
