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
    },
    {
      name: 'params',
      label: 'Parameters',
      widget: 'string',
      required: false,
      default: '',
      hint: 'Enter additional parameters for the video URL, e.g., start=130&end=10&controls=0. Separate multiple parameters with "&".'
    }
  ],
  pattern: /^{{< youtubeLite id="([^"]+)"(?: label="([^"]*)")?(?: params="([^"]*)")? >}}$/,
  fromBlock: function (match) {
    return {
      id: match[1],
      label: match[2] || '',
      params: match[3] || ''
    };
  },
  toBlock: function (data) {
    return `{{< youtubeLite id="${data.id}"${data.label ? ` label="${data.label}"` : ''}${data.params ? ` params="${data.params}"` : ''} >}}`;
  },
  toPreview: function (data) {
    const { id, label, params } = data;
    const url = `https://www.youtube.com/embed/${id}${params ? `?${params}` : ''}`;
    return `
      <div>
        <iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        ${label ? `<p>${label}</p>` : ''}
      </div>
    `;
  }
});
