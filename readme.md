# 自动化代码检查和格式化 的 Demo

对项目内的代码，进行（自动）代码检查和格式化。

借助工具，减少重复性的工作，提高开发质量和效率！

如果代码写得不规范（ESLint 报错），则只有修正后才能提交代码（通过 huksy + lint-staged 实现）。

试试看（clone/fork 本 repo），修改 `src/` 中的文件（像注释的部分那样将代码写得不规范），并尝试直接提交，看看会发生什么。

---

详情可以看一下命令，以及这些命令所涉及的一些配置代码。

- 全局检查：`npm run lint`
- 只检查变更的文件（支持自动化）：`npx lint-staged`

## 涉及的一些关键工具和文件

- **package.json**：npm 的配置文件，有些配置（命令）要写在这（husky、script 等）
- **ESLint**：代码**静态检查**工具（通过扩展 parser 可以检查 TS、React 等）
- **Prettier**：代码**格式化**工具
- **tsconfig.json**：TS 的配置文件，这里主要关注 Compiler Options，可以用来做 TS 的检查
- **Husky**：一个工具，将命令挂载到 Git 的生命周期上
- **Git**：这里主要关注 Git hooks（生命周期的钩子）以及 gitignore
- **Glob**：一个路径搜索的语法模式（以及有衍生工具）
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

## VS Code

通过扩展，这样不用手动跑 script 的命令，直接在编辑器里就有**即时**的检查和提示了

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

以及根据 [Alloy 文档](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md#%E5%9C%A8-vscode-%E4%B8%AD%E4%BD%BF%E7%94%A8) 中提及的，识别额外的文件类型。

```json
{
  "eslint.validate": [
    //
    "javascript",
    "javascriptreact",
    "vue",
    "typescript",
    "typescriptreact"
  ]
}
```
