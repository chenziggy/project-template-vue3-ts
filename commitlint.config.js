module.exports = {
  extends: ["@commitlint/config-conventional"],
  // parserPreset: {
  //   parserOpts: {
  //     headerPattern: /^(\w*)(\(([A-Z]+-\d+)(\|([A-Z]+-\d+))*\))?:(.*)$/,
  //     headerCorrespondence: ['type', 'scope', 'subject']
  //   }
  // },

  // extends: ['@commitlint/config-conventional'],
  // rules: {
  //   'body-leading-blank': [1, 'always'],
  //   'body-max-line-length': [2, 'always', 100],
  //   'footer-leading-blank': [1, 'always'],
  //   'footer-max-line-length': [2, 'always', 100],
  //   'header-max-length': [2, 'always', 100],
  //   'scope-empty': [2, 'never'],
  //   'scope-case': [2, 'always', 'upper-case'],
  //   'subject-case': [
  //     2,
  //     'always',
  //     ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
  //   ],
  //   'subject-empty': [2, 'never'],
  //   'subject-full-stop': [2, 'never', '.'],
  //   'type-case': [2, 'always', 'lower-case'],
  //   'type-empty': [2, 'never'],
  //   'type-enum': [
  //     2,
  //     'always',
  //     [
  //       'feat', // 增加新功能
  //       'fix', // 修复master bug
  //       'hotfix', // 修复prod bug
  //       'test', // 添加测试或者修改现有测试
  //       'refactor', // 代码重构时使用
  //       'style', // 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
  //       'build', // 构造工具的或者外部依赖的改动，例如webpack，npm
  //       'ci', // 与CI（持续集成服务）有关的改动
  //       'chore', // 不修改src或者test的其余修改，例如构建过程或辅助工具的变动
  //       'docs', // 只改动了文档相关的内容
  //       'perf', // 提高性能的改动
  //       'revert' // 执行git revert打印的message
  //     ]
  //   ]
  // }
};
