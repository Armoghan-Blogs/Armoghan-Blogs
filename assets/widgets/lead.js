// Register the custom editor component for `lead`
CMS.registerEditorComponent({
  id: 'lead',
  label: 'Lead Text',
  fields: [
    {
      name: 'content',
      label: 'Content',
      widget: 'text',
      required: true
    }
  ],
  pattern: /^{{< lead >}}([\s\S]*?){{< \/lead >}}$/,
  fromBlock: function(match) {
    return {
      content: match[1].trim()
    };
  },
  toBlock: function(data) {
    return `{{< lead >}}\n${data.content}\n{{< /lead >}}`;
  },
  toPreview: function(data) {
    return `
      <div class="lead">
        <p>${data.content}</p>
      </div>
    `;
  }
});
