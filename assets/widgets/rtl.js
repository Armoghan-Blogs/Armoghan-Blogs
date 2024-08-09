// Register the custom editor component for `rtl`
CMS.registerEditorComponent({
  id: 'rtl',
  label: 'Right-to-Left',
  fields: [
    {
      name: 'content',
      label: 'Content',
      widget: 'text',
      required: true,
      hint: 'Enter the content that will be displayed from right to left.'
    }
  ],
  pattern: /^{{% rtl %}}\n([\s\S]*?)\n{{% \/rtl %}}$/,
  fromBlock: function(match) {
    return {
      content: match[1]
    };
  },
  toBlock: function(data) {
    return `{{% rtl %}}\n${data.content}\n{{% /rtl %}}`;
  },
  toPreview: function(data) {
    return `
      <div style="direction: rtl;">
        ${data.content}
      </div>
    `;
  }
});
