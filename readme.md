# 工程自动化示例

通过工具自动进行代码检查和格式化，提高开发质量和效率。

## 涉及的一些工具和文件

- **package.json**：npm 的配置文件，有些配置（命令）要写在这（husky、script 等）
- **ESLint**：代码**静态检查**工具（通过扩展 parser 可以检查 TS、React 等）
- **Prettier**：代码**格式化**工具
- **tsconfig.json**：TS 的配置文件，这里主要关注 Compiler Options，可以用来做 TS 的检查
- **Husky**：将命令挂载到 Git 的生命周期上
- **Git**：Git hooks（生命周期的钩子）以及 gitignore
- **Glob**：一个路径搜索的语法模式
- **Alloy**：腾讯的前端技术团队，这里主要关注他们出的 ESlint 配置集

## 配置选项文档

- eslintrc
  - [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)
- prettierrc
  - [Options](https://prettier.io/docs/en/options.html)
- tsconfig
  - [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

## 编写配置文件

主要按照 Alloy 的文档进行配置即可，然后用 husky 来做自动化。

- [Alloy Team ESLint](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md)
- [Husky](https://github.com/typicode/husky)
- ESLint
  - [file patterns](https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns)
  - [eslintignore](https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)
- Prettier
  - [file patterns](https://prettier.io/docs/en/cli.html#file-patterns)
  - [prettierignore](https://prettier.io/docs/en/ignore.html)
- Glob
  - [Pattern syntax](https://github.com/mrmlnc/fast-glob#pattern-syntax)
- Git
  - [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
  - [gitignore](https://git-scm.com/docs/gitignore#_pattern_format)

## VS Code 扩展

通过扩展，这样不用手动跑 script 的命令，直接在编辑器里就有**即时**的检查和提示了

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
