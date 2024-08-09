// Register the custom editor component
CMS.registerEditorComponent({
  id: 'figure',
  label: 'Figure',
  fields: [
    {
      name: 'src',
      label: 'Image Source',
      widget: 'image', // Using the image widget
      required: true,
      hint: 'Select an image from the CMS media library.'
    },
    {
      name: 'alt',
      label: 'Alt Text',
      widget: 'string',
      required: true,
      hint: 'Enter the alt text for the image. This field is required.'
    },
    {
      name: 'caption',
      label: 'Caption',
      widget: 'string',
      default: '',
      hint: 'Enter a caption for the image. You can include Markdown for links.'
    }
  ],
  pattern: /^{{< figure\s+src="([^"]+)"\s+alt="([^"]+)"(?:\s+caption="([^"]+)")?\s* >}}$/,
  fromBlock: function(match) {
    return {
      src: match[1],
      alt: match[2],
      caption: match[3] || ''
    };
  },
  toBlock: function(data) {
    return `{{< figure src="${data.src}" alt="${data.alt}"${data.caption ? ` caption="${data.caption}"` : ''} >}}`;
  },
  toPreview: function(data) {
    return `
      <figure>
        <img src="${data.src}" alt="${data.alt}" style="max-width: 100%; height: auto;">
        ${data.caption ? `<figcaption>${data.caption}</figcaption>` : ''}
      </figure>
    `;
  }
});
