# 前端工程化学习笔记

本文档包含详细的学习笔记和实践经验，记录了从代码规范到 CI/CD 的完整工程化实践过程。

---

## 阶段 1 学习笔记

### Prettier 代码格式化

**配置文件：** `.prettierrc.json`

```json
{
  "semi": true, // 使用分号
  "singleQuote": true, // 使用单引号
  "tabWidth": 2, // 缩进 2 空格
  "trailingComma": "es5", // ES5 尾随逗号
  "printWidth": 100, // 每行最大 100 字符
  "arrowParens": "avoid" // 箭头函数单参数省略括号
}
```

**格式化效果：**

- ✅ 双引号统一改为单引号
- ✅ 缩进统一为 2 空格
- ✅ 自动添加分号
- ✅ 代码风格完全一致

**使用命令：**

- `yarn format:check` - 检查哪些文件需要格式化
- `yarn format` - 自动格式化所有文件

---

## 阶段 2 学习笔记

### ESLint 代码规范检查

**配置文件：** `.eslintrc.json`

**核心配置说明：**

```json
{
  "extends": [
    "eslint:recommended", // ESLint 推荐规则
    "plugin:vue/vue3-recommended", // Vue 3 推荐规则
    "plugin:@typescript-eslint/recommended", // TypeScript 推荐规则
    "prettier" // 禁用与 Prettier 冲突的规则
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn", // 警告 any 类型
    "@typescript-eslint/no-unused-vars": "error" // 禁止未使用的变量
  }
}
```

**检测到的问题示例：**

在修复前，ESLint 检测到了 4 个问题：

1. ❌ `unusedVariable` 赋值但未使用 (src/App.vue:23)
2. ❌ `props` 赋值但未使用 (src/components/HelloWorld.vue:18)
3. ❌ `testFunction` 赋值但未使用 (src/components/HelloWorld.vue:30)
4. ⚠️ 使用了 `any` 类型 (src/components/HelloWorld.vue:30)

**修复方法：**

- 删除未使用的变量和函数
- 将 `const props = defineProps<Props>()` 改为 `defineProps<Props>()`
- 删除包含 `any` 类型的测试函数

**使用命令：**

- `yarn lint` - 检查代码规范问题
- `yarn lint:fix` - 自动修复部分问题（未使用的变量需手动删除）

**ESLint vs Prettier 的区别：**

| 工具     | 作用               | 示例                      |
| -------- | ------------------ | ------------------------- |
| Prettier | 代码格式化（风格） | 单/双引号、缩进、换行     |
| ESLint   | 代码质量检查       | 未使用变量、any 类型、bug |

两者配合使用：

1. Prettier 负责统一代码风格
2. ESLint 负责检测代码质量问题
3. `eslint-config-prettier` 确保两者不冲突

---

## 阶段 3 学习笔记

### VS Code 开发环境集成

**配置文件：**

- `.vscode/settings.json` - 编辑器自动化配置
- `.vscode/extensions.json` - 推荐扩展列表

**核心功能：**

1. **保存时自动格式化** (`editor.formatOnSave: true`)
   - 自动运行 Prettier 格式化代码
   - 无需手动执行 `yarn format`

2. **保存时自动修复** (`source.fixAll.eslint`)
   - 自动修复 ESLint 可修复的问题
   - 删除未使用的 import
   - 修复简单的代码问题

3. **实时错误提示**
   - 红色波浪线显示错误
   - 黄色波浪线显示警告
   - 鼠标悬停查看详细信息

**必装扩展：**

- ✅ Prettier - Code formatter (`esbenp.prettier-vscode`)
- ✅ ESLint (`dbaeumer.vscode-eslint`)
- ✅ Vue - Official (`vue.volar`)
- ✅ TypeScript Vue Plugin (`vue.vscode-typescript-vue-plugin`)

**常见问题：**

1. **保存时没有自动格式化**
   - 确认已安装 Prettier 扩展
   - 确认 VS Code 打开的是**项目根目录** (`frontend-engineering-demo`)
   - 不是父目录 (`engineering_practice`)

2. **手动格式化**
   - 右键 → "格式化文档" (Format Document)
   - 快捷键：`Shift+Alt+F` (Windows/Linux) 或 `Shift+Option+F` (Mac)

**开发流程：**

```
编写代码 → Ctrl+S 保存 → ✅ 自动格式化 + 自动修复
```

---

## 🎉 阶段 1-3 学习完成总结

### 完成的三个阶段

| 阶段   | 工具     | 作用           | 命令 / 触发方式      |
| ------ | -------- | -------------- | -------------------- |
| 阶段 0 | Vue+TS   | 基础项目搭建   | `yarn dev`           |
| 阶段 1 | Prettier | 代码格式化     | `yarn format` / 自动 |
| 阶段 2 | ESLint   | 代码规范检查   | `yarn lint` / 自动   |
| 阶段 3 | VS Code  | 开发环境自动化 | Ctrl+S 自动执行      |

### 学习成果

**技术能力：**

- ✅ 掌握 Prettier 代码格式化配置
- ✅ 掌握 ESLint 代码规范检查配置
- ✅ 掌握 VS Code 开发环境配置
- ✅ 理解工程化工具之间的协作关系

**项目质量：**

- ✅ 代码风格 100% 统一
- ✅ TypeScript 严格模式
- ✅ 无未使用变量和函数
- ✅ 无 any 类型警告

**开发效率：**

- ✅ 保存即格式化，无需手动命令
- ✅ 实时错误提示
- ✅ 自动修复常见问题
- ✅ 团队协作无冲突

