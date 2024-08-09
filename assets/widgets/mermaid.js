// Register the custom editor component for `mermaid`
CMS.registerEditorComponent({
  id: 'mermaid',
  label: 'Mermaid Diagram',
  fields: [
    {
      name: 'diagram',
      label: 'Diagram',
      widget: 'text',
      required: true,
      hint: 'Enter the Mermaid diagram syntax here.'
    }
  ],
  pattern: /^{{< mermaid >}}\n([\s\S]*?)\n{{< \/mermaid >}}$/,
  fromBlock: function(match) {
    return {
      diagram: match[1]
    };
  },
  toBlock: function(data) {
    return `{{< mermaid >}}\n${data.diagram}\n{{< /mermaid >}}`;
  },
  toPreview: function(data) {
    return `
      <div>
        <pre>${data.diagram}</pre>
      </div>
    `;
  }
});
