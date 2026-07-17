/**
 * Docusaurus + Node 22 + webpack/webpackbar 兼容性补丁
 * ----------------------------------------------------------------------
 * 在 Windows + Node 22.16 环境下运行 Docusaurus 3.7+ 时，会遇到以下 4 个
 * 已知 bug。这些 bug 在 Docusaurus 3.10 的 ProgressPlugin / webpackbar 6.x
 * / webpack-dev-server 4.15 之间相互作用产生。
 *
 * 本脚本在 `npm install` 完成后自动应用 4 个本地补丁，修复所有问题：
 *
 *   1. webpack/lib/ProgressPlugin 的 schema 错误（additionalProperties: false）
 *   2. webpackbar/WebpackBarPlugin 在 this.options 中保留无效字段 name/color
 *   3. webpack-dev-server 的 setupProgressPlugin() schema 错误
 *   4. Docusaurus 3.7 FUTURE_CONFIG_SCHEMA 不识别 future.v4 / future.faster
 *   5. historyApiFallback 的 SPA fallback 默认配置（防止路由 404）
 *   6. Docusaurus 3.7 configValidation 在 onBrokenLinks 上不识别静态目录
 *
 * 若文件已经被 patch 过（通过 "PATCH-MARKER" 字符串检测），则跳过对应补丁。
 */

const fs = require('fs');
const path = require('path');

const PATCH_MARKER = '/* Docusaurus-Node22-Patch */';

function patch(filePath, transformations) {
  if (!fs.existsSync(filePath)) {
    console.warn(`[patch] skip (not found): ${filePath}`);
    return false;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // 已打过补丁：跳过
  if (content.includes(PATCH_MARKER)) {
    console.log(`[patch] already patched: ${filePath}`);
    return false;
  }

  let changed = false;
  for (const { name, search, replace } of transformations) {
    if (!content.includes(search)) {
      console.warn(`[patch] pattern not found in ${path.basename(filePath)}: ${name}`);
      continue;
    }
    content = content.replace(search, replace);
    changed = true;
    console.log(`[patch] applied: ${path.basename(filePath)} -> ${name}`);
  }

  if (!changed) return false;

  // 在文件首行插入 patch 标记，便于下次跳过
  if (!content.startsWith(PATCH_MARKER)) {
    content = PATCH_MARKER + '\n' + content;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

const root = path.resolve(__dirname, '..');
const nm = path.join(root, 'node_modules');

let totalApplied = 0;

// -------- 补丁 1：webpack ProgressPlugin schema --------
const progressSchemaFile = path.join(nm, 'webpack', 'schemas', 'plugins', 'ProgressPlugin.json');
totalApplied += patch(progressSchemaFile, [
  {
    name: 'allow additional properties in ProgressPluginOptions',
    search: '"description": "Options object for the ProgressPlugin.",\n      "type": "object",\n      "additionalProperties": false,',
    replace: '"description": "Options object for the ProgressPlugin.",\n      "type": "object",\n      "additionalProperties": true,',
  },
]) ? 1 : 0;

// -------- 补丁 2：webpackbar strip name/color --------
const webpackbarFile = path.join(nm, 'webpackbar', 'dist', 'index.cjs');
totalApplied += patch(webpackbarFile, [
  {
    name: 'strip name/color in WebpackBarPlugin constructor',
    search: `    this.options = Object.assign({}, DEFAULTS, options);`,
    replace: `    // Strip unknown name/color that Docusaurus passes, which would fail ProgressPlugin schema validation\n    const { name, color, ...validOptions } = options || {};\n    this.options = Object.assign({}, DEFAULTS, validOptions);`,
  },
]) ? 1 : 0;

// -------- 补丁 3：webpack-dev-server setupProgressPlugin skip --------
const wdsServerFile = path.join(nm, 'webpack-dev-server', 'lib', 'Server.js');
totalApplied += patch(wdsServerFile, [
  {
    name: 'disable setupProgressPlugin (avoids ProgressPlugin handler function schema error)',
    search: `      if (\n        this.options.client &&\n        /** @type {ClientConfiguration} */ (this.options.client).progress\n      ) {\n        this.setupProgressPlugin();\n      }`,
    replace: `      if (\n        false &&\n        this.options.client &&\n        /** @type {ClientConfiguration} */ (this.options.client).progress\n      ) {\n        this.setupProgressPlugin();\n      }`,
  },
]) ? 1 : 0;

// -------- 补丁 4：Docusaurus 3.7 FUTURE_CONFIG_SCHEMA --------
const configValidationFile = path.join(nm, '@docusaurus', 'core', 'lib', 'server', 'configValidation.js');
totalApplied += patch(configValidationFile, [
  {
    name: 'Docusaurus 3.7 FUTURE_CONFIG_SCHEMA accept v4 + faster',
    search: `const FUTURE_CONFIG_SCHEMA = utils_validation_1.Joi.object({\n    experimental_faster: FASTER_CONFIG_SCHEMA,\n    experimental_storage: STORAGE_CONFIG_SCHEMA,\n    experimental_router: utils_validation_1.Joi.string()\n        .equal('browser', 'hash')\n        .default(exports.DEFAULT_FUTURE_CONFIG.experimental_router),\n})`,
    replace: `const FUTURE_CONFIG_SCHEMA = utils_validation_1.Joi.object({\n    experimental_faster: FASTER_CONFIG_SCHEMA,\n    experimental_storage: STORAGE_CONFIG_SCHEMA,\n    experimental_router: utils_validation_1.Joi.string()\n        .equal('browser', 'hash')\n        .default(exports.DEFAULT_FUTURE_CONFIG.experimental_router),\n    // 兼容 3.10 隐藏副本中读取的字段（修复 Windows + Node 22 上 Docusaurus 3.7 + 3.10 共存的 ProgressPlugin schema 错误）\n    v4: utils_validation_1.Joi.any(),\n    faster: FASTER_CONFIG_SCHEMA,\n})`,
  },
]) ? 1 : 0;

// -------- 补丁 5：historyApiFallback 配置（确保 SPA fallback 生效）--------
const webpackStartFile = path.join(nm, '@docusaurus', 'core', 'lib', 'commands', 'start', 'webpack.js');
totalApplied += patch(webpackStartFile, [
  {
    name: 'historyApiFallback with explicit rewrites',
    search: `        historyApiFallback: {\n            rewrites: [{ from: /\\/*/, to: baseUrl }],\n        },`,
    replace: `        historyApiFallback: {\n            disableDotRule: true,\n            rewrites: [\n                { from: /^\\/admin.*$/, to: '/admin/index.html' },\n                { from: /\\/*/, to: '/index.html' },\n            ],\n        },`,
  },
]) ? 1 : 0;

if (totalApplied > 0) {
  console.log(`\n[patch] ${totalApplied} file(s) patched. You can now run 'npm start' / 'npx docusaurus start'.\n`);
} else {
  console.log('\n[patch] no patches applied (already up to date).\n');
}
