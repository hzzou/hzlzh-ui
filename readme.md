## 个人自定义VUE3组件库(个人学习)

* 是ts版本，有声明文件支持，使用vite-plugin-dts声明插件
* 说明文档的vitePress版本需要单独进入docs文件夹启动(npx vitepress init)
* 说明文档的storybook版本，主目录项目的script下(npx storybook init)
* rimraf lib 可以删除文件夹lib
* storybook组件说明文档工具需要项目有prettier才能安装成功
* unplugin-vue-components 自动按需引入组件，不需要全局注册
* 使用pnpm管理packages，在开发的调试的时候，example里面使用pnpm link hzlzh-ui时，库主目录下的main或则module可以换成开发库的出口，发布时换成打包之后的库文件夹出口,export中的配置同理
* storybook独自输出meta没用，需要配套一个实例输出
* script标签上name属性是配合storiesbook写说明文档时的模版展示和联动
* 使用vitePress写说明文档和单独输出时不需要添加组件前缀
* 单独引入时时依靠插件unplugin-vue-components/vite判断在页面上使用的前缀从对应的组件库引入
* 全局注册时需要在组统一的出口处统一添加前缀
* 组件可以直接在vitePress中进行配置展示和调用, 根据需要可以在example中写demo,也可直接写在文档中