---

## 📚 下一步学习

根据《前端工程化学习路径.md》，下一阶段的内容是：

### 阶段 4-7：Git 工作流与提交规范

**目标：**

- 配置 Conventional Commits 提交规范
- 使用 Commitlint 检查提交信息
- 配置 Husky Git Hooks
- 使用 Lint-staged 进行增量检查

**将实现：**

- 提交前自动运行 lint 检查
- 提交信息规范化（feat/fix/docs等）
- 阻止不规范的提交
- 提升团队协作质量

---

## 阶段 4-7：Git 工作流与提交规范

### 阶段 4 学习笔记 ✅

#### 初始化 Git 仓库和提交规范

**完成内容：**

- ✅ 初始化 Git 仓库 (`git init`)
- ✅ 创建提交规范文档：[COMMIT_CONVENTION.md](./COMMIT_CONVENTION.md)
- ✅ 进行第一次规范提交

**Conventional Commits 规范：**

基本格式：

```
<type>: <subject>
```

示例：

```bash
git commit -m "feat: 添加用户登录功能"
git commit -m "fix: 修复计数器bug"
git commit -m "docs: 更新README文档"
```

**常用 Type 类型：**

- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建/工具变动

**详细规范请查看：** [COMMIT_CONVENTION.md](./COMMIT_CONVENTION.md)

---

### 阶段 5 学习笔记 ✅

#### 配置 Commitlint 提交检查

**完成内容：**

- ✅ 安装 Commitlint 和配置预设
- ✅ 创建 `commitlint.config.js` 配置文件
- ✅ 测试提交信息格式检查

**安装依赖：**

```bash
yarn add -D @commitlint/cli @commitlint/config-conventional
```

**配置文件：** `commitlint.config.js`

```javascript
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'build',
        'ci',
        'revert',
      ],
    ],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
  },
};
```

**手动测试：**

```bash
# ✅ 规范的提交 - 通过检查
echo "feat: 添加新功能" | npx commitlint

# ❌ 不规范的提交 - 失败
echo "添加新功能" | npx commitlint
✖ subject may not be empty [subject-empty]
✖ type may not be empty [type-empty]

# ❌ 句号结尾 - 失败
echo "feat: add feature." | npx commitlint
✖ subject may not end with full stop [subject-full-stop]
```

**配置规则说明：**

| 规则                | 级别 | 说明                     |
| ------------------- | ---- | ------------------------ |
| `type-enum`         | 2    | type 必须在指定列表中    |
| `type-empty`        | 2    | type 不允许为空          |
| `subject-empty`     | 2    | subject 不允许为空       |
| `subject-full-stop` | 2    | subject 不允许以句号结尾 |
| `subject-case`      | 0    | subject 大小写不做校验   |

**规则级别：**

- `0` - 禁用规则
- `1` - 警告（不阻止提交）
- `2` - 错误（阻止提交）

---

### 阶段 6 学习笔记 ✅

#### 配置 Husky Git Hooks

**完成内容：**

- ✅ 安装 Husky 9.0
- ✅ 创建 `.husky/pre-commit` hook（提交前检查）
- ✅ 创建 `.husky/commit-msg` hook（提交信息检查）
- ✅ 测试 Git Hooks 自动触发

**安装 Husky：**

```bash
yarn add -D husky
```

**初始化 Husky：**

```json
{
  "scripts": {
    "prepare": "husky"
  }
}
```

运行 `yarn install` 会自动执行 `prepare` 脚本，初始化 Husky。

**创建 Hooks：**

1. **pre-commit** - 提交前检查代码

```bash
# .husky/pre-commit
yarn lint && yarn format
```

2. **commit-msg** - 检查提交信息

```bash
# .husky/commit-msg
npx --no -- commitlint --edit $1
```

**自动化流程演示：**

```bash
# 尝试不规范的提交
git commit -m "测试不规范的提交"

# 自动执行：
# 1. ✅ pre-commit: 运行 yarn lint（代码检查）
# 2. ✅ pre-commit: 运行 yarn format（代码格式化）
# 3. ❌ commit-msg: Commitlint 检查失败
#    ✖ subject may not be empty
#    ✖ type may not be empty
# 4. ❌ 提交被阻止！

# 使用规范的提交
git commit -m "feat: 添加新功能"

# 自动执行：
# 1. ✅ pre-commit: 代码检查通过
# 2. ✅ pre-commit: 代码格式化完成
# 3. ✅ commit-msg: 提交信息检查通过
# 4. ✅ 提交成功！
```

**Git Hooks 说明：**

| Hook         | 触发时机       | 作用                     |
| ------------ | -------------- | ------------------------ |
| `pre-commit` | git commit前   | 检查代码质量和格式       |
| `commit-msg` | 编写提交信息后 | 检查提交信息是否符合规范 |

**工作流程：**

```
git add .
    ↓
git commit -m "..."
    ↓
pre-commit hook 触发
    ├─ yarn lint (ESLint 检查)
    └─ yarn format (Prettier 格式化)
    ↓
commit-msg hook 触发
    └─ commitlint (检查提交信息)
    ↓
所有检查通过 → 提交成功 ✅
任一检查失败 → 提交被阻止 ❌
```

---

### 阶段 7 学习笔记 ✅

#### 配置 Lint-staged 增量检查

**完成内容：**

- ✅ 安装 Lint-staged 15.2
- ✅ 配置 package.json 中的 lint-staged 规则
- ✅ 更新 pre-commit hook 使用 lint-staged
- ✅ 测试增量检查效果

**安装 Lint-staged：**

```bash
yarn add -D lint-staged
```

**配置规则：** `package.json`

```json
{
  "lint-staged": {
    "*.{js,ts,vue}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```

**更新 pre-commit hook：**

```bash
# .husky/pre-commit（之前）
yarn lint && yarn format

# .husky/pre-commit（现在）
npx lint-staged
```

**性能对比：**

| 方式              | 检查范围   | 速度  | 说明                  |
| ----------------- | ---------- | ----- | --------------------- |
| `yarn lint`       | 所有文件   | 慢 🐌 | 检查整个项目          |
| `npx lint-staged` | 暂存区文件 | 快 ⚡ | 只检查 git add 的文件 |

**实际效果演示：**

```bash
# 修改一个文件
echo "test" >> src/App.vue
git add src/App.vue
git commit -m "feat: 测试"

# Lint-staged 输出：
[STARTED] Running tasks for staged files...
[STARTED] *.{js,ts,vue} — 1 file      # 只检查 1 个文件！
[STARTED] eslint --fix
[COMPLETED] eslint --fix
[STARTED] prettier --write
[COMPLETED] prettier --write
[COMPLETED] *.{js,ts,vue} — 1 file
[COMPLETED] Running tasks for staged files...

# 如果没有修改代码文件，跳过检查
git add README.md
git commit -m "docs: 更新文档"

[STARTED] *.{js,ts,vue} — 0 files
[SKIPPED] *.{js,ts,vue} — no files   # 跳过！
[STARTED] *.{json,md} — 1 file        # 只检查 md 文件
```

**配置说明：**

- `*.{js,ts,vue}`: 对 JS/TS/Vue 文件执行 ESLint 和 Prettier
- `*.{json,md}`: 对 JSON/Markdown 文件只执行 Prettier
- 数组中的命令按顺序执行
- 只对暂存区（git add）的文件执行

**优势：**

1. ✅ **性能提升：** 只检查修改的文件，速度快
2. ✅ **精准检查：** 不会因为旧代码的问题阻止提交
3. ✅ **渐进式改进：** 逐步提升代码质量，不影响历史代码
4. ✅ **节省时间：** 提交速度大幅提升

---

## 🎉 阶段 4-7 学习完成总结

### 完成的四个阶段

| 阶段   | 工具        | 作用                 | 检查方式 |
| ------ | ----------- | -------------------- | -------- |
| 阶段 4 | Git + 规范  | 提交规范文档         | 手动     |
| 阶段 5 | Commitlint  | 检查提交信息格式     | 手动     |
| 阶段 6 | Husky       | Git Hooks 自动化     | 自动     |
| 阶段 7 | Lint-staged | 增量检查（性能优化） | 自动     |

### 完整的 Git 工作流

```
修改代码
    ↓
git add .
    ↓
git commit -m "feat: 新功能"
    ↓
pre-commit hook 触发
    ├─ lint-staged（只检查暂存区文件）⚡
    │   ├─ ESLint --fix（自动修复）
    │   └─ Prettier --write（自动格式化）
    ↓
commit-msg hook 触发
    └─ Commitlint（检查提交信息）
    ↓
所有检查通过 → 提交成功 ✅
任一检查失败 → 提交被阻止 ❌
```

### 学习成果

**技术能力：**

- ✅ 掌握 Conventional Commits 规范
- ✅ 掌握 Commitlint 配置和使用
- ✅ 掌握 Husky Git Hooks 配置
- ✅ 掌握 Lint-staged 性能优化
- ✅ 理解工具之间的协作关系

**项目质量：**

- ✅ 提交信息 100% 规范
- ✅ 代码质量自动检查
- ✅ 代码格式自动统一
- ✅ 不规范的提交被自动拦截

**开发效率：**

- ✅ 提交前自动检查和修复
- ✅ 增量检查，速度快
- ✅ 团队协作规范统一
- ✅ 减少代码审查负担

### Git 提交历史

```bash
6c8b7af feat: 配置 Lint-staged 增量检查
81c1324 docs: 添加阶段6学习笔记
4d169c5 feat: 配置 Husky Git Hooks
dc2cd0b feat: 配置 Commitlint 提交信息检查
d2228f9 docs: 添加阶段4学习笔记
ddee733 chore: 初始化前端工程化项目
```

所有提交都符合 Conventional Commits 规范！✨

---

## 📚 下一步学习

根据《前端工程化学习路径.md》，下一阶段的内容是：

### 阶段 8：TypeScript 深度应用

**目标：**

- TypeScript 配置优化
- 类型定义完善
- 消除所有 any 类型
- 使用工具类型优化代码

**将实现：**

- 更严格的类型检查
- 完善的类型定义
- 类型安全的代码
- 更好的开发体验

---

## 阶段 8：TypeScript 深度应用

### 阶段 8 学习笔记 ✅

#### TypeScript 配置优化与实践

**完成内容：**

- ✅ 优化 tsconfig.json 配置
- ✅ 创建类型定义文件和工具类型
- ✅ 实现类型安全的工具函数
- ✅ 创建 TypeScript 演示组件

**一、TypeScript 配置优化**

在 `tsconfig.json` 中添加了更严格的类型检查选项：

```json
{
  "compilerOptions": {
    // 严格类型检查（strict 包含以下所有选项）
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,

    // 额外的类型检查
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,

    // 路径映射（简化导入）
    "paths": {
      "@/*": ["./src/*"],
      "@types/*": ["./src/types/*"],
      "@utils/*": ["./src/utils/*"],
      "@components/*": ["./src/components/*"]
    }
  }
}
```

