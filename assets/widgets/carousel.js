// Register the custom editor component
CMS.registerEditorComponent({
  // Internal id of the component
  id: 'carousel',

  // Visible label
  label: 'Carousel',

  // Fields the user needs to fill out when adding an instance of the component
  fields: [
    {
      name: 'images',
      label: 'Images',
      widget: 'list',
      field: {
        name: 'image',
        label: 'Image URL',
        widget: "image",
        choose_url: true,
        hint: ' Click "Add images" to include multiple images in the carousel.'
      }
    },
    {
      name: 'aspectRatio',
      label: 'Aspect Ratio',
      widget: 'select',
      options: [
        '16-9',
        '4-3',
        '1-1',
        '21-9'
      ],
      default: '16-9',
      hint: 'Select the aspect ratio for the carousel images. This determines the width-to-height ratio of the carousel.'
    },
    {
      name: 'interval',
      label: 'Interval (ms)',
      widget: 'number',
      default: 5000,
      hint: 'Specify the interval time in milliseconds for transitioning between images. Default is 5000ms (5 seconds).'
    }
  ],

  // Regex pattern used to search for instances of this block in the markdown document.
  pattern: /^{{< carousel images="(.*?)" aspectRatio="(.*?)" interval="(.*?)" >}}$/s,

  // Given a RegExp Match object, return an object with one property for each field defined in `fields`.
  fromBlock: function(match) {
    // Extract images, aspectRatio, and interval from the match
    const images = match[1] ? match[1].split(',') : [];
    return {
      images: images,
      aspectRatio: match[2] || '16-9',
      interval: parseInt(match[3], 10) || 5000
    };
  },

  // Given an object with one property for each field defined in `fields`, return the string you wish to be inserted into your markdown.
  toBlock: function(data) {
    const images = data.images.join(',');
    return `{{< carousel images="${images}" aspectRatio="${data.aspectRatio}" interval="${data.interval}" >}}`;
  },

  // Preview output for this component. Can either be a string or a React component
  toPreview: function(data) {
    // Create a preview of the carousel using the given data
    const images = data.images.map(image => `<img src="${image}" style="width: 100%; height: auto;" />`).join('');
    return `
      <div style="width: 100%; overflow: hidden;">
        <div style="display: flex; flex-direction: row; overflow-x: auto; scroll-behavior: smooth; width: 100%;">
          ${images}
        </div>
      </div>
    `;
  }
});
