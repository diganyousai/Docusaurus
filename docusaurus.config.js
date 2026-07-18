// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  /** ======================
   * 基本站点信息
   * ====================== */
  title: '个人主页',
  tagline: '全栈工程师 · 独立开发者',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  /** ======================
   * ✅ Netlify 访问地址（已迁移）
   * ====================== */
  url: 'https://genuine-conkies-c8fc4a.netlify.app',
  baseUrl: '/',

  // ✅ 生产环境推荐：显式使用尾斜杠
  // 避免 Netlify / SEO / 相对路径问题
  trailingSlash: true,

  organizationName: 'diganyousai', // GitHub 用户 / 组织名
  projectName: 'Docusaurus',       // 仓库名

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
        /** 文档配置 */
        docs: {
          routeBasePath: '/', // 文档作为站点首页
          sidebarPath: require.resolve('./sidebars.js'),
        },

        /** 不使用博客 */
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

    /** 顶部导航 */
    navbar: {
      title: '个人主页',
      logo: {
        alt: '个人主页 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: '首页',
          to: '/',
          position: 'left',
        },
        {
          label: '技能',
          to: '/skills',
          position: 'left',
        },
        {
          label: '项目',
          to: '/projects/overview',
          position: 'left',
        },
        {
          label: '关于',
          to: '/about',
          position: 'left',
        },
      ],
    },

    /** Footer */
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} 个人主页`,
    },

    /** 代码高亮 */
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;