**配置项说明：**

| 配置项                               | 作用                             |
| ------------------------------------ | -------------------------------- |
| `noImplicitAny`                      | 禁止隐式 any 类型                |
| `strictNullChecks`                   | 严格的 null 和 undefined 检查    |
| `noImplicitReturns`                  | 函数必须有明确的返回值           |
| `noUncheckedIndexedAccess`           | 检查索引访问的类型安全           |
| `noPropertyAccessFromIndexSignature` | 禁止通过索引签名访问不存在的属性 |

**二、工具类型详解**

在 `src/types/index.ts` 中定义了常用的工具类型：

**1. Partial - 所有属性变为可选**

```typescript
export type PartialUser = Partial<User>;
// 用途：更新操作时，不需要传递所有字段
```

**2. Required - 所有属性变为必需**

```typescript
export type RequiredUser = Required<User>;
// 用途：确保所有字段都必须提供
```

**3. Pick - 选取部分属性**

```typescript
export type UserBasicInfo = Pick<User, 'id' | 'name' | 'email'>;
// 用途：创建只包含特定字段的类型
```

**4. Omit - 排除部分属性**

```typescript
export type UserWithoutTimestamp = Omit<User, 'createdAt' | 'updatedAt'>;
// 用途：创建排除某些字段的类型
```

**5. Record - 创建键值对类型**

```typescript
export type UserRolePermissions = Record<User['role'], string[]>;
// 用途：定义对象的键和值类型
```

**6. 组合使用**

```typescript
// 创建表单类型：排除服务器生成的字段，所有字段可选
export type UserFormData = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;
```

**三、类型安全的工具函数**

在 `src/utils/typeHelpers.ts` 中实现了常用的类型安全函数：

**1. 泛型函数**

```typescript
// 自动推导类型的数组函数
export function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}
```

**2. 类型守卫（Type Guards）**

```typescript
// 运行时类型检查
export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function isNotNil<T>(value: T | null | undefined): value is T {
  return !isNil(value);
}
```

**3. 类型安全的对象操作**

```typescript
// 从对象中选取指定的键
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}
```

**4. 防抖函数（带类型）**

```typescript
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

**四、实践演示**

创建了 `src/components/TypeDemo.vue` 组件，演示：

- ✅ Pick 类型的使用（提取用户基本信息）
- ✅ 防抖函数的类型安全实现
- ✅ 数组工具函数（去重、获取首尾元素）
- ✅ 类型守卫的运行时检查
- ✅ API 响应的类型定义

**五、路径别名使用**

配置了路径别名后，可以使用简洁的导入方式：

```typescript
// 之前
import type { User } from '../../types/index';
import { debounce } from '../../utils/typeHelpers';

// 现在
import type { User } from '@types/index';
import { debounce } from '@utils/typeHelpers';
```

**六、关键收获**

| 知识点       | 说明                             | 实际应用                 |
| ------------ | -------------------------------- | ------------------------ |
| 工具类型     | Partial, Pick, Omit, Record 等   | 创建表单类型、API 响应   |
| 泛型         | 类型参数自动推导                 | 通用工具函数             |
| 类型守卫     | 运行时类型检查                   | 防止 null/undefined 错误 |
| 严格模式     | 更严格的类型检查                 | 提前发现潜在问题         |
| 路径别名     | 简化导入路径                     | 提升代码可读性           |
| 类型安全函数 | 参数和返回值都有明确类型         | 防止类型错误             |
| 高级类型     | DeepReadonly, DeepPartial, Maybe | 复杂场景的类型定义       |

---

## 🎉 阶段 8 学习完成总结

### 完成的阶段

| 阶段   | 内容                | 成果                             |
| ------ | ------------------- | -------------------------------- |
| 阶段 8 | TypeScript 深度应用 | 优化配置、工具类型、类型安全函数 |

### 项目结构变化

```
frontend-engineering-demo/
├── src/
│   ├── types/
│   │   └── index.ts          # 类型定义文件（新增）
│   ├── utils/
│   │   └── typeHelpers.ts    # 工具函数（新增）
│   ├── components/
│   │   ├── HelloWorld.vue
│   │   └── TypeDemo.vue      # TypeScript 演示组件（新增）
│   ├── main.ts
│   └── App.vue               # 添加 Tab 切换功能
├── tsconfig.json             # 优化配置
└── ...
```

### 学习成果

**技术能力：**

- ✅ 掌握 TypeScript 严格模式配置
- ✅ 掌握常用工具类型的使用
- ✅ 掌握泛型和类型守卫
- ✅ 掌握类型安全的函数编写
- ✅ 掌握路径别名配置

**代码质量：**

- ✅ 类型定义完善，无 any 类型
- ✅ 严格的 null 检查
- ✅ 类型安全的工具函数
- ✅ 可复用的类型定义

**开发体验：**

- ✅ 智能的类型提示
- ✅ 编译时错误检查
- ✅ 更好的代码可维护性
- ✅ 简洁的导入路径

### 代码质量检测体系

**七、TypeScript 代码质量检测**

为了保证代码质量，项目配置了完整的三层检测体系：

**检测命令：**

```bash
# 1. TypeScript 类型检查
yarn type-check

# 2. ESLint 代码规范检查
yarn lint            # 只检查
yarn lint:fix        # 检查并修复

