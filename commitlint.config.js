/**
 * Commitlint 配置文件
 * 用于检查 Git 提交信息是否符合 Conventional Commits 规范
 *
 * 官方文档：https://commitlint.js.org/
 */

export default {
  // 继承 Conventional Commits 规范
  extends: ['@commitlint/config-conventional'],

  // 自定义规则
  rules: {
    // type 类型定义，表示 git 提交的类型
    'type-enum': [
      2, // 级别：0-disable, 1-warning, 2-error
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档更新
        'style', // 代码格式（不影响代码运行）
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 测试相关
        'chore', // 构建过程或辅助工具的变动
        'build', // 构建系统或外部依赖变更
        'ci', // CI配置文件和脚本的变更
        'revert', // 回退之前的commit
      ],
    ],
    // subject 大小写不做校验
    'subject-case': [0],
    // subject 不允许为空
    'subject-empty': [2, 'never'],
    // type 不允许为空
    'type-empty': [2, 'never'],
    // scope 可以为空
    'scope-empty': [0],
    // subject 不允许以句号结尾
    'subject-full-stop': [2, 'never', '.'],
  },
};
