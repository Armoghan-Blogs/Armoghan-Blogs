CMS.registerEditorComponent({
  id: 'gitlab',
  label: 'GitLab Project',
  fields: [
    {
      name: 'projectID',
      label: 'Project ID',
      widget: 'string',
      required: true,
      hint: 'Enter the GitLab project ID (e.g., 278964).'
    }
  ],
  pattern: /^{{< gitlab projectID="(\d+)" >}}$/,
  fromBlock: function(match) {
    return {
      projectID: match[1]
    };
  },
  toBlock: function(data) {
    return `{{< gitlab projectID="${data.projectID}" >}}`;
  },
  toPreview: function(data) {
    return `
      <div>
        <p><strong>GitLab Project ID:</strong> ${data.projectID}</p>
        <a href="https://gitlab.com/projects/${data.projectID}" target="_blank">View Project on GitLab</a>
      </div>
    `;
  }
});
