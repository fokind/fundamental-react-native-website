// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fundamental React Native",
  tagline:
    "Library of React Native components based on SAP Fundamental Styles.",
  url: "https://fokind.github.io/react-native-fundamental/",
  baseUrl: "/",
  clientModules: [require.resolve("./snackPlayerInitializer.js")],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "fokind", // Usually your GitHub org/user name.
  projectName: "fundamental-react-native", // Usually your repo name.
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/fokind/fundamental-react-native-website/blob/main/",
          remarkPlugins: [require("@react-native-website/remark-snackplayer")],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Fundamental React Native",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "API",
          },
          {
            href: "https://github.com/fokind/fundamental-react-native-website",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Dmitry Fokin. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  scripts: [{ src: "https://snack.expo.dev/embed.js", defer: true }],
};

module.exports = config;