# 3. Prettier 代码格式检查
yarn format:check    # 只检查
yarn format          # 检查并格式化

# 4. 一键完整检查（推荐）
yarn check-all       # 依次执行 type-check + lint + format:check
```

**三层防护机制：**

| 层级           | 触发方式     | 检测内容                            |
| -------------- | ------------ | ----------------------------------- |
| 编辑器层(可选) | 保存时自动   | VS Code 实时错误提示和自动修复      |
| 命令行层       | 手动执行命令 | `yarn check-all` 全面检查           |
| Git Hook 层    | 提交时自动   | Pre-commit 强制检查，不通过阻止提交 |

**Git 提交前自动检查流程：**

```
git commit
    ↓
1. TypeScript 类型检查
   └─ 检查所有 .ts/.vue 文件
    ↓
2. 运行单元测试
   └─ 执行所有测试用例（不生成覆盖率报告，提升速度）
    ↓
3. Lint-staged
   ├─ ESLint 检查暂存区文件
   └─ Prettier 格式化暂存区文件
    ↓
4. Commitlint
   └─ 验证提交信息格式
    ↓
✅ 所有检查通过 → 提交成功
❌ 任一检查失败 → 提交被阻止
```

**检测内容对比：**

| 工具       | 检测内容             | 示例                            |
| ---------- | -------------------- | ------------------------------- |
| TypeScript | 类型错误、类型不匹配 | 类型不匹配、undefined/null 访问 |
| ESLint     | 代码质量问题         | 未使用变量、潜在 bug、代码规范  |
| Prettier   | 代码格式             | 缩进、引号、分号、换行          |

**日常使用：**

```bash
# 开发中
yarn dev                # 启动开发服务器

# 提交前（可选，因为会自动检查）
yarn check-all          # 手动运行完整检查

# 提交代码
git add .
git commit -m "feat: 添加新功能"  # 自动触发检查
```

---

## 阶段 9：单元测试基础

### 阶段 9 学习笔记 ✅

#### 单元测试配置与实践

**完成内容：**

- ✅ 配置 Vitest 测试框架
- ✅ 为工具函数编写单元测试
- ✅ 测试覆盖率达到 97.82%
- ✅ 添加测试命令到 package.json

**一、Vitest 配置**

安装依赖：

```bash
yarn add -D vitest @vitest/ui @vitest/coverage-v8 happy-dom
```

**依赖说明：**

- `vitest` - 测试框架核心
- `@vitest/ui` - 测试 UI 界面
- `@vitest/coverage-v8` - 测试覆盖率工具
- `happy-dom` - 轻量级 DOM 环境（用于测试组件）

**配置文件：** `vitest.config.ts`

```typescript
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true, // 使用全局 API（describe, it, expect）
    environment: 'happy-dom', // 测试环境
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 60,
        functions: 60,
        branches: 60,
        statements: 60,
      },
    },
  },
});
```

**二、测试命令**

在 `package.json` 中添加的测试命令：

```json
{
  "scripts": {
    "test": "vitest", // 运行测试（监听模式）
    "test:ui": "vitest --ui", // 启动测试 UI
    "test:coverage": "vitest --coverage" // 测试覆盖率
  }
}
```

**三、编写测试**

为 `src/utils/typeHelpers.ts` 编写了完整的单元测试：

**测试文件：** `src/utils/__tests__/typeHelpers.test.ts`

**测试分类：**

1. **泛型函数测试**

```typescript
describe('first', () => {
  it('应该返回数组的第一个元素', () => {
    expect(first([1, 2, 3])).toBe(1);
  });

  it('空数组应该返回 undefined', () => {
    expect(first([])).toBeUndefined();
  });
});
```

2. **类型守卫测试**

```typescript
describe('isNil', () => {
  it('null 和 undefined 应该返回 true', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });
});
```

3. **数组操作测试**

```typescript
describe('compact', () => {
  it('应该过滤掉 null 和 undefined', () => {
    const arr = [1, null, 2, undefined, 3];
    expect(compact(arr)).toEqual([1, 2, 3]);
  });
});
```

4. **对象操作测试**

```typescript
describe('pick', () => {
  it('应该选取指定的键', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });
});
```

5. **业务函数测试**

```typescript
describe('getUserDisplayName', () => {
  it('应该返回用户名', () => {
    expect(getUserDisplayName(mockUser)).toBe('张三');
  });

  it('用户为 null 时应该返回"未知用户"', () => {
    expect(getUserDisplayName(null)).toBe('未知用户');
  });
});
```

**四、测试覆盖率**

运行 `yarn test:coverage` 后的结果：

```
----------------|---------|----------|---------|---------|
File            | % Stmts | % Branch | % Funcs | % Lines |
----------------|---------|----------|---------|---------|
typeHelpers.ts  |   97.82 |      100 |      96 |   97.72 |
----------------|---------|----------|---------|---------|
```

**覆盖率说明：**

- **Statements（语句）**: 97.82% - 几乎所有语句都被测试覆盖
- **Branch（分支）**: 100% - 所有条件分支都被测试
- **Functions（函数）**: 96% - 96% 的函数被测试
- **Lines（行）**: 97.72% - 97.72% 的代码行被执行

**远超 60% 的目标！** ✨

**五、测试最佳实践**

1. **测试命名规范**
   - 使用 `describe` 组织测试套件
   - 使用 `it` 描述具体测试场景
   - 测试名称清晰描述预期行为

2. **测试组织**
   - 按功能模块分组
   - 相关测试放在同一个 `describe` 块
   - 使用 `beforeEach` 准备测试数据

3. **断言方法**
   - `toBe()` - 严格相等（Object.is）
   - `toEqual()` - 深度相等（对象/数组）
   - `toBeUndefined()` - 是否为 undefined
   - `toHaveLength()` - 数组/字符串长度

4. **测试覆盖**
   - 正常情况
   - 边界情况（空数组、null、undefined）
   - 异常情况

**六、日常使用**

```bash
# 运行测试（监听模式）
yarn test

