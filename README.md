# Frontend Engineering Demo

前端工程化学习示例项目 - 分阶段学习实践

## 当前阶段：阶段 12 ✅

**已完成阶段：**

- ✅ 阶段 0-3：代码规范与格式化（ESLint、Prettier、VS Code）
- ✅ 阶段 4-7：Git 工作流与提交规范（Commitlint、Husky、Lint-staged）
- ✅ 阶段 8：TypeScript 深度应用（严格模式、工具类型、类型守卫）
- ✅ 阶段 9：单元测试基础（Vitest、37个测试、97.82%覆盖率）
- ✅ 阶段 10：组件测试（Vue Test Utils、集成测试、50个测试用例）
- ✅ 阶段 11：Vite 构建优化（代码分割、压缩、环境变量）
- ✅ 阶段 12：CI/CD 完善（GitHub Actions 自动化流程）

**技术栈：**

- Vue 3.4+
- TypeScript 5.9+
- Vite 5.0+
- Vitest 4.0+ (单元测试)
- Vue Test Utils 2.4+ (组件测试)
- Prettier 3.2+ (代码格式化)
- ESLint 8.56+ (代码规范检查)
- Husky + Lint-staged (Git Hooks)
- GitHub Actions (CI/CD)

## 快速开始

```bash
# 安装依赖
yarn install

# 启动开发服务器
yarn dev

# 构建生产版本
yarn build

# 预览构建结果
yarn preview

# ========== 代码质量检查 ==========

# TypeScript 类型检查
yarn type-check

# 检查代码规范
yarn lint

# 自动修复代码规范问题
yarn lint:fix

# 检查代码格式
yarn format:check

# 自动格式化代码
yarn format

# 一键完整检查（推荐）
yarn check-all

# ========== 测试 ==========

# 运行测试（监听模式）
yarn test

# 查看测试 UI 界面
yarn test:ui

# 生成覆盖率报告
yarn test:coverage
```

## 项目结构

```
frontend-engineering-demo/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI 配置
├── .husky/
│   ├── pre-commit              # 提交前代码检查
│   └── commit-msg              # 提交信息检查
├── .vscode/
│   ├── settings.json           # VS Code 编辑器配置
│   └── extensions.json         # VS Code 推荐扩展
├── src/
│   ├── __tests__/
│   │   └── App.integration.test.ts  # 集成测试
│   ├── components/
│   │   ├── __tests__/
│   │   │   ├── HelloWorld.test.ts   # 组件测试
│   │   │   └── TypeDemo.test.ts     # 组件测试
│   │   ├── HelloWorld.vue      # 计数器组件
│   │   └── TypeDemo.vue        # TypeScript 演示组件
│   ├── types/
│   │   └── index.ts            # 类型定义
│   ├── utils/
│   │   ├── __tests__/
│   │   │   └── typeHelpers.test.ts  # 工具函数测试
│   │   └── typeHelpers.ts      # 类型安全工具函数
│   ├── main.ts                 # 应用入口
│   └── App.vue                 # 根组件
├── .env.development            # 开发环境变量
├── .env.production             # 生产环境变量
├── .eslintrc.json              # ESLint 配置
├── .gitignore                  # Git 忽略配置
├── .prettierrc.json            # Prettier 配置
├── commitlint.config.js        # Commitlint 配置
├── COMMIT_CONVENTION.md        # Git 提交规范文档
├── index.html                  # HTML 入口
├── package.json                # 项目配置
├── tsconfig.json               # TypeScript 配置
├── vite.config.ts              # Vite 配置
├── vite-env.d.ts               # 环境变量类型定义
└── vitest.config.ts            # Vitest 配置
```

## 📚 学习笔记

本 README 包含项目核心信息和快速入门指南。

**查看详细学习笔记：** [information.md](./information.md)

详细学习笔记包含：

- 各阶段学习内容详解
- 配置文件说明和示例
- 最佳实践和踩坑经验
- 完整的学习总结

---

## 在线访问

**GitHub Pages**: https://introvert-y.github.io/frontend-engineering-demo/

---

**项目创建时间：** 2026-01-07
