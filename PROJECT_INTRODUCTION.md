# 明道云帮助文档系统 - 项目介绍

## 📋 目录
- [代码框架介绍](#代码框架介绍)
- [管理后台技术介绍](#管理后台技术介绍)
- [项目配合使用方法](#项目配合使用方法)

---

## 代码框架介绍

### 1. 技术栈概览

本项目基于 **Docusaurus 3.10** 构建，是一个现代化的静态文档网站生成器。

**核心技术：**
- **Docusaurus 3.10.0** - 文档网站框架
- **React 18.2.0** - UI 组件库
- **MDX** - Markdown + JSX 混合文档格式
- **Prism** - 代码语法高亮
- **Node.js >= 20.0** - 运行环境

### 2. 项目结构详解

```
Docusaurus-main/
├── docs/                    # 文档源文件（Markdown/MDX）
│   └── hap/                # HAP 平台文档
│       ├── intro.md        # 平台介绍
│       ├── quick-start.md  # 快速开始
│       ├── app-build.md    # 应用搭建
│       └── page-manage.md  # 页面管理
│
├── src/                     # 源代码目录
│   ├── components/         # React 可复用组件
│   │   └── HomepageFeatures/  # 首页特性展示组件
│   ├── css/                # 全局样式定制
│   │   └── custom.css      # 自定义 CSS
│   └── pages/              # 自定义页面
│       ├── index.js        # 首页组件
│       └── markdown-page.mdx
│
├── static/                  # 静态资源目录
│   ├── admin/              # 管理后台（Decap CMS）
│   │   ├── index.html      # CMS 入口
│   │   └── config.yml      # CMS 配置
│   ├── img/                # 图片资源
│   └── uploads/            # 上传文件存储
│
├── docusaurus.config.js     # Docusaurus 主配置文件
├── sidebars.js             # 文档侧边栏导航配置
├── package.json            # 依赖和脚本配置
└── README.md               # 项目说明
```

### 3. 核心配置文件功能

#### `docusaurus.config.js` - 站点配置
- **站点信息**：标题、标语、favicon
- **部署配置**：URL、baseUrl、trailingSlash
- **国际化**：中文站点配置（zh-Hans）
- **路由设置**：文档作为首页（`routeBasePath: '/'`）
- **主题配置**：导航栏、页脚、代码高亮主题
- **插件系统**：使用 classic preset（docs + blog + theme）

#### `sidebars.js` - 导航结构
定义文档的层级导航结构：
- **平台介绍**：简介、快速开始
- **应用搭建**：应用构建、页面管理

#### `package.json` - 脚本命令
```json
{
  "start": "启动开发服务器（热更新）",
  "build": "构建生产版本",
  "deploy": "部署到 GitHub Pages",
  "serve": "本地预览生产构建",
  "clear": "清除缓存"
}
```

### 4. 工作原理

```
Markdown 文档 → Docusaurus 处理 → React 组件渲染 → 静态 HTML 生成
```

**关键特性：**
- ✅ 文档即代码（Markdown/MDX）
- ✅ React 组件化扩展
- ✅ 自动生成的侧边栏和导航
- ✅ 响应式设计，支持移动端
- ✅ SEO 优化
- ✅ 代码语法高亮
- ✅ 深色/浅色模式切换

---

## 管理后台技术介绍

### 1. Decap CMS 概述

本项目集成 **Decap CMS v3**（原 Netlify CMS），提供可视化的文档管理界面。

**技术组成：**
- **Decap CMS 3.x** - 基于 Git 的无头 CMS
- **Netlify Identity** - 用户身份认证
- **Git Gateway** - Git 仓库连接服务
- **GitHub OAuth** - 登录认证方式

### 2. 管理后台架构

```
用户浏览器 → /admin/ → Decap CMS UI → Netlify Identity 认证 
                                      ↓
                              Git Gateway 代理
                                      ↓
                              GitHub API (提交 PR)
```

### 3. 核心配置解析

#### `static/admin/config.yml`

```yaml
backend:
  name: git-gateway      # 使用 Git Gateway 后端
  branch: main           # 目标分支

disable_email_login: true  # 禁用邮箱登录，仅用 GitHub

site_url: https://genuine-conkies-c8fc4a.netlify.app

media_folder: static/uploads  # 媒体文件存储路径
public_folder: /uploads       # 公开访问路径

collections:
  - name: hap
    label: HAP 文档
    folder: docs/hap          # 文档存储目录
    create: true              # 允许创建新文档
    slug: "{{slug}}"          # 文件命名规则
    fields:                   # 表单字段定义
      - title (string)        # 标题字段
      - body (markdown)       # 内容字段（Markdown 编辑器）
```

### 4. 功能特性

**内容管理：**
- ✅ 可视化 Markdown 编辑器
- ✅ 实时预览
- ✅ 图片上传和管理
- ✅ 草稿保存
- ✅ 版本控制（通过 Git）

**工作流程：**
1. 编辑者通过 `/admin/` 登录
2. 创建/编辑文档（可视化界面）
3. 保存时自动提交到 GitHub
4. 触发 Netlify 自动构建部署

**优势：**
- 🎯 非技术人员也可编辑文档
- 🎯 无需了解 Git 命令
- 🎯 保留版本历史记录
- 🎯 支持协作编辑

---

## 项目配合使用方法

### 1. 两种内容编辑方式

#### 方式一：开发者模式（直接编辑代码）

**适用场景：** 开发人员、熟悉 Git 的用户

**操作步骤：**
```bash
# 1. 克隆仓库
git clone <repository-url>
cd Docusaurus-main

# 2. 安装依赖
yarn install

# 3. 启动开发服务器
yarn start

# 4. 编辑 docs/ 目录下的 Markdown 文件
# 浏览器自动热更新预览

# 5. 提交更改
git add .
git commit -m "更新文档"
git push
```

**优点：**
- 完整的代码编辑器功能
- 支持批量修改
- 可使用 Git 分支管理
- 适合技术性文档

#### 方式二：CMS 管理模式（可视化编辑）

**适用场景：** 产品人员、运营人员、非技术用户

**操作步骤：**
```
1. 访问管理后台
   https://genuine-conkies-c8fc4a.netlify.app/admin/

2. 使用 GitHub 账号登录
   （需要仓库写入权限）

3. 选择 "HAP 文档" 集合

4. 点击 "新建条目" 或编辑现有文档
   - 填写标题
   - 使用富文本编辑器编写内容
   - 上传图片（拖拽或点击）

5. 点击 "发布"
   - 自动提交到 GitHub main 分支
   - 触发 Netlify 自动构建
   - 约 1-2 分钟后生效
```

**优点：**
- 无需安装任何软件
- 所见即所得编辑
- 降低使用门槛
- 适合快速内容更新

### 2. 完整工作流程

```
┌─────────────────────────────────────────────┐
│         内容创作阶段                          │
├──────────────┬──────────────────────────────┤
│  开发者      │  非技术用户                    │
│  VS Code     │  Decap CMS (/admin/)          │
│  编辑 Markdown│  可视化编辑                    │
└──────┬───────┴────────┬─────────────────────┘
       │                 │
       └────────┬────────┘
                ↓
┌─────────────────────────────────────────────┐
│         版本控制阶段                          │
│     GitHub 仓库（main 分支）                  │
│     - 自动接收 CMS 提交的 PR                  │
│     - 或直接 push 代码                        │
└────────────────┬────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────┐
│         自动化部署阶段                        │
│     Netlify CI/CD                             │
│     1. 检测到代码变更                         │
│     2. 执行 yarn build                       │
│     3. 部署到 CDN                            │
│     4. 更新 DNS                              │
└────────────────┬────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────┐
│         用户访问阶段                          │
│     https://genuine-conkies-c8fc4a.netlify.app │
│     - 全球 CDN 加速                           │
│     - HTTPS 加密                              │
│     - 自动 SSL 证书                           │
└─────────────────────────────────────────────┘
```

### 3. 团队协作建议

**角色分工：**

| 角色 | 职责 | 使用方式 |
|------|------|----------|
| 技术负责人 | 架构维护、模板设计 | 开发者模式 |
| 文档工程师 | 技术文档编写 | 开发者模式 |
| 产品经理 | 产品说明更新 | CMS 模式 |
| 运营人员 | 帮助文档维护 | CMS 模式 |

**最佳实践：**

1. **文档规范统一**
   - 制定 Markdown 写作规范
   - 统一图片命名规则
   - 建立文档模板

2. **审核流程**
   ```
   CMS 编辑 → GitHub PR → 技术负责人审核 → 合并 → 自动部署
   ```

3. **备份策略**
   - Git 天然版本控制
   - 定期导出 docs/ 目录
   - 重要更改添加标签

4. **性能优化**
   - 图片压缩后上传
   - 避免过大单个文档
   - 合理使用代码块

### 4. 常见问题处理

#### Q1: CMS 无法登录？
- 检查 Netlify Identity 是否启用
- 确认 GitHub OAuth 配置正确
- 验证用户有仓库写入权限

#### Q2: 文档更新后未生效？
- 检查 Netlify 构建日志
- 清除浏览器缓存
- 等待 1-2 分钟 CDN 刷新

#### Q3: 图片上传失败？
- 确认 `static/uploads/` 目录存在
- 检查文件大小限制（建议 < 5MB）
- 验证 `.gitkeep` 文件已提交

#### Q4: 本地开发看不到 CMS？
- CMS 仅在 Netlify 部署后可用
- 本地可通过 `yarn start` 预览文档
- 测试 CMS 需部署到 Netlify

### 5. 部署配置要点

**Netlify 配置：**
```
Build command: yarn build
Publish directory: build
Node version: 20+
Environment variables: (按需配置)
```

**GitHub Pages 备选方案：**
```bash
# 修改 docusaurus.config.js
organizationName: 'your-username'
projectName: 'your-repo'

# 执行部署
yarn deploy
```

---

## 快速开始指南

### 首次设置（开发者）

```bash
# 1. 环境准备
node --version  # 确保 >= 20.0

# 2. 安装依赖
yarn install

# 3. 启动开发
yarn start

# 4. 访问
# http://localhost:3000
```

### 首次设置（CMS 管理员）

```
1. 在 Netlify 后台启用 Identity 服务
2. 配置 Git Gateway
3. 邀请团队成员（Email 邀请）
4. 测试登录 /admin/
```

### 日常使用

```
开发者：编辑代码 → git push → 自动部署
运营人员：登录 CMS → 编辑文档 → 发布 → 自动部署
```

---

## 总结

本项目结合了 **Docusaurus 的强大文档能力** 和 **Decap CMS 的易用性**，实现了：

✅ **技术友好** - 开发者可用代码方式高效管理  
✅ **业务友好** - 非技术人员可可视化编辑  
✅ **自动化** - Git + Netlify 实现 CI/CD  
✅ **可扩展** - React 组件生态丰富  
✅ **低成本** - 开源方案，托管免费  

适合中小团队的文档管理系统需求。
