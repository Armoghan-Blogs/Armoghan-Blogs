// Register the custom editor component
CMS.registerEditorComponent({
  id: 'codeimporter',
  label: 'Code Importer',
  fields: [
    {
      name: 'url',
      label: 'URL',
      widget: 'string',
      required: true,
      hint: 'The URL of the file to import. This field is required.',
      pattern: [
        /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
        'Please enter a valid URL (must start with http://, https://, or ftp://).'
      ]
    },
    {
      name: 'type',
      label: 'Type',
      widget: 'string',
      default: 'toml',
      hint: 'Enter the type of the file (e.g., toml, yaml, json, etc.).'
    },
    {
      name: 'startLine',
      label: 'Start Line',
      widget: 'number',
      default: null,
      required: false,
      hint: 'Enter the line number to start importing from. This is optional.'
    },
    {
      name: 'endLine',
      label: 'End Line',
      widget: 'number',
      default: null,
      required: false,
      hint: 'Enter the line number to stop importing at. This is optional.'
    }
  ],
  pattern: /^{{< codeimporter url="(https?:\/\/[^\s/$.?#].[^\s]*)"(?: type="([^"]+)")?(?: startLine="(\d+)")?(?: endLine="(\d+)")? >}}$/,
  fromBlock: function(match) {
    return {
      url: match[1],
      type: match[2] || 'toml',
      startLine: match[3] ? parseInt(match[3], 10) : null,
      endLine: match[4] ? parseInt(match[4], 10) : null
    };
  },
  toBlock: function(data) {
    const startLine = data.startLine !== null ? ` startLine="${data.startLine}"` : '';
    const endLine = data.endLine !== null ? ` endLine="${data.endLine}"` : '';
    return `{{< codeimporter url="${data.url}" type="${data.type}"${startLine}${endLine} >}}`;
  },
  toPreview: function(data) {
    return `
      <div>
        <p><strong>URL:</strong> ${data.url}</p>
        <p><strong>Type:</strong> ${data.type}</p>
        ${data.startLine !== null ? `<p><strong>Start Line:</strong> ${data.startLine}</p>` : ''}
        ${data.endLine !== null ? `<p><strong>End Line:</strong> ${data.endLine}</p>` : ''}
      </div>
    `;
  }
});
