// Register the `youtubeLite` component
CMS.registerEditorComponent({
  id: 'youtubeLite',
  label: 'YouTube Lite',
  widget: 'object',
  fields: [
    {
      name: 'id',
      label: 'YouTube Video ID',
      widget: 'string',
      required: true,
      hint: 'Enter the ID of the YouTube video you want to embed.'
    },
    {
      name: 'label',
      label: 'Label',
      widget: 'string',
      default: '',
      hint: 'Enter a label or description for the video. This is optional.'
    }
  ],
  pattern: /^{{< youtubeLite id="([^"]+)"(?: label="([^"]*)")? >}}$/,
  fromBlock: function (match) {
    return {
      id: match[1],
      label: match[2] || ''
    };
  },
  toBlock: function (data) {
    return `{{< youtubeLite id="${data.id}"${data.label ? ` label="${data.label}"` : ''} >}}`;
  },
  toPreview: function (data) {
    return `
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        ${data.label ? `<p>${data.label}</p>` : ''}
      </div>
    `;
  }
});
