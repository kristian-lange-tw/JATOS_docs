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
          editUrl: 'https://github.com/JATOS/JATOS_docs/tree/master',
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
            'https://github.com/JATOS/JATOS_docs/tree/master/blog',
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
          {
            type: 'docsVersionDropdown',
            position: "right",
          },
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
                label: 'JATOS Forum',
                to: 'https://forum.cogsci.nl/categories/jatos',
              },
              {
                label: 'Google Chat',
                to: 'https://groups.google.com/g/jatos',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'http://blog.jatos.org/',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/JATOS/JATOS',
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
