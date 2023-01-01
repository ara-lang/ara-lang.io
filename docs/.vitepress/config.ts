import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "ARA Programming Language",
  description:
    "A powerful, statically typed programming language that compiles directly to PHP.",
  themeConfig: {
    siteTitle: 'ARA Language',
    sidebar: [
        {
            text: 'Introduction',
            items: [
                {
                    text: 'What is ARA?',
                    link: '/introduction/what-is-ara'
                }
            ]
        }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023 - The ARA programming language",
    },
    editLink: {
      pattern: "https://github.com/ara-lang/ara-lang.io/edit/main/docs/:path",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ara-lang",
      },
      {
        icon: "discord",
        link: "https://discord.gg/zRREHGhGAB",
      },
    ],
  },
});
