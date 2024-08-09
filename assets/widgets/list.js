// Register the custom editor component for `list`
CMS.registerEditorComponent({
  id: 'list',
  label: 'List',
  fields: [
    {
      name: 'limit',
      label: 'Limit',
      widget: 'number',
      required: false,
      hint: 'Enter the maximum number of items to display. This is optional.'
    }
  ],
  pattern: /^{{< list(?: limit="(\d+)")? >}}$/,
  fromBlock: function(match) {
    return {
      limit: match[1] ? parseInt(match[1], 10) : null
    };
  },
  toBlock: function(data) {
    const limit = data.limit !== null ? ` limit="${data.limit}"` : '';
    return `{{< list${limit} >}}`;
  },
  toPreview: function(data) {
    return `
      <div>
        <p><strong>Limit:</strong> ${data.limit !== null ? data.limit : 'No limit specified'}</p>
      </div>
    `;
  }
});
