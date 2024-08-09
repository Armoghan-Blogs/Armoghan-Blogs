// Define a list of icons for the `icon` field
const iconOptions = [
  'amazon.svg',
        'apple.svg',
        'bars.svg',
        'bell.svg',
        'blogger.svg',
        'bluesky.svg',
        'bomb.svg',
        'bug.svg',
        'check.svg',
        'chevron-down.svg',
        'circle-info.svg',
        'codeberg.svg',
        'codepen.svg',
        'code.svg',
        'comment.svg',
        'dev.svg',
        'discord.svg',
        'discourse.svg',
        'docker.svg',
        'download.svg',
        'dribbble.svg',
        'edit.svg',
        'email.svg',
        'envelope.svg',
        'expand.svg',
        'eye.svg',
        'facebook.svg',
        'fire.svg',
        'flickr.svg',
        'fork.svg',
        'foursquare.svg',
        'ghost.svg',
        'github.svg',
        'gitlab.svg',
        'globe.svg',
        'goodreads.svg',
        'google.svg',
        'graduation-cap.svg',
        'hackernews.svg',
        'hashnode.svg',
        'heart-empty.svg',
        'heart.svg',
        'image.svg',
        'instagram.svg',
        'itch-io.svg',
        'keybase.svg',
        'kickstarter.svg',
        'ko-fi.svg',
        'language.svg',
        'lastfm.svg',
        'lightbulb.svg',
        'linkedin.svg',
        'link.svg',
        'list.svg',
        'location-dot.svg',
        'lock.svg',
        'mastodon.svg',
        'medium.svg',
        'microsoft.svg',
        'moon.svg',
        'mug-hot.svg',
        'music.svg',
        'orcid.svg',
        'patreon.svg',
        'paypal.svg',
        'pencil.svg',
        'pgpkey.svg',
        'phone.svg',
        'pinterest.svg',
        'poo.svg',
        'reddit.svg',
        'researchgate.svg',
        'rss-square.svg',
        'rss.svg',
        'scale-balanced.svg',
        'search.svg',
        'shield.svg',
        'skull-crossbones.svg',
        'slack.svg',
        'snapchat.svg',
        'soundcloud.svg',
        'spotify.svg',
        'stack-overflow.svg',
        'star.svg',
        'steam.svg',
        'stripe.svg',
        'substack.svg',
        'sun.svg',
        'tag.svg',
        'telegram.svg',
        'text.txt',
        'threads.svg',
        'tiktok.svg',
        'triangle-exclamation.svg',
        'tumblr.svg',
        'twitch.svg',
        'twitter.svg',
        'wand-magic-sparkles.svg',
        'whatsapp.svg',
        'xing.svg',
        'xmark.svg',
        'x-twitter.svg',
        'youtube.svg'
];

// Register the `timeline` component
CMS.registerEditorComponent({
  id: 'timeline',
  label: 'Timeline',
  widget: 'object',
  fields: [
    {
      name: 'items',
      label: 'Timeline Items',
      widget: 'list',
      fields: [
        {
          name: 'icon',
          label: 'Icon',
          widget: 'select',
          options: iconOptions,
          required: false,
          default: 'undefined',
          hint: 'Select an icon from the predefined list. Default is "undefined".'
        },
        {
          name: 'header',
          label: 'Header',
          widget: 'string',
          required: false,
          default: 'undefined',
          hint: 'Enter the header text for the timeline item. Default is "undefined".'
        },
        {
          name: 'badge',
          label: 'Badge',
          widget: 'string',
          required: false,
          hint: 'Enter optional badge text to display.'
        },
        {
          name: 'subheader',
          label: 'Subheader',
          widget: 'string',
          required: false,
          hint: 'Enter optional subheader text.'
        },
        {
          name: 'content',
          label: 'Content',
          widget: 'markdown',
          required: false,
          default: 'undefined',
          hint: 'Enter the content for the timeline item. You can use HTML and other shortcodes here. Default is "undefined".'
        }
      ]
    }
  ],
  pattern: /^{{< timeline >}}([\s\S]*?){{< \/timeline >}}$/,
  fromBlock: function (match) {
    const itemsMatch = match[1].match(/\{\{< timelineItem icon="([^"]+)"(?: header="([^"]+)")?(?: badge="([^"]+)")?(?: subheader="([^"]+)")? >}}([\s\S]*?)\{\{< \/timelineItem >}}/g);
    const items = itemsMatch ? itemsMatch.map(itemMatch => {
      const [, icon, header, badge, subheader, content] = itemMatch.match(/\{\{< timelineItem icon="([^"]+)"(?: header="([^"]+)")?(?: badge="([^"]+)")?(?: subheader="([^"]+)")? >}}([\s\S]*?)\{\{< \/timelineItem >}}/);
      return { icon: icon || 'undefined', header: header || 'undefined', badge: badge || '', subheader: subheader || '', content: content || 'undefined' };
    }) : [];

    return { items };
  },
  toBlock: function (data) {
    const itemsContent = data.items.map(item => {
      const badge = item.badge ? ` badge="${item.badge}"` : '';
      const subheader = item.subheader ? ` subheader="${item.subheader}"` : '';
      return `{{< timelineItem icon="${item.icon}" header="${item.header}"${badge}${subheader} >}}\n${item.content}\n{{< /timelineItem >}}`;
    }).join('\n');

    return `{{< timeline >}}\n${itemsContent}\n{{< /timeline >}}`;
  },
  toPreview: function (data) {
    const itemsPreview = data.items.map(item => `
      <div>
        <strong>Icon:</strong> ${item.icon || 'undefined'}<br/>
        <strong>Header:</strong> ${item.header || 'undefined'}<br/>
        ${item.badge ? `<strong>Badge:</strong> ${item.badge}<br/>` : ''}
        ${item.subheader ? `<strong>Subheader:</strong> ${item.subheader}<br/>` : ''}
        <div>${item.content || 'undefined'}</div>
      </div>
    `).join('<hr/>');

    return `<div>${itemsPreview}</div>`;
  }
});
