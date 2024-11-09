// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  clientModules: [require.resolve("./plugins/lightbox")],
  // scripts: [{ src: "/js/lightbox.js", async: true }],
  scripts: [{ src: "/js/analytics.js", async: true }],
  title: "Cary0x's Unofficial Pond0x Info",
  tagline: "Guides, Information, and Issues",
  favicon: "img/pond-book-icon.png",
  url: "https://cary0x.github.io",
  baseUrl: "/",
  organizationName: "Cary0x",
  projectName: "cary0x.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    localeConfigs: {
      en: {
        label: "English",
      },
      es: {
        label: "Espanol",
      },
    },
  },

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        href: "/img/favicon-96x96.png",
        sizes: "96x96",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/svg+xml",
        href: "/img/favicon.svg",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "shortcut icon",
        href: "/img/favicon.ico",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon.png",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "apple-mobile-web-app-title",
        content: "PondDocs",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleTagManager: {
          containerId: "GTM-KHFX55XS",
        },
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "title",
          content: "Cary0x's Unofficial Pond0x Info",
        },
        {
          name: "Content-Security-Policy",
          content: "frame-ancestors 'none';",
        },
      ],
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: "img/social-card.jpg",
      navbar: {
        title: "Cary0x2's Unofficial Pond0x Info",
        logo: {
          alt: "Cary0x's Pond0x Info",
          src: "img/pond-icon.png", // Path to your logo image in the `static` directory
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
            to: "/docs",
          },
          {
            to: "/dashboard",
            position: "left",
            label: "Dashboard",
          },
          // {
          //   type: "custom-MiningStatusBar",
          //   position: "right",
          // },
          {
            to: "/statuspro",
            label: "Pro",
            position: "right",
          },
          {
            to: "/status",
            label: "Status",
            position: "right",
          },
          {
            to: "/contact",
            label: "Contact",
            position: "right",
          },
          {
            to: "/tips",
            label: "Tips",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Overview",
                to: "/docs",
              },
              {
                label: "Guides",
                to: "/docs/guides",
              },
              {
                label: "Information",
                to: "/docs/info",
              },
              {
                label: "Issues",
                to: "/docs/issues",
              },
            ],
          },
          {
            title: "Pond Sites",
            items: [
              {
                label: "Pond0x",
                href: "https://www.pond0x.com",
              },
              {
                label: "Pondx",
                href: "https://www.pondx.com",
              },
              {
                label: "PondCoin",
                href: "https://www.pondcoin.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Community",
                to: "community",
              },
              {
                label: "Contact",
                to: "contact",
              },
              {
                label: "Tips",
                to: "/tips",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cary0x. | <a href="privacy-policy">Privacy Policy</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
