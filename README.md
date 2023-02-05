## vue3+ts 后台管理项目

### 项目搭建

#### 一、代码规范

##### editorconfig

- 为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格，维护.editorconfig 文件并配合 vs 插件生效

![image-20230205193519859](https://s2.loli.net/2023/02/05/LCa6SkRrcm3Ht4v.png)

##### prettier&ignore

- 代码格式化工具

```cmd
# 安装，-D开发式依赖，打包移除
npm install prettier -D

--------------------------------------
# 配置.prettierrc文件
{
  "useTabs": false, #使用tab缩进还是空格缩进，选择false
  "tabWidth": 2, #使用tab缩进还是空格缩进，选择false
  "printWidth": 80, #当行字符的长度，推荐80，也有人喜欢100或者120
  "singleQuote": true,#使用单引号还是双引号，选择true，使用单引号
  "trailingComma": "none", #在多行输入的尾逗号是否添加，设置为 `none`
  "semi": false #语句末尾是否要加分号，默认值true，选择false表示不加
}

--------------------------------------
#  配置.prettierignore文件
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*

-------------------------------------------
# 在package.json中配置prettier
 "prettier": "prettier --write ."
# 调用
 $ npm run prettie
```

#####  eslint检测

- 创建项目时勾选eslint自动适配prettier，`'plugin:prettier/recommended'`覆盖eslintrc.js中extends配置

#####  git Husky和eslint

- 保证组员提交代码之前都将eslint中的问题解决掉了
- husky是一个git hook工具，可以帮助我们触发git提交的各个阶段：pre-commit、commit-msg、pre-push
- 安装和自动配置 `npx husky-init && npm install`

##### git commit规范

- commitizen 编写规范 commit message

1. `npm install commitizen -D` ：安装Commitizen

2. `npx commitizen init cz-conventional-changelog --save-dev --save-exact`： 安装cz-conventional-changelog，并且初始化cz-conventional-changelog

- commitlint来限制提交

1. `npm i @commitlint/config-conventional @commitlint/cli -D` ：安装 @commitlint/config-conventional 和 @commitlint/cli

2. 在根目录创建commitlint.config.js文件，配置commitlint

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

3. `npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"`: 使用husky生成commit-msg文件，验证提交信息

#### 二、集成环境

32-2.55