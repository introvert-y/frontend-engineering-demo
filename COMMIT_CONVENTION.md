# Git 提交规范

本项目采用 **Conventional Commits** 规范进行提交信息管理。

## 提交信息格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 基本格式（必填）

```
<type>: <subject>
```

**示例：**

```
feat: 添加用户登录功能
fix: 修复计数器重置bug
docs: 更新README文档
```

### 完整格式（可选）

```
<type>(<scope>): <subject>

<body>

<footer>
```

**示例：**

```
feat(auth): 添加用户登录功能

实现了基于JWT的用户认证系统
- 添加登录表单组件
- 实现token存储和验证
- 添加路由守卫

Closes #123
```

---

## Type 类型说明

| Type     | 说明                                            | 示例                       |
| -------- | ----------------------------------------------- | -------------------------- |
| feat     | 新功能（feature）                               | feat: 添加用户注册功能     |
| fix      | 修复bug                                         | fix: 修复登录失败的问题    |
| docs     | 文档更新                                        | docs: 更新API文档          |
| style    | 代码格式（不影响代码运行的变动）                | style: 格式化代码          |
| refactor | 重构（既不是新增功能，也不是修复bug的代码变动） | refactor: 重构用户模块     |
| perf     | 性能优化                                        | perf: 优化列表渲染性能     |
| test     | 测试相关                                        | test: 添加用户模块单元测试 |
| chore    | 构建过程或辅助工具的变动                        | chore: 更新依赖版本        |
| build    | 构建系统或外部依赖变更                          | build: 升级vite到5.0       |
| ci       | CI配置文件和脚本的变更                          | ci: 添加GitHub Actions配置 |
| revert   | 回退之前的commit                                | revert: 回退feat(auth)提交 |

---

## Scope 范围（可选）

用于说明 commit 影响的范围，比如：

- **组件名**：`auth`, `user`, `editor`, `button`
- **功能模块**：`api`, `router`, `store`
- **文件类型**：`package`, `config`, `types`

**示例：**

```
feat(auth): 添加登录功能
fix(editor): 修复组件树索引错误
docs(readme): 更新项目文档
```

---

## Subject 主题

简短描述（不超过50个字符），说明本次提交的目的。

**规则：**

- ✅ 使用动词开头：添加、修复、更新、删除、重构等
- ✅ 第一人称现在时："添加"而不是"已添加"或"添加了"
- ✅ 首字母小写（中文无所谓）
- ❌ 句末不加句号

**示例：**

```
✅ feat: 添加用户登录功能
✅ fix: 修复计数器bug
✅ docs: 更新README

❌ feat: 添加了用户登录功能。
❌ fix: Bug修复
❌ Update README
```

---

## Body 正文（可选）

对 subject 的补充说明，可以分多行。

**用途：**

- 详细说明做了什么改动
- 说明为什么要做这个改动
- 解释技术实现细节

**示例：**

```
feat(auth): 添加用户登录功能

实现了基于JWT的用户认证系统：
- 添加登录表单组件（LoginForm.vue）
- 实现token存储到localStorage
- 添加axios请求拦截器自动携带token
- 添加路由守卫，未登录重定向到登录页

使用Pinia进行状态管理，便于在多个组件间共享用户信息。
```

---

## Footer 尾部（可选）

用于关联 Issue 或标注破坏性变更。

**关联 Issue：**

```
Closes #123
Fixes #456
Refs #789
```

**破坏性变更（BREAKING CHANGE）：**

```
BREAKING CHANGE: API接口返回格式调整

之前返回：{ code: 0, data: {} }
现在返回：{ success: true, data: {} }
```

---

## 完整示例

### 示例 1：简单提交

```
feat: 添加用户注册功能
```

### 示例 2：带 scope

```
fix(editor): 修复组件拖拽位置错误
```

### 示例 3：完整提交

```
feat(auth): 添加用户登录功能

实现了基于JWT的用户认证系统：
- 添加登录表单组件（LoginForm.vue）
- 实现token存储到localStorage
- 添加axios请求拦截器自动携带token
- 添加路由守卫，未登录重定向到登录页

使用Pinia进行状态管理，便于在多个组件间共享用户信息。

Closes #123
```

### 示例 4：破坏性变更

```
refactor(api): 重构API响应格式

BREAKING CHANGE: API接口返回格式调整

之前返回：{ code: 0, data: {}, message: '' }
现在返回：{ success: true, data: {}, error: null }

升级指南：
1. 将所有判断 code === 0 改为 success === true
2. 将 message 改为 error
```

---

## 提交最佳实践

### ✅ 好的提交

```
feat: 添加撤销/重做功能
fix: 修复组件树索引越界bug
docs: 更新API文档
style: 格式化代码
refactor: 重构编辑器核心逻辑
test: 添加useContentOperate单元测试
chore: 更新依赖版本
```

### ❌ 不好的提交

```
更新        # 没有type，不明确
fix bug     # 太笼统，不知道修复了什么
修改了一些东西  # 完全不知道改了什么
优化        # 太模糊，应该使用 perf 或 refactor
```

---

## 提交粒度建议

**单一职责原则：**

- ✅ 一次提交只做一件事
- ✅ 功能添加、bug修复分开提交
- ✅ 代码格式化单独提交

**示例：**

```bash
# ✅ 好的提交顺序
git commit -m "feat: 添加用户列表组件"
git commit -m "feat: 添加用户详情页面"
git commit -m "style: 格式化代码"

# ❌ 不好的提交
git commit -m "feat: 添加用户模块（包含列表、详情、格式化）"
```

---

## 工具集成

本项目将在后续阶段集成以下工具：

- **Commitlint**：自动检查提交信息格式
- **Husky**：Git Hooks 自动化
- **Lint-staged**：只检查暂存区文件

集成后，不符合规范的提交将被自动拦截。

---

## 参考资料

- [Conventional Commits 官方规范](https://www.conventionalcommits.org/)
- [Angular 提交规范](https://github.com/angular/angular/blob/main/CONTRIBUTING.md)
- [约定式提交中文版](https://www.conventionalcommits.org/zh-hans/)

---

**文档创建时间：** 2026-01-07
**适用项目：** frontend-engineering-demo
