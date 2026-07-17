/**
 * 站点内容数据集中管理
 * 修改这里就能更新首页展示，无需改组件代码
 */

export const profile = {
  name: 'Your Name',
  title: '全栈工程师 · 独立开发者',
  tagline: '5 年 Web 开发经验，专注于现代前端架构与全栈解决方案。',
  location: '中国',
  email: 'you@example.com',
  github: 'https://github.com/yourname',
  socials: [
    { label: 'GitHub', href: 'https://github.com/yourname' },
    { label: '邮箱', href: 'mailto:you@example.com' },
  ],
};

export const skills = [
  {
    category: '前端开发',
    items: ['React', 'TypeScript', 'Next.js', 'Vue 3', 'Tailwind CSS', 'Docusaurus'],
  },
  {
    category: '后端开发',
    items: ['Node.js', 'Express', 'NestJS', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    category: '工程化与运维',
    items: ['Docker', 'GitHub Actions', 'Vite', 'Webpack', 'Nginx', 'Linux'],
  },
  {
    category: '工具与方法',
    items: ['Figma', 'VS Code', 'Postman', 'Prisma', 'Supabase', 'Vercel'],
  },
];

export const projects = [
  {
    id: 'project-a',
    title: '项目 A · 内部协作平台',
    desc: '从 0 到 1 搭建的团队协作工具，支持实时编辑、任务管理、文档协作。',
    tags: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
    link: '/projects/project-a',
    status: '已上线',
  },
  {
    id: 'project-b',
    title: '项目 B · 数据可视化工具',
    desc: '为运营团队打造的实时数据看板，支持自定义图表与下钻分析。',
    tags: ['Vue 3', 'D3.js', 'ECharts', 'Python'],
    link: '/projects/project-b',
    status: '已上线',
  },
  {
    id: 'project-c',
    title: '项目 C · 自动化部署系统',
    desc: '简化部署流程的内部工具，一键完成构建、测试、灰度发布。',
    tags: ['Node.js', 'Docker', 'GitHub Actions'],
    link: '/projects/project-c',
    status: '持续迭代',
  },
  {
    id: 'project-d',
    title: '项目 D · 开源组件库',
    desc: '个人维护的 React 组件库，Star 1k+，提供 30+ 高质量组件。',
    tags: ['React', 'TypeScript', 'Storybook'],
    link: '/projects/project-d',
    status: '维护中',
  },
];

export const timeline = [
  {
    date: '2023 - 至今',
    title: '高级工程师',
    org: '某互联网公司',
    desc: '负责核心业务前端架构与团队 code review，推动团队从 Class 组件迁移到 Hooks。',
  },
  {
    date: '2020 - 2023',
    title: '全栈开发工程师',
    org: '某创业公司',
    desc: '独立负责产品从 0 到 1，涵盖后端 API、数据库设计、前端开发与部署。',
  },
  {
    date: '2016 - 2020',
    title: '计算机科学与技术 · 本科',
    org: '某大学',
    desc: '主修计算机科学，GPA 3.7/4.0，参与 ACM 集训队。',
  },
];

export const features = [
  {
    title: '全栈开发',
    desc: '从前端 UI 到后端 API，从数据库设计到部署运维，能够独立交付完整产品。',
    icon: 'code',
  },
  {
    title: '架构设计',
    desc: '擅长复杂系统拆解，能够为不同规模的项目选择合适的技术栈与架构方案。',
    icon: 'arch',
  },
  {
    title: '团队协作',
    desc: '5 年带组经验，擅长 Code Review、技术分享与新人培养，热爱开源。',
    icon: 'team',
  },
];
