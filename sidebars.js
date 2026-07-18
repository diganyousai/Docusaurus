// @ts-check
// 文档侧边栏
// 注意：navbar 现在用直接 to: 链接而不是 docSidebar，
// 所以本文件不会被引用，但保留以备后续用回 docSidebar。
//
// 3.10 严格校验：所有 doc ID 必须对应 docs/ 下的真实文件。
module.exports = {
  // 技能：docs/skills/index.md
  skills: [
    'skills/index',
  ],

  // 项目
  projects: [
    'projects/overview',
    'projects/project-a',
    'projects/project-b',
    'projects/project-c',
    'projects/project-d',
  ],

  // 关于：docs/about.md
  about: [
    'about',
  ],
};
