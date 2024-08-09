// Register the custom editor component
CMS.registerEditorComponent({
  id: 'codeberg',
  label: 'Codeberg Repository',
  fields: [
    {
      name: 'repo',
      label: 'Repository',
      widget: 'string',
      required: true,
      hint: 'Enter the Codeberg repository in the format: user/repo. This field is required.',
      pattern: [
        /^[\w-]+\/[\w-]+$/,
        'Please enter a valid repository in the format: user/repo.'
      ]
    }
  ],
  pattern: /^{{< codeberg repo="([\w-]+\/[\w-]+)" >}}$/,
  fromBlock: function(match) {
    return {
      repo: match[1]
    };
  },
  toBlock: function(data) {
    return `{{< codeberg repo="${data.repo}" >}}`;
  },
  toPreview: function(data) {
    return `<div><p><strong>Repository:</strong> ${data.repo}</p></div>`;
  }
});