# 查看测试 UI 界面
yarn test:ui

# 生成覆盖率报告
yarn test:coverage
```

**七、测试命令详解**

| 命令                 | 作用                  | 适用场景               |
| -------------------- | --------------------- | ---------------------- |
| `yarn test`          | 运行所有测试          | 日常开发、Git 提交前   |
| `yarn test:ui`       | 启动测试 UI 界面      | 调试测试、可视化查看   |
| `yarn test:coverage` | 运行测试 + 生成覆盖率 | 检查覆盖率、发布前检查 |

**`yarn test:coverage` 详细说明：**

此命令会执行以下操作：

1. **运行所有单元测试**
   - 执行所有测试用例
   - 显示通过/失败的测试数量
   - 输出测试耗时

2. **生成终端覆盖率报告**

   ```
   ----------------|---------|----------|---------|---------|
   File            | % Stmts | % Branch | % Funcs | % Lines |
   ----------------|---------|----------|---------|---------|
   typeHelpers.ts  |   97.82 |      100 |      96 |   97.72 |
   ----------------|---------|----------|---------|---------|
   ```

   **指标说明：**
   - **% Stmts（语句覆盖率）**: 有多少代码语句被执行
   - **% Branch（分支覆盖率）**: 有多少条件分支被测试（if/else 等）
   - **% Funcs（函数覆盖率）**: 有多少函数被调用
   - **% Lines（行覆盖率）**: 有多少代码行被执行

3. **生成 HTML 详细报告**

   报告文件位置：`coverage/index.html`

   **查看方式：**

   ```bash
   # 在浏览器中打开覆盖率报告
   open coverage/index.html
   ```

   **HTML 报告功能：**
   - 🟢 **绿色**：被测试覆盖的代码
   - 🔴 **红色**：未被测试覆盖的代码
   - 🟡 **黄色**：部分覆盖的分支
   - 📊 **可点击**：可查看每个文件的详细覆盖情况
   - 📈 **统计数据**：函数级别的覆盖率统计

4. **覆盖率文件输出**

   生成的文件（已在 `.gitignore` 中忽略）：

   ```
   coverage/
   ├── index.html              # 主报告页面
   ├── coverage-final.json     # JSON 格式报告
   ├── typeHelpers.ts.html     # 各文件详细报告
   └── ...                     # 其他辅助文件
   ```

**使用建议：**

- ✅ **日常开发**：使用 `yarn test`（快速，无覆盖率）
- ✅ **检查覆盖率**：使用 `yarn test:coverage`（查看哪些代码未测试）
- ✅ **调试测试**：使用 `yarn test:ui`（可视化界面，便于调试）
- ✅ **Git 提交前**：自动运行 `yarn test`（pre-commit hook）

---

## 🎉 阶段 9 学习完成总结

### 完成的阶段

| 阶段   | 内容         | 成果                                  |
| ------ | ------------ | ------------------------------------- |
| 阶段 9 | 单元测试基础 | Vitest 配置、37 个测试、97.82% 覆盖率 |

### 项目结构变化

```
frontend-engineering-demo/
├── src/
│   └── utils/
│       ├── typeHelpers.ts
│       └── __tests__/
│           └── typeHelpers.test.ts    # 测试文件（新增）
├── vitest.config.ts                   # Vitest 配置（新增）
└── package.json                        # 添加测试命令
```

### 学习成果

**技术能力：**

- ✅ 掌握 Vitest 测试框架配置
- ✅ 掌握单元测试编写方法
- ✅ 掌握测试覆盖率分析
- ✅ 理解测试最佳实践

**项目质量：**

- ✅ 37 个测试用例全部通过
- ✅ 测试覆盖率 97.82%
- ✅ 函数覆盖率 96%
- ✅ 分支覆盖率 100%

**测试能力：**

- ✅ 泛型函数测试
- ✅ 类型守卫测试
- ✅ 数组操作测试
- ✅ 对象操作测试
- ✅ 业务函数测试

---

## 📚 下一步学习

根据《前端工程化学习路径.md》，下一阶段的内容是：

### 阶段 10：组件测试

**目标：**

- 掌握 Vue Test Utils
- 编写组件测试
- 测试组件交互
- Mock 依赖处理

**将实现：**

- Vue 组件测试配置
- 简单组件测试
- 复杂组件测试
- 组件交互测试

---

## 阶段 10：组件测试

### 阶段 10 学习笔记 ✅

#### Vue 组件测试配置与实践

**完成内容：**

- ✅ 安装 Vue Test Utils 2.4.6
- ✅ 为 HelloWorld 组件编写 10 个测试
- ✅ 为 TypeDemo 组件编写测试示例
- ✅ 整体测试覆盖率达到 75.55%

**一、安装依赖**

```bash
yarn add -D @vue/test-utils
```

**二、组件测试示例**

**测试文件：** `src/components/__tests__/HelloWorld.test.ts`

```typescript
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld 组件', () => {
  it('应该正确渲染组件', () => {
    const wrapper = mount(HelloWorld, {
      props: { count: 0 },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.hello').exists()).toBe(true);
  });

  it('点击按钮应该触发 increment 事件', async () => {
    const wrapper = mount(HelloWorld, { props: { count: 0 } });

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('increment')).toBeTruthy();
    expect(wrapper.emitted('increment')).toHaveLength(1);
  });
});
```

**三、组件测试覆盖率**

运行 `yarn test:coverage` 后的结果：

```
----------------|---------|----------|---------|---------|
File            | % Stmts | % Branch | % Funcs | % Lines |
----------------|---------|----------|---------|---------|
All files       |   75.55 |       80 |   78.12 |   74.41 |
 HelloWorld.vue |     100 |      100 |     100 |     100 |
 TypeDemo.vue   |   46.15 |    68.75 |       0 |   44.73 |
 typeHelpers.ts |   97.82 |      100 |      96 |   97.72 |
