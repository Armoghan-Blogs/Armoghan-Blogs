// Register the custom editor component
CMS.registerEditorComponent({
  // Internal id of the component
  id: 'badge',

  // Visible label
  label: 'Badge',

  // Fields the user needs to fill out when adding an instance of the component
  fields: [
    {
      name: 'content',
      label: 'Content',
      widget: 'text',
      default: 'New article!'
    }
  ],

  // Regex pattern used to search for instances of this block in the markdown document.
  pattern: /^{{< badge >}}\n(.*?)\n{{< \/badge >}}$/s,

  // Given a RegExp Match object, return an object with one property for each field defined in `fields`.
  fromBlock: function(match) {
    return {
      content: match[1] || 'New article!'
    };
  },

  // Given an object with one property for each field defined in `fields`, return the string you wish to be inserted into your markdown.
  toBlock: function(data) {
    return `{{< badge >}}\n${data.content}\n{{< /badge >}}`;
  },

  // Preview output for this component. Can either be a string or a React component
  toPreview: function(data) {
    return `
      <div style="display: inline-block; padding: 5px 10px; color: #fff; background-color: #007bff; border-radius: 3px;">
        ${data.content}
      </div>
    `;
  }
});
