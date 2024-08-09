CMS.registerEditorComponent({
  id: 'github',
  label: 'GitHub Repository',
  fields: [
    {
      name: 'repo',
      label: 'Repository',
      widget: 'string',
      required: true,
      hint: 'Enter the GitHub repository in the format owner/repo.',
      pattern: [
        /^[\w-]+\/[\w-]+$/,
        'Please enter a valid repository in the format: user/repo.'
      ]
    }
  ],
  pattern: /^{{< github repo="([^"]+)" >}}$/,
  fromBlock: function(match) {
    return {
      repo: match[1]
    };
  },
  toBlock: function(data) {
    return `{{< github repo="${data.repo}" >}}`;
  },
  toPreview: function(data) {
    return `
      <div>
        <p><strong>GitHub Repository:</strong> ${data.repo}</p>
        <a href="https://github.com/${data.repo}" target="_blank">View Repository on GitHub</a>
      </div>
    `;
  }
});
