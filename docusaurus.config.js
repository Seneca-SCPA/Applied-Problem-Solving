const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
/*
ORIGINAL OER TEMPLATE:
const math = require('remark-math');
const katex = require('rehype-katex');
const toc = require('remark-toc');

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
*/

/* Glossary definitions (definition list support) */
import remarkDefList from 'remark-deflist';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'APS145 - Applied Problem Solving',
  tagline: 'APS145 - Applied Problem Solving',
  url: 'https://seneca-SCPA.github.io/',
  baseUrl: '/Applied-Problem-Solving/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'seneca-SCPA',
  projectName: 'Applied-Problem-Solving',
  themeConfig: {
    navbar: {
      title: 'APS145 - Applied Problem Solving',
      logo: {
        alt: 'Seneca Polytechnic',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'APS145 - Applied Problem Solving',
          items: [
            {
              html: `<a href='#' id='pwa-button' class='footer__link-item' hidden>Install as an App</a>`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Seneca Polytechnic.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/Seneca-SCPA/Applied-Problem-Solving/tree/main',
          /*
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          */
          remarkPlugins: [remarkDefList],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    /*
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    */
  ],
  clientModules: [require.resolve('./pwaCustomButton.js')],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: ['standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/pwa/icon-512x512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#DA291C',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#DA291C',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/pwa/icon-192x192.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/pwa/icon-512x512.png',
            color: '#DA291C',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/pwa/icon-512x512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#DA291C',
          },
        ],
      },
    ],
  ],
};