----------------|---------|----------|---------|---------|
```

**四、测试方法**

| 方法                 | 作用           | 示例                             |
| -------------------- | -------------- | -------------------------------- |
| `mount()`            | 挂载组件       | `mount(HelloWorld, { ... })`     |
| `wrapper.find()`     | 查找元素       | `wrapper.find('button')`         |
| `wrapper.trigger()`  | 触发事件       | `button.trigger('click')`        |
| `wrapper.emitted()`  | 获取触发的事件 | `wrapper.emitted('increment')`   |
| `wrapper.setProps()` | 更新 props     | `wrapper.setProps({ count: 3 })` |

**五、集成测试示例**

集成测试用于测试多个组件之间的协作。

**测试文件：** `src/__tests__/App.integration.test.ts`

```typescript
import { mount } from '@vue/test-utils';
import App from '../App.vue';

describe('App 集成测试', () => {
  it('应该实现计数器功能集成', async () => {
    const wrapper = mount(App);

    // 初始计数为 0
    expect(wrapper.text()).toContain('当前计数： 0');

    // 点击 HelloWorld 组件中的按钮
    await wrapper.find('.hello button').trigger('click');

    // 验证 App 组件中的计数更新
    expect(wrapper.text()).toContain('当前计数： 1');
  });
});
```

**集成测试要点：**

- 测试父子组件之间的数据传递
- 测试事件冒泡和处理
- 测试多个组件协同工作的场景

**六、关键收获**

| 知识点     | 说明                      | 实际应用       |
| ---------- | ------------------------- | -------------- |
| 组件挂载   | 使用 mount 创建组件实例   | 测试组件渲染   |
| 元素查询   | 使用 find 查找 DOM 元素   | 验证元素存在   |
| 事件触发   | 使用 trigger 模拟用户操作 | 测试按钮点击   |
| 事件验证   | 使用 emitted 验证事件     | 测试组件通信   |
| Props 测试 | 测试 props 传递和更新     | 验证组件响应式 |

---

## 🎉 阶段 10 学习完成总结

### 完成的阶段

| 阶段    | 内容     | 成果                                              |
| ------- | -------- | ------------------------------------------------- |
| 阶段 10 | 组件测试 | Vue Test Utils 配置、11 个组件测试、75.55% 覆盖率 |

### 测试结果

**测试统计：**

- ✅ 测试文件：4 个
- ✅ 测试用例：50 个（全部通过）
  - typeHelpers.test.ts: 37 个测试
  - HelloWorld.test.ts: 10 个测试
  - TypeDemo.test.ts: 1 个测试
  - App.integration.test.ts: 2 个集成测试
- ✅ 整体覆盖率：75.55%

### 学习成果

**技术能力：**

- ✅ 掌握 Vue Test Utils 基本用法
- ✅ 掌握组件挂载和查询
- ✅ 掌握事件触发和验证
- ✅ 掌握 Props 测试

**项目质量：**

- ✅ 组件测试覆盖完整
- ✅ 工具函数覆盖率 97.82%
- ✅ HelloWorld 组件覆盖率 100%
- ✅ 整体覆盖率超过 60% 目标

---

## 阶段 11：Vite 构建优化

### 阶段 11 学习笔记 ✅

#### Vite 构建优化配置与实践

**完成内容：**

- ✅ 优化 Vite 构建配置
- ✅ 配置代码分割和压缩
- ✅ 安装构建分析工具
- ✅ 配置环境变量管理

**一、构建优化配置**

在 `vite.config.ts` 中添加构建优化选项：

```typescript
export default defineConfig({
  build: {
    // 代码分割配置
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue'],
        },
      },
    },
    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 资源内联阈值
    assetsInlineLimit: 4096,
    // CSS 代码分割
    cssCodeSplit: true,
    // 源码映射
    sourcemap: false,
    // chunk 大小警告限制
    chunkSizeWarningLimit: 500,
  },
  // 预构建优化
  optimizeDeps: {
    include: ['vue'],
  },
});
```

**二、构建分析工具**

安装并配置 rollup-plugin-visualizer：

```bash
yarn add -D rollup-plugin-visualizer
```

```typescript
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html',
    }),
  ],
});
```

**三、环境变量管理**

创建环境变量文件：

`.env.development`:

```
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_TITLE=Frontend Engineering Demo - Dev
```

`.env.production`:

```
VITE_API_BASE_URL=https://api.production.com
VITE_APP_TITLE=Frontend Engineering Demo
```

`vite-env.d.ts`:

```typescript
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_APP_TITLE: string;
}
```

**使用环境变量：**

在 `App.vue` 中使用：

```typescript
const title = import.meta.env.VITE_APP_TITLE || '前端工程化 Demo';
```

**验证环境变量：**

- 开发环境：`yarn dev` - 使用 `.env.development`，标题显示 "Frontend Engineering Demo - Dev"
- 生产环境：`yarn build && yarn preview` - 使用 `.env.production`，标题显示 "Frontend Engineering Demo"

**四、构建结果**

运行 `yarn build` 后的结果：

```
dist/index.html                      0.55 kB │ gzip:  0.34 kB
dist/assets/index-7UbDuFGL.css       2.17 kB │ gzip:  0.65 kB
dist/assets/index-DVD8khH8.js        4.39 kB │ gzip:  2.24 kB
dist/assets/vue-vendor-ChcMrUjD.js  58.48 kB │ gzip: 22.75 kB
✓ built in 1.11s
```

**关键优化效果：**

- ✅ Vue 单独打包为 vendor chunk（58.48 kB）
- ✅ 业务代码独立打包（4.39 kB）
- ✅ 移除了 console 和 debugger
- ✅ Gzip 压缩效果显著（22.75 kB）

---

## 🎉 阶段 11 学习完成总结

### 完成的阶段

| 阶段    | 内容          | 成果                         |
| ------- | ------------- | ---------------------------- |
| 阶段 11 | Vite 构建优化 | 代码分割、压缩、环境变量配置 |

### 学习成果

**技术能力：**

- ✅ 掌握 Vite 构建优化配置
- ✅ 掌握代码分割策略
- ✅ 掌握构建分析工具使用
- ✅ 掌握环境变量管理

**构建优化：**

- ✅ 代码分割生效（vendor 独立打包）
- ✅ 压缩配置生效（移除 console）
- ✅ 构建速度快（1.11s）
- ✅ 产物体积优化（gzip 后 25.98 kB）

---

## 阶段 12：CI/CD 完善

### 阶段 12 学习笔记 ✅

#### GitHub Actions 持续集成配置

**完成内容：**

- ✅ 配置 GitHub Actions 工作流
- ✅ 集成代码检查（TypeScript、ESLint、Prettier）
- ✅ 集成单元测试和覆盖率报告
- ✅ 配置自动化构建流程

**一、GitHub Actions 配置**

创建 `.github/workflows/ci.yml` 文件：

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    name: 代码检查
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'yarn'
      - run: yarn install --frozen-lockfile
      - run: yarn type-check
      - run: yarn lint
      - run: yarn format:check

  test:
    name: 单元测试
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: yarn install --frozen-lockfile
      - run: yarn test:coverage

  build:
    name: 构建项目
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: yarn install --frozen-lockfile
      - run: yarn build
```

