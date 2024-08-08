// widgets/alert.js

CMS.registerEditorComponent({
    id: 'alert',
    label: 'Alert',
    fields: [
        {
            name: 'icon',
            label: 'Icon',
            widget: 'select',
            options: [
                'amazon', 'apple', 'bars', 'bell', 'blogger', 'bluesky', 'bomb',
                'bug', 'check', 'chevron-down', 'circle-info', 'codeberg', 'codepen',
                'code', 'comment', 'dev', 'discord', 'discourse', 'docker', 'download',
                'dribbble', 'edit', 'email', 'envelope', 'expand', 'eye', 'facebook',
                'fire', 'flickr', 'fork', 'foursquare', 'ghost', 'github', 'gitlab',
                'globe', 'goodreads', 'google', 'graduation-cap', 'hackernews', 'hashnode',
                'heart-empty', 'heart', 'image', 'instagram', 'itch-io', 'keybase',
                'kickstarter', 'ko-fi', 'language', 'lastfm', 'lightbulb', 'linkedin',
                'link', 'list', 'location-dot', 'lock', 'mastodon', 'medium', 'microsoft',
                'moon', 'mug-hot', 'music', 'orcid', 'patreon', 'paypal', 'pencil',
                'pgpkey', 'phone', 'pinterest', 'poo', 'reddit', 'researchgate', 'rss-square',
                'rss', 'scale-balanced', 'search', 'shield', 'skull-crossbones', 'slack',
                'snapchat', 'soundcloud', 'spotify', 'stack-overflow', 'star', 'steam',
                'stripe', 'substack', 'sun', 'tag', 'telegram', 'text', 'threads',
                'tiktok', 'triangle-exclamation', 'tumblr', 'twitch', 'twitter', 'wand-magic-sparkles',
                'whatsapp', 'xing', 'xmark', 'x-twitter', 'youtube'
            ],
            default: 'fire'
        },
        {
            name: 'cardColor',
            label: 'Card Color',
            widget: 'string',
            default: '#e63946'
        },
        {
            name: 'iconColor',
            label: 'Icon Color',
            widget: 'string',
            default: '#1d3557'
        },
        {
            name: 'textColor',
            label: 'Text Color',
            widget: 'string',
            default: '#f1faee'
        },
        {
            name: 'text',
            label: 'Text',
            widget: 'text'
        }
    ],
    pattern: /^{{< alert icon="([^"]+)" cardColor="([^"]+)" iconColor="([^"]+)" textColor="([^"]+)" >}}\s*([^]+?)\s*{{< \/alert >}}/,
    fromBlock: function (match) {
        return {
            icon: match[1],
            cardColor: match[2],
            iconColor: match[3],
            textColor: match[4],
            text: match[5]
        };
    },
    toBlock: function (obj) {
        return `{{< alert icon="${obj.icon}" cardColor="${obj.cardColor}" iconColor="${obj.iconColor}" textColor="${obj.textColor}" >}}\n${obj.text}\n{{< /alert >}}`;
    },
    toPreview: function (obj) {
        return `<div style="background-color: ${obj.cardColor}; color: ${obj.textColor}; padding: 10px; border-radius: 5px;">
            <i class="icon-${obj.icon}" style="color: ${obj.iconColor};"></i> ${obj.text}
        </div>`;
    }
});
