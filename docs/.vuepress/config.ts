import { defineUserConfig, defaultTheme } from "vuepress";
import { gitPlugin } from "@vuepress/plugin-git";

export default defineUserConfig({
  base: "/docs/",
  lang: "zh-CN",
  title: "Aiyartoth",
  description: "docs backup",
  dest: "dist/docs",
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "程序",
        link: "/program",
      },
      { text: "杂记", link: "/note" },
    ],
    sidebar: {
      "/program": [
        {
          text: "Html/Css",
          link: "/program/html",
        },
      ],
      "/note": ["/note", "/note/collect.md"],
    },
  }),
  plugins: [
    // @ts-ignore
    gitPlugin({
      createdTime: false,
      updatedTime: false,
      contributors: false,
    }),
  ],
});
