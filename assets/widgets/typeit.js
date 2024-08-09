// Register the `typeit` component
CMS.registerEditorComponent({
  id: 'typeit',
  label: 'Typeit',
  widget: 'object',
  fields: [
    {
      name: 'tag',
      label: 'Tag',
      widget: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'],
      default: 'h3',
      required: false,
      hint: 'Choose the HTML tag for the text.'
    },
    {
      name: 'speed',
      label: 'Speed',
      widget: 'number',
      default: 50,
      required: false,
      hint: 'Set the typing speed in milliseconds per character.'
    },
    {
      name: 'breakLines',
      label: 'Break Lines',
      widget: 'boolean',
      default: false,
      required: false,
      hint: 'Enable or disable line breaks in the text.'
    },
    {
      name: 'loop',
      label: 'Loop',
      widget: 'boolean',
      default: true,
      required: false,
      hint: 'Enable or disable looping of the typing animation.'
    },
    {
      name: 'text',
      label: 'Text',
      widget: 'text',
      required: true,
      hint: 'Enter the text to be typed out. Use line breaks to separate lines if "Break Lines" is enabled.'
    }
  ],
  pattern: /^{{< typeit tag="([^"]*)" speed="(\d+)" breakLines=(true|false) loop=(true|false) >}}\n([\s\S]*?)\n{{< \/typeit >}}$/,
  fromBlock: function (match) {
    return {
      tag: match[1],
      speed: parseInt(match[2], 10),
      breakLines: match[3] === 'true',
      loop: match[4] === 'true',
      text: match[5]
    };
  },
  toBlock: function (data) {
    return `{{< typeit tag="${data.tag}" speed="${data.speed}" breakLines=${data.breakLines} loop=${data.loop} >}}\n${data.text}\n{{< /typeit >}}`;
  },
  toPreview: function (data) {
    const { tag, speed, breakLines, loop, text } = data;
    return `
      <${tag}>
        <strong>Speed:</strong> ${speed} ms<br/>
        <strong>Break Lines:</strong> ${breakLines}<br/>
        <strong>Loop:</strong> ${loop}<br/>
        <div>${text}</div>
      </${tag}>
    `;
  }
});
