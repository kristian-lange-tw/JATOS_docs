// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JATOS',
  tagline: 'Just Another Tool for Online Studies',
  url: 'https://v2.jatos.org',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JATOS', // Usually your GitHub org/user name.
  projectName: 'JATOS_docs', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: '3.7.1 (current)',
              path: '.',
              banner: 'unreleased',
            },
            '1.0.0': {
              label: '< 3.7.1',
              path: 'before-3.7.1',
              banner: 'none',
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'JATOS',
        logo: {
          alt: 'JATOS Logo',
          src: 'img/jatos_logo_color.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'overview/Whats-JATOS',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/Example-Studies',
            label: 'Example Studies',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'overview/Contact-us',
            position: 'left',
            label: 'Contact'
          },
          {type: 'docsVersionDropdown'},
          {
            href: "https://buymeacoffee.com/jatos",
            label: "Buy me a coffee",
            position: "right",
          },
          {
            href: 'https://github.com/JATOS/JATOS/releases/latest',
            label: 'Download',
            position: 'right'
          },
          {
            href: 'http://blog.jatos.org/',
            label: 'Blog',
            position: 'right'
          },
          {
            href: 'https://github.com/JATOS/JATOS',
            label: 'GitHub',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/overview/Whats-JATOS',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `JATOS is <a href="https://github.com/JATOS/JATOS">open source</a> and published under <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache License, version 2.0</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      googleAnalytics: {
        trackingID: 'UA-57013276-1',
        anonymizeIP: true, // Should IPs be anonymized?
      },
    }),
};

module.exports = config;
