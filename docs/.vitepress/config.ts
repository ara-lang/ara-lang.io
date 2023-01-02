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
      },
      {
        text: 'Fundamentals',
        items: [
          {
            text: 'Structure',
            link: '/fundamentals/structure'
          },
          {
            text: 'Comments',
            link: '/fundamentals/comments'
          },
          {
            text: 'Identifiers',
            link: '/fundamentals/identifiers'
          },
          {
            text: 'Keywords',
            link: '/fundamentals/keywords'
          },
          {
            text: 'Literals',
            link: '/fundamentals/literals'
          },
          {
            text: 'Scopes',
            link: '/fundamentals/scopes'
          },
          {
            text: 'Constants',
            link: '/fundamentals/constants'
          },
          {
            text: 'Variables',
            link: '/fundamentals/variables'
          },
          {
            text: 'Namespaces',
            link: '/fundamentals/namespaces'
          }
        ]
      },
      {
        text: 'Expressions',
        items: [
          {
            text: 'Arithmetic Operations',
            link: '/expressions/arithmetic-operations'
          },
          {
            text: 'Assignment Operations',
            link: '/expressions/assignment-operations'
          },
          {
            text: 'Bitwise Operations',
            link: '/expressions/bitwise-operations'
          },
          {
            text: 'Comparison Operations',
            link: '/expressions/comparison-operations'
          },
          {
            text: 'Logical Operations',
            link: '/expressions/logical-operations'
          },
          {
            text: 'String Operations',
            link: '/expressions/string-operations'

          },
          {
            text: 'Type Operations',
            link: '/expressions/type-operations'
          },
          {
            text: 'Ternary Operations',
            link: '/expressions/ternary-operations'
          },
          {
            text: 'Null Coalescing Operation',
            link: '/expressions/null-coalescing-operation'
          },
          {
            text: 'Class Operations',
            link: '/expressions/class-operations'
          },
          {
            text: 'Object Operations',
            link: '/expressions/object-operations'
          },
          {
            text: 'Function Operations',
            link: '/expressions/function-operations'
          },
          {
            text: 'Array Operations',
            link: '/expressions/array-operations'
          },
          {
            text: 'Exception Operations',
            link: '/expressions/exception-operations'
          },
          {
            text: 'Generator Operations',
            link: '/expressions/generator-operations'
          },
          {
            text: 'Async Operations',
            link: '/expressions/async-operations'
          },
          {
            text: 'Match',
            link: '/expressions/match'
          },
          {
            text: 'Exit',
            link: '/expressions/exit'
          },
          {
            text: 'Closures',
            link: '/expressions/closures'
          },
          {
            text: 'Arrays',
            link: '/expressions/arrays'
          }
        ]
      },
      {
        text: 'Classes',
        items: [
          {
            text: 'Introduction',
            link: '/classes/introduction'
          },
          {
            text: 'Methods',
            link: '/classes/methods'
          },
          {
            text: 'Properties',
            link: '/classes/properties'
          },
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
