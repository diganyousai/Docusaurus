// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  /** ======================
   * 基本站点信息
   * ====================== */
  title: '明道云',
  tagline: '产品帮助与使用文档',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  /** ======================
   * 站点访问地址
   * ====================== */
  url: 'http://localhost:3000',
  baseUrl: '/',

  /** ======================
   * 中文站点
   * ====================== */
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  /** ======================
   * Preset 配置
   * ====================== */
  presets: [
    [
      'classic',
      {
        /** 文档配置（核心） */
        docs: {
          // ✅ 文档作为首页
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),

          // ✅ Docusaurus v3：
          // ❌ 不要 editUrl: false
          // ❌ 不要 breadcrumb
        },

        /** ✅ 不使用博客 */
        blog: false,

        /** 自定义样式 */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  /** ======================
   * 主题 & 导航
   * ====================== */
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    /** ======================
     * 顶部横向导航
     * ====================== */
    navbar: {
      title: '明道云',
      logo: {
        alt: '明道云 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: '帮助',
          to: '/',
          position: 'left',
        },
        {
          label: 'HAP',
          type: 'docSidebar',
          sidebarId: 'hap',
          position: 'left',
        },
        {
          label: 'HDP',
          to: '/hdp',
          position: 'left',
        },
        {
          label: '市场',
          to: '/market',
          position: 'left',
        },
      ],
    },

    /** ======================
     * Footer
     * ====================== */
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} 明道云`,
    },

    /** ======================
     * 代码高亮
     * ====================== */
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
