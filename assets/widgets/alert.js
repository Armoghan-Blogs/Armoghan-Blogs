// Register the custom editor component
CMS.registerEditorComponent({
  // Internal id of the component
  id: 'alert',

  // Visible label
  label: 'Alert',

  // Fields the user needs to fill out when adding an instance of the component
  fields: [
    {
      name: 'icon',
      label: 'Icon',
      widget: 'select',
      options: [
        'amazon.svg', 'apple.svg', 'bars.svg', 'bell.svg', 'blogger.svg',
        'bluesky.svg', 'bomb.svg', 'bug.svg', 'check.svg', 'chevron-down.svg',
        'circle-info.svg', 'codeberg.svg', 'codepen.svg', 'code.svg', 'comment.svg',
        'dev.svg', 'discord.svg', 'discourse.svg', 'docker.svg', 'download.svg',
        'dribbble.svg', 'edit.svg', 'email.svg', 'envelope.svg', 'expand.svg',
        'eye.svg', 'facebook.svg', 'fire.svg', 'flickr.svg', 'fork.svg',
        'foursquare.svg', 'ghost.svg', 'github.svg', 'gitlab.svg', 'globe.svg',
        'goodreads.svg', 'google.svg', 'graduation-cap.svg', 'hackernews.svg',
        'hashnode.svg', 'heart-empty.svg', 'heart.svg', 'image.svg', 'instagram.svg',
        'itch-io.svg', 'keybase.svg', 'kickstarter.svg', 'ko-fi.svg', 'language.svg',
        'lastfm.svg', 'lightbulb.svg', 'linkedin.svg', 'link.svg', 'list.svg',
        'location-dot.svg', 'lock.svg', 'mastodon.svg', 'medium.svg', 'microsoft.svg',
        'moon.svg', 'mug-hot.svg', 'music.svg', 'orcid.svg', 'patreon.svg',
        'paypal.svg', 'pencil.svg', 'pgpkey.svg', 'phone.svg', 'pinterest.svg',
        'poo.svg', 'reddit.svg', 'researchgate.svg', 'rss-square.svg', 'rss.svg',
        'scale-balanced.svg', 'search.svg', 'shield.svg', 'skull-crossbones.svg',
        'slack.svg', 'snapchat.svg', 'soundcloud.svg', 'spotify.svg', 'stack-overflow.svg',
        'star.svg', 'steam.svg', 'stripe.svg', 'substack.svg', 'sun.svg',
        'tag.svg', 'telegram.svg', 'text.txt', 'threads.svg', 'tiktok.svg',
        'triangle-exclamation.svg', 'tumblr.svg', 'twitch.svg', 'twitter.svg',
        'wand-magic-sparkles.svg', 'whatsapp.svg', 'xing.svg', 'xmark.svg',
        'x-twitter.svg', 'youtube.svg'
      ],
      default: 'fire.svg'
    },
    {
      name: 'cardColor',
      label: 'Card Color',
      widget: 'color',
      default: '#e63946'
    },
    {
      name: 'iconColor',
      label: 'Icon Color',
      widget: 'color',
      default: '#1d3557'
    },
    {
      name: 'textColor',
      label: 'Text Color',
      widget: 'color',
      default: '#f1faee'
    },
    {
      name: 'content',
      label: 'Content',
      widget: 'text',
      default: 'This is an alert!'
    }
  ],

  // Regex pattern used to search for instances of this block in the markdown document.
  pattern: /^{{< alert icon="([^"]+)" cardColor="([^"]+)" iconColor="([^"]+)" textColor="([^"]+)" >}}\n([\s\S]*?)\n{{< \/alert >}}$/,

  // Given a RegExp Match object, return an object with one property for each field defined in `fields`.
  fromBlock: function(match) {
    return {
      icon: match[1],
      cardColor: match[2],
      iconColor: match[3],
      textColor: match[4],
      content: match[5].trim() // Remove any leading/trailing whitespace
    };
  },

  // Given an object with one property for each field defined in `fields`, return the string you wish to be inserted into your markdown.
  toBlock: function(data) {
    return `{{< alert icon="${data.icon}" cardColor="${data.cardColor}" iconColor="${data.iconColor}" textColor="${data.textColor}" >}}\n${data.content}\n{{< /alert >}}`;
  },

  // Preview output for this component. Can either be a string or a React component
  toPreview: function(data) {
    return `
      <div style="background-color: ${data.cardColor}; color: ${data.textColor}; padding: 10px; border-radius: 5px;">
        <i class="icon-${data.icon}" style="color: ${data.iconColor};"></i>
        ${data.content}
      </div>
    `;
  }
});
