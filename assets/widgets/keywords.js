// Register the custom editor component for `keyword`
CMS.registerEditorComponent({
  id: 'keyword',
  label: 'Keyword',
  fields: [
    {
      name: 'icon',
      label: 'Icon',
      widget: 'select',
      options:  [
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
      ],
      required: true,
      hint: 'Select an icon to represent the keyword.'
    },
    {
      name: 'content',
      label: 'Content',
      widget: 'text',
      required: true,
      hint: 'Enter the content for the keyword.'
    }
  ],
  pattern: /^{{< keyword icon="([^"]+)" >}}(.*?){{< \/keyword >}}$/,
  fromBlock: function(match) {
    return {
      icon: match[1],
      content: match[2]
    };
  },
  toBlock: function(data) {
    return `{{< keyword icon="${data.icon}" >}}${data.content}{{< /keyword >}}`;
  },
  toPreview: function(data) {
    return `
      <div class="keyword">
        <span class="icon">${data.icon}</span>
        <span class="content">${data.content}</span>
      </div>
    `;
  }
});

// Register the custom editor component for `keywordList`
CMS.registerEditorComponent({
  id: 'keywordList',
  label: 'Keyword List',
  fields: [
    {
      name: 'keywords',
      label: 'Keywords',
      widget: 'list',
      fields: [
        {
          name: 'icon',
          label: 'Icon',
          widget: 'select',
          options:  [
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
      ],
          required: true,
          hint: 'Select an icon to represent the keyword.'
        },
        {
          name: 'content',
          label: 'Content',
          widget: 'text',
          required: true,
          hint: 'Enter the content for the keyword.'
        }
      ],
      hint: 'Add a list of keywords.'
    }
  ],
  pattern: /^{{< keywordList >}}([\s\S]*?){{< \/keywordList >}}$/,
  fromBlock: function(match) {
    const content = match[1].trim();
    const keywords = content.split(/{{< keyword[^>]+>}}|{{< \/keyword >}}/).filter(Boolean);

    return {
      keywords: keywords.map(keyword => {
        const parts = keyword.split(/<\/?keyword[^>]*>/).filter(Boolean);
        return {
          icon: parts[0].trim(),
          content: parts[1].trim()
        };
      })
    };
  },
  toBlock: function(data) {
    const keywords = data.keywords.map(keyword => {
      return `{{< keyword icon="${keyword.icon}" >}}${keyword.content}{{< /keyword >}}`;
    }).join('\n');
    return `{{< keywordList >}}\n${keywords}\n{{< /keywordList >}}`;
  },
  toPreview: function(data) {
    return `
      <div class="keyword-list">
        ${data.keywords.map(keyword => `
          <div class="keyword">
            <span class="icon">${keyword.icon}</span>
            <span class="content">${keyword.content}</span>
          </div>
        `).join('')}
      </div>
    `;
  }
});
