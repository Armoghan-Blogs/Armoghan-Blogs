// Register the custom editor component for `list`
CMS.registerEditorComponent({
  id: 'list',
  label: 'List',
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
      required: false,
      hint: 'Enter a title for the list. This is optional.'
    },
    {
      name: 'cardView',
      label: 'Card View',
      widget: 'boolean',
      default: false,
      hint: 'Toggle card view for the list items.'
    },
    {
      name: 'limit',
      label: 'Limit',
      widget: 'number',
      required: false,
      hint: 'Enter the maximum number of items to display. This is optional.'
    },
    {
      name: 'where',
      label: 'Where',
      widget: 'string',
      required: false,
      hint: 'Specify the field to filter items. This is optional.'
    },
    {
      name: 'value',
      label: 'Value',
      widget: 'string',
      required: false,
      hint: 'Specify the value to filter items by. This is optional.'
    }
  ],
  pattern: /^{{< list(?: title="([^"]*)")?(?: cardView=(true|false))?(?: limit="(\d+)")?(?: where="([^"]*)")?(?: value="([^"]*)")? >}}$/,
  fromBlock: function(match) {
    return {
      title: match[1] || '',
      cardView: match[2] === 'true',
      limit: match[3] ? parseInt(match[3], 10) : null,
      where: match[4] || '',
      value: match[5] || ''
    };
  },
  toBlock: function(data) {
    const title = data.title ? ` title="${data.title}"` : '';
    const cardView = data.cardView ? ` cardView=true` : '';
    const limit = data.limit !== null ? ` limit="${data.limit}"` : '';
    const where = data.where ? ` where="${data.where}"` : '';
    const value = data.value ? ` value="${data.value}"` : '';
    return `{{< list${title}${cardView}${limit}${where}${value} >}}`;
  },
  toPreview: function(data) {
    return `
      <div>
        ${data.title ? `<p><strong>Title:</strong> ${data.title}</p>` : ''}
        <p><strong>Card View:</strong> ${data.cardView ? 'Yes' : 'No'}</p>
        ${data.limit !== null ? `<p><strong>Limit:</strong> ${data.limit}</p>` : ''}
        ${data.where ? `<p><strong>Where:</strong> ${data.where}</p>` : ''}
        ${data.value ? `<p><strong>Value:</strong> ${data.value}</p>` : ''}
      </div>
    `;
  }
});
