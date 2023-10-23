### 使用
pnpm i hzlzh-ui

* 如果是使用module形式，请记得在全局main.ts入口引入css文件: import "hzlzh-ui/lib/es/style.css"

### 个人自定义VUE3组件库(个人学习)

* 开发模式的时候, "exports"的导出口使用开发packages路径下的出口
* 发布模式的时候, "exports"的导出口使用打包后lib路径下的出口
* 是ts版本，有声明文件支持，使用vite-plugin-dts声明插件
* 说明文档的vitePress版本需要单独进入docs文件夹启动(npx vitepress init)
* 说明文档的storybook版本，主目录项目的script下(npx storybook init)
* rimraf lib 可以删除文件夹lib
* storybook组件说明文档工具需要项目有prettier才能安装成功
* unplugin-vue-components 自动按需引入组件，不需要全局注册
* 使用pnpm管理packages，在开发调试的时候，example里面使用pnpm link hzlzh-ui时，库主目录下的main或则module可以换成开发库的出口，发布时换成打包之后的库文件夹出口,export中的配置同理
* storybook独自输出meta没用，需要配套一个实例输出
* script标签上name属性是配合storiesbook写说明文档时的模版展示和联动
* 使用vitePress写说明文档和单独输出时不需要添加组件前缀
* 单独引入时时依靠插件unplugin-vue-components/vite判断在页面上使用的前缀从对应的组件库引入
* 全局注册时需要在组统一的出口处统一添加前缀
* 组件可以直接在vitePress中进行配置展示和调用, 根据需要可以在example中写demo,也可直接写在文档中
* peerDependencies依赖一是为了在使用组件时要提示安装它，二是方便在打包是external掉
* md文件中使用具名插槽用#name的形式会报错,改用v-slot:name不会
* vitest是测试工具库，配合vite一起使用在vite配置文件头部中需要添加声明文件,需要添加对应测试命令
* vitest button命令是筛选只包含button的测试文件
* happy-dom是模拟dom,安装后在vite配置文件添加test下environment
* @vitest/coverage-v8是测试覆盖率的, 需要添加对应测试命令
* 测试文件夹名只要带有test名字，不管放在哪里都可以被找到
* 在packages下单独再建一个package.json导出组件引用,方便example和viteDocs下安装引用,这样开发和发包时就不用每次手动去更改全局package.json的exports,pnpm link @hzlzh/ui
* 全局的package.json的exports就统一使用打包后的lib，方便发包
* exports的文件配置路径决定了导出对应文件的路径
* 使用vitepress-theme-demoblock作为文档demo展示插件
* test命令配置只带测试,coverage命令配置除了带测试还带报告输出
* withDefault使用的interface不能声明在单独文件里面，若不使用withDefault则可以,并且可以用namespace
* 事件不管用自定义还是vue3自己的默认带on，当前使用@绑定时省略on，当在props中时带on驼峰写法
