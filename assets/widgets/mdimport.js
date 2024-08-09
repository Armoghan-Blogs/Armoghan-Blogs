// Register the custom editor component for `mdimporter`
CMS.registerEditorComponent({
  id: 'mdimporter',
  label: 'Markdown Importer',
  fields: [
    {
      name: 'url',
      label: 'URL',
      widget: 'string',
      required: true,
      hint: 'The URL of the Markdown file to import.',
      pattern: [
        /^[\w-]+\/[\w-]+$/,
        'Please enter a valid repository in the format: user/repo.'
      ]
    }
  ],
  pattern: /^{{< mdimporter url="([^"]+)" >}}$/,
  fromBlock: function(match) {
    return {
      url: match[1]
    };
  },
  toBlock: function(data) {
    return `{{< mdimporter url="${data.url}" >}}`;
  },
  toPreview: function(data) {
    return `
      <div>
        <p><strong>URL:</strong> ${data.url}</p>
      </div>
    `;
  }
});
