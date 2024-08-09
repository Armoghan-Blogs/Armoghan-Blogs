// Define a list of icons for the `icon` field
const iconOptions = [
  'github', 'code', 'star', 'rocket', 'user', 'tag'
];

// Register the `timeline` component
CMS.registerEditorComponent({
  id: 'timeline',
  label: 'Timeline',
  widget: 'object',
  fields: [
    {
      name: 'items',
      label: 'Timeline Items',
      widget: 'list',
      fields: [
        {
          name: 'icon',
          label: 'Icon',
          widget: 'select',
          options: iconOptions,
          required: false,
          default: 'undefined',
          hint: 'Select an icon from the predefined list. Default is "undefined".'
        },
        {
          name: 'header',
          label: 'Header',
          widget: 'string',
          required: false,
          default: 'undefined',
          hint: 'Enter the header text for the timeline item. Default is "undefined".'
        },
        {
          name: 'badge',
          label: 'Badge',
          widget: 'string',
          required: false,
          hint: 'Enter optional badge text to display.'
        },
        {
          name: 'subheader',
          label: 'Subheader',
          widget: 'string',
          required: false,
          hint: 'Enter optional subheader text.'
        },
        {
          name: 'content',
          label: 'Content',
          widget: 'markdown',
          required: false,
          default: 'undefined',
          hint: 'Enter the content for the timeline item. You can use HTML and other shortcodes here. Default is "undefined".'
        }
      ]
    }
  ],
  pattern: /^{{< timeline >}}([\s\S]*?){{< \/timeline >}}$/,
  fromBlock: function (match) {
    const itemsMatch = match[1].match(/\{\{< timelineItem icon="([^"]+)"(?: header="([^"]+)")?(?: badge="([^"]+)")?(?: subheader="([^"]+)")? >}}([\s\S]*?)\{\{< \/timelineItem >}}/g);
    const items = itemsMatch ? itemsMatch.map(itemMatch => {
      const [, icon, header, badge, subheader, content] = itemMatch.match(/\{\{< timelineItem icon="([^"]+)"(?: header="([^"]+)")?(?: badge="([^"]+)")?(?: subheader="([^"]+)")? >}}([\s\S]*?)\{\{< \/timelineItem >}}/);
      return { icon: icon || 'undefined', header: header || 'undefined', badge: badge || '', subheader: subheader || '', content: content || 'undefined' };
    }) : [];

    return { items };
  },
  toBlock: function (data) {
    const itemsContent = data.items.map(item => {
      const badge = item.badge ? ` badge="${item.badge}"` : '';
      const subheader = item.subheader ? ` subheader="${item.subheader}"` : '';
      return `{{< timelineItem icon="${item.icon}" header="${item.header}"${badge}${subheader} >}}\n${item.content}\n{{< /timelineItem >}}`;
    }).join('\n');

    return `{{< timeline >}}\n${itemsContent}\n{{< /timeline >}}`;
  },
  toPreview: function (data) {
    const itemsPreview = data.items.map(item => `
      <div>
        <strong>Icon:</strong> ${item.icon || 'undefined'}<br/>
        <strong>Header:</strong> ${item.header || 'undefined'}<br/>
        ${item.badge ? `<strong>Badge:</strong> ${item.badge}<br/>` : ''}
        ${item.subheader ? `<strong>Subheader:</strong> ${item.subheader}<br/>` : ''}
        <div>${item.content || 'undefined'}</div>
      </div>
    `).join('<hr/>');

    return `<div>${itemsPreview}</div>`;
  }
});
