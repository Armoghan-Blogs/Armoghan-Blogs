CMS.registerEditorComponent({
  id: 'gallery',
  label: 'Gallery',
  fields: [
    {
      name: 'images',
      label: 'Images',
      widget: 'list',
      required: true,
      hint: 'Add multiple images. Each image should have a src and optional class.',
      fields: [
        {
          name: 'src',
          label: 'Image Source',
          widget: 'image',
          required: true,
          hint: 'Select an image from the CMS media library.'
        },
        {
          name: 'class',
          label: 'CSS Class',
          widget: 'select',
          multiple: true,
          options: [
            {label: 'Grid 33%', value: 'grid-w33'},
            {label: 'Grid 50%', value: 'grid-w50'},
            {label: 'Grid 33% (md)', value: 'md:grid-w33'},
            {label: 'Grid 25% (xl)', value: 'xl:grid-w25'}
          ],
          default: 'grid-w33',
          hint: 'Select a CSS class to apply to this image.'
        }
      ]
    }
  ],
  pattern: /^{{< gallery >}}\n((?:<img src="([^"]+)" class="([^"]+)" \/>[\s\S]*?)?)\n{{< \/gallery >}}$/,
  fromBlock: function(match) {
    const images = [];
    let imgMatch;
    const imgRegex = /<img src="([^"]+)" class="([^"]+)" \/>/g;
    while ((imgMatch = imgRegex.exec(match[0])) !== null) {
      images.push({ src: imgMatch[1], class: imgMatch[2] });
    }
    return { images };
  },
  toBlock: function(data) {
    return `{{< gallery >}}
${data.images.map(img => `<img src="${img.src}" class="${img.class}" />`).join('\n')}
{{< /gallery >}}`;
  },
  toPreview: function(data) {
    return `
      <div class="gallery">
        ${data.images.map(img => `<img src="${img.src}" class="${img.class}" style="max-width: 100%; height: auto;" />`).join('\n')}
      </div>
    `;
  }
});
