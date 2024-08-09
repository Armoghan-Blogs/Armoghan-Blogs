// Register the custom editor component for `swatches`
CMS.registerEditorComponent({
  id: 'swatches',
  label: 'Color Swatches',
  fields: [
    {
      name: 'colors',
      label: 'Colors',
      widget: 'list',
      required: true,
      hint: 'Add multiple colors using the color picker. Use hex format (e.g., #ff0000).',
      fields: [
        {
          name: 'color',
          label: 'Color Code',
          widget: 'color',
          required: true,
          hint: 'Pick a color using the color picker.'
        }
      ]
    }
  ],
  pattern: /^{{< swatches (.*?) >}}$/,
  fromBlock: function(match) {
    // Extract color codes from the matched block
    const colorsString = match[1];
    // Ensure the colors string is properly split and trimmed
    const colors = colorsString
      .replace(/[\[\]"]/g, '')  // Remove brackets and quotes
      .split(',')
      .map(color => color.trim());  // Split by comma and trim whitespace
    return {
      colors: colors
    };
  },
  toBlock: function(data) {
    // Convert the data object to shortcode format
    const colors = data.colors.map(color => `"${color}"`).join(' ');
    return `{{< swatches ${colors} >}}`;
  },
  toPreview: function(data) {
    // Display color swatches in a preview
    return `
      <div style="display: flex; gap: 4px;">
        ${data.colors.map(color => `<div style="width: 50px; height: 50px; background-color: ${color}; border: 1px solid #ccc;"></div>`).join('')}
      </div>
    `;
  }
});
