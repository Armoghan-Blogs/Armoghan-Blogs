// Register the custom editor component
CMS.registerEditorComponent({
  // Internal id of the component
  id: 'chart',

  // Visible label
  label: 'Chart',

  // Fields the user needs to fill out when adding an instance of the component
  fields: [
    {
      name: 'type',
      label: 'Chart Type',
      widget: 'select',
      options: ['bar', 'line', 'pie', 'doughnut'],
      default: 'bar',
      hint: 'Select the type of chart to display.'
    },
    {
      name: 'labels',
      label: 'Labels',
      widget: 'list',
      field: {
        name: 'label',
        label: 'Label',
        widget: 'string',
        default: '',
        hint: 'Enter labels for the chart. Click "Add" to include more labels.'
      },
      hint: 'Add labels for the chart categories (e.g., Tomato, Blueberry).'
    },
    {
      name: 'data',
      label: 'Data',
      widget: 'list',
      field: {
        name: 'dataPoint',
        label: 'Data Point',
        widget: 'number',
        default: 0,
        hint: 'Enter data values corresponding to each label. Click "Add" to include more data points.'
      },
      hint: 'Add data points for the chart (e.g., 12, 19, 3). Ensure the number of data points matches the number of labels.'
    },
    {
      name: 'label',
      label: 'Dataset Label',
      widget: 'string',
      default: '# of votes',
      hint: 'Enter a label for the dataset.'
    }
  ],

  // Regex pattern used to search for instances of this block in the markdown document.
  pattern: /^{{< chart >}}\s*type:\s*'([^']*)',\s*data:\s*{[\s\S]*?labels:\s*\[([\s\S]*?)\],\s*datasets:\s*\[{\s*label:\s*'([^']*)',\s*data:\s*\[([\s\S]*?)\]\s*}]\s*}[\s\S]*?{{< \/chart >}}$/,

  // Given a RegExp Match object, return an object with one property for each field defined in `fields`.
  fromBlock: function(match) {
    // Extract values from the match array
    return {
      type: match[1],
      labels: match[2].split(',').map(label => label.trim().replace(/'|"/g, '')),
      label: match[3],
      data: match[4].split(',').map(value => parseFloat(value.trim()))
    };
  },

  // Given an object with one property for each field defined in `fields`, return the string you wish to be inserted into your markdown.
  toBlock: function(data) {
    const labels = data.labels.map(label => `'${label}'`).join(', ');
    const dataPoints = data.data.join(', ');
    return `{{< chart >}}
type: '${data.type}',
data: {
  labels: [${labels}],
  datasets: [{
    label: '${data.label}',
    data: [${dataPoints}],
  }]
}
{{< /chart >}}`;
  },

  // Preview output for this component. Can either be a string or a React component
  toPreview: function(data) {
    // Generate a simple HTML preview of the chart
    return `
      <div>
        <h3>${data.label}</h3>
        <p>Type: ${data.type}</p>
        <p>Labels: ${data.labels.join(', ')}</p>
        <p>Data: ${data.data.join(', ')}</p>
      </div>
    `;
  }
});
