// Register the custom editor component
CMS.registerEditorComponent({
  // Internal id of the component
  id: 'article',

  // Visible label
  label: 'Article',

  // Fields the user needs to fill out when adding an instance of the component
  fields: [
    {
      name: 'link',
      label: 'Link',
      widget: 'string',
      default: ''
    }
  ],

  // Regex pattern used to search for instances of this block in the markdown document.
  pattern: /^{{< article link="([^"]+)" >}}$/,

  // Given a RegExp Match object, return an object with one property for each field defined in `fields`.
  fromBlock: function(match) {
    return {
      link: match[1]
    };
  },

  // Given an object with one property for each field defined in `fields`, return the string you wish to be inserted into your markdown.
  toBlock: function(data) {
    return `{{< article link="${data.link}" >}}`;
  },

  // Preview output for this component. Can either be a string or a React component
  toPreview: function(data) {
    return `
      <a href="${data.link}" style="color: #007bff; text-decoration: underline;">
        Link to Article
      </a>
    `;
  }
});