**二、CI 工作流说明**

**工作流触发条件：**

- 推送到 main 分支
- 创建 Pull Request 到 main 分支

**执行的任务：**

1. **lint（代码检查）**
   - TypeScript 类型检查
   - ESLint 代码规范检查
   - Prettier 格式检查

2. **test（单元测试）**
   - 运行所有测试用例
   - 生成测试覆盖率报告
   - 上传覆盖率到 Codecov

3. **build（构建项目）**
   - 依赖 lint 和 test 成功
   - 构建生产版本
   - 上传构建产物

4. **deploy（部署到 GitHub Pages）**
   - 仅在 main 分支触发
   - 下载构建产物
   - 自动部署到 GitHub Pages
   - 生成访问地址

**三、GitHub Pages 部署**

**在线访问地址：**

```
https://introvert-y.github.io/frontend-engineering-demo/
```

**部署配置要点：**

1. 配置 Vite base 路径：

```typescript
base: process.env.NODE_ENV === 'production' ? '/frontend-engineering-demo/' : '/';
```

2. GitHub Pages 设置：
   - 仓库 Settings → Pages
   - Source: GitHub Actions
   - 每次推送到 main 分支自动部署

**五、本地验证 CI 流程**

在提交代码前，可以本地验证 CI 流程：

```bash
# 1. 代码检查
yarn type-check
yarn lint
yarn format:check

# 2. 运行测试
yarn test:coverage

# 3. 构建项目
yarn build
```

**六、关键特性**

| 特性       | 说明                            |
| ---------- | ------------------------------- |
| 自动化检查 | 每次提交自动运行质量检查        |
| 并行执行   | lint 和 test 并行执行，提升速度 |
| 依赖管理   | 使用 yarn cache 加速安装        |
| 构建产物   | 自动上传构建结果，保留 7 天     |
| 覆盖率报告 | 自动生成并上传到 Codecov        |
| 自动部署   | 推送到 main 自动部署到 Pages    |

---

## 🎉 阶段 12 学习完成总结

### 完成的阶段

| 阶段    | 内容       | 成果                          |
| ------- | ---------- | ----------------------------- |
| 阶段 12 | CI/CD 完善 | GitHub Actions 自动化流程配置 |

### 学习成果

**技术能力：**

- ✅ 掌握 GitHub Actions 配置
- ✅ 掌握 CI/CD 工作流设计
- ✅ 掌握自动化测试和构建
- ✅ 理解质量门禁机制

**项目质量：**

- ✅ 自动化代码质量检查
- ✅ 自动化测试执行
- ✅ 自动化构建流程
- ✅ 自动化部署到 GitHub Pages
- ✅ 持续集成保障代码质量

**在线访问：**

- 🌐 **GitHub Pages**: https://introvert-y.github.io/frontend-engineering-demo/

---

**项目创建时间：** 2026-01-07
**当前进度：** 阶段 12 完成 ✅
