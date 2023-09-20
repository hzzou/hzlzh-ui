<template>
    <div class="profile">
        <hz-row gutter="10" class="title" justify="center">
            <header>个人简历</header>
        </hz-row>
        <hz-row gutter="30" justify="center">
            <h4>个人标签：前端开发工程师</h4>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="16">
                <hz-row gutter="20">
                    <hz-col span="12">
                        <div>姓名：邹兴鸿</div>
                    </hz-col>
                    <hz-col span="12">
                        <div>出生：93/06/18</div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="20">
                    <hz-col span="12">
                        <div>民族：汉</div>
                    </hz-col>
                    <hz-col span="12">
                        <div>籍贯：四川叙永</div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="20">
                    <hz-col span="12">
                        <div>邮箱：987565275@qq.com</div>
                    </hz-col>
                    <hz-col span="12">
                        <div>
                            github：https://github.com/hzzou
                        </div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="20">
                    <hz-col>
                        <h4 class="cust-head">自我评价:</h4>
                    </hz-col>
                </hz-row>
                <hz-row gutter="10">
                    <hz-col>
                        <div class="list">
                            1、精通div+css布局，熟练掌握flex布局，了解并能使用grid布局,能够独立完成html页面制作；
                        </div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="10">
                    <hz-col>
                        <div class="list">
                            2、熟悉ES6语法，熟悉vite、webpack、grunt、gulp、npm、nginx等技术的使用和配置，熟悉常用的git命令；
                        </div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="10">
                    <hz-col>
                        <div class="list">
                            3、熟练使用Javascript及常见的框架,如Vue、React、Angular、JQuery、Bootstrap、antd、mintUI等；
                        </div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="10">
                    <hz-col>
                        <div class="list">
                            4、熟悉常见的数据可视化框架，如echart、D3、Cesium、openlayer,具有相关的项目经验；
                        </div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="10">
                    <hz-col>
                        <div class="list">
                            5、对Photoshop及页面UI设计熟悉，切图熟练，能将UI设计转化为符合W3C规范的静态页面；
                        </div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="10">
                    <hz-col>
                        <div class="list">
                            6、关注WEB前端相关新技术、新趋势的信息及应用，有很强的兴趣和深入研究能力；
                        </div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="10">
                    <hz-col>
                        <div class="list">
                            7、了解常用浏览器，能利用自己的经验有效地解决浏览器兼容问题；
                        </div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="10">
                    <hz-col>
                        <div class="list">
                            8、熟悉nodeJS开发，对express、koa2框架的开发较为熟悉；
                        </div>
                    </hz-col>
                </hz-row>
            </hz-col>
            <hz-col span="8">
                <img :src="weixin" alt="weixin">
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col>
                <h4 class="cust-head">教育背景:</h4>
            </hz-col>
        </hz-row>
        <hz-row gutter="20" class="edu">
            <hz-col span="6">
                <div>就读时间</div>
            </hz-col>
            <hz-col span="6">
                <div>学校</div>
            </hz-col>
            <hz-col span="6">
                <div>专业</div>
            </hz-col>
            <hz-col span="6">
                <div>学历</div>
            </hz-col>
        </hz-row>
        <hz-row gutter="20" class="edu">
            <hz-col span="6">
                <div>2010/09--2014/06</div>
            </hz-col>
            <hz-col span="6">
                <div>华北科技学院</div>
            </hz-col>
            <hz-col span="6">
                <div>电子信息工程</div>
            </hz-col>
            <hz-col span="6">
                <div>本科/全日制/统招</div>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col>
                <h4 class="cust-head">工作经历:</h4>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="12">工作时间：2021.09--2023.03</hz-col>
            <hz-col span="12">公司名称：成都平安壹账通</hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="3">工作职责:</hz-col>
            <hz-col span="21">
                <hz-row gutter="5">
                    <hz-col>
                        <div>1.负责所在项目组的前端项目的技术预研</div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="5">
                    <hz-col>
                        <div>2.使用Vue3或React进行前端项目的开发</div>
                    </hz-col>
                </hz-row>
                <hz-row>
                    <hz-col>
                        <div>3.根据客户提出的需求，对相关前端项目进行开发和迭代</div>
                    </hz-col>
                </hz-row>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="12">工作时间：2020.08--2021.06</hz-col>
            <hz-col span="12">公司名称：成都招商银行研发中心</hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="3">工作职责:</hz-col>
            <hz-col span="21">
                <hz-row gutter="5">
                    <hz-col>
                        <div>1.负责所在项目组的前端项目的框架搭建</div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="5">
                    <hz-col>
                        <div>2.使用Angular或React进行前端项目的开发</div>
                    </hz-col>
                </hz-row>
                <hz-row>
                    <hz-col>
                        <div>3.根据各个支行提出的需求，对前端项目进行开发和迭代</div>
                    </hz-col>
                </hz-row>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="12">工作时间：2019.06--2020.06</hz-col>
            <hz-col span="12">公司名称：成都智菲科技</hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="3">工作职责:</hz-col>
            <hz-col span="21">
                <hz-row gutter="5">
                    <hz-col>
                        <div>1.负责公司驻所相关项目的前端框架搭建</div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="5">
                    <hz-col>
                        <div>2.负责新技术的研究、技术难点的攻克、新人的指导和管理前端团队</div>
                    </hz-col>
                </hz-row>
                <hz-row>
                    <hz-col>
                        <div>3.根据需求进行日常前端页面的开发和版本发布</div>
                    </hz-col>
                </hz-row>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="12">工作时间：2017.02--2019.04</hz-col>
            <hz-col span="12">公司名称：北京国遥信通</hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="3">工作职责:</hz-col>
            <hz-col span="21">
                <hz-row gutter="5">
                    <hz-col>
                        <div>1.使用Cesium.JS、D3.JS、echarts.JS等前端技术实现前端页面</div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="5">
                    <hz-col>
                        <div>2.负责与项目相关人员共同完成项目的前端模块设计，前端页面开发</div>
                    </hz-col>
                </hz-row>
                <hz-row>
                    <hz-col>
                        <div>3.按照项目计划，在保证质量的前提下按时完成开发任务</div>
                    </hz-col>
                </hz-row>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="12">工作时间：2014.09--2016.12</hz-col>
            <hz-col span="12">公司名称：浙江宏信科技</hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="3">工作职责:</hz-col>
            <hz-col span="21">
                <hz-row gutter="5">
                    <hz-col>
                        <div>1.负责公司项目的前端页面布局及相关JS效果的实现</div>
                    </hz-col>
                </hz-row>
                <hz-row gutter="5">
                    <hz-col>
                        <div>2.使用Javascript和JQuery实现页面上的交互效果，如选项卡、图片滚动、瀑布流等</div>
                    </hz-col>
                </hz-row>
                <hz-row>
                    <hz-col>
                        <div>3.对前端各个页面进行兼容性处理，意识到浏览器兼容的重要性</div>
                    </hz-col>
                </hz-row>
                <hz-row>
                    <hz-col>
                        <div>4.对web语义化、JavaScript面向对象编程有一定的了解</div>
                    </hz-col>
                </hz-row>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col>
                <h4 class="cust-head">项目经历:</h4>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="12">项目时间：2021.09--2023.03</hz-col>
            <hz-col span="12">项目名称：寿险保单登记系统</hz-col>
            <hz-col span="12">所属公司：成都平安壹账通</hz-col>
            <hz-col span="12">使用技术：qiankun、Vue3、React、Typescript、Element-Plus、Vuex</hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="3">项目职责:</hz-col>
            <hz-col span="21">
                <div class="list">
                    该项目主项目使用qiankun微前端框架，子模块项目使用Vue3技术或者React hooks技术，整合相关前端技术，对之前的保单系 统进行更新迭代，软件的主要作用是对表单数据进行展示，进行报文的相关数据展示自动触发和手动发送等功能，不同用户 根据其角色进行相关操作权限控制
                </div>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="12">项目时间：2020.08--2021.06</hz-col>
            <hz-col span="12">项目名称：星海系统</hz-col>
            <hz-col span="12">所属公司：成都招商银行研发中心</hz-col>
            <hz-col span="12">使用技术：Angular、React、Typescript</hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="3">项目职责:</hz-col>
            <hz-col span="21">
                <div class="list">
                    该项目主要是使用Angular技术，整合echarts等第三方图表库，进行自定义开发，使之成为招行各支行所要使用的图表。可以配置全局，局部样式，主题切换，分享给公司内的其他人等。在此项目中，遇到过一个印象深刻的问题，就是主题切换的问题，在同一个图表面板下切换主题没问题，但是切换图表面板的时，上一个图表面板的主题会被带到当前图表，不是当前图表面板的主题，后来的处理方式是在面板之间切换时，进行路由销毁。
                </div>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="12">项目时间：2017.02--2019.04</hz-col>
            <hz-col span="12">项目名称：战舰轨迹监控</hz-col>
            <hz-col span="12">所属公司：北京国遥信通</hz-col>
            <hz-col span="12">使用技术：Vue、Vuex、Vue-router、Axios、Cesium.js</hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="3">项目职责:</hz-col>
            <hz-col span="21">
                <div class="list">
                    该项目主要是使用vue,vuex,vue-router,axios全家桶以及Cesium.js三维地图，使用Websocket接受后端传过来的船只实时轨迹数据进行展示，该项目的难点在于数据的累计问题和实时显示上，Cesium.js它对数据点的累计有个最大限度，且轨迹又要求实 时显示，所以二者都要考虑到
                </div>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="12">项目时间：2016.01--2016.12</hz-col>
            <hz-col span="12">项目名称：基于微信的拼团社交电商网站</hz-col>
            <hz-col span="12">所属公司：浙江宏信科技</hz-col>
            <hz-col span="12">使用技术：H5、Javascript</hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="3">项目职责:</hz-col>
            <hz-col span="21">
                <div class="list">
                    该项目主要是基于微信端的拼团商城。系统分为首页、分类、排行、购物车、用户中心这五个主要模块。我负责前端自适应 各种像素比例手机的网页开发，如:商品展示页开发，商品详情页开发，个人中心开发，购物车页面开发等h5页面的制作。在 该项目中我遇到的难题是使用click在移动端点击事件出现延迟。这给用户体验带来了不好的体验。经过我的寻找和验证，找到使用touch事件代替click事件在移动端的操作
                </div>
            </hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="12">项目时间：2014.09--2015.12</hz-col>
            <hz-col span="12">项目名称：中仓网租赁系统</hz-col>
            <hz-col span="12">所属公司：浙江宏信科技</hz-col>
            <hz-col span="12">使用技术：Javascript、JQuery</hz-col>
        </hz-row>
        <hz-row gutter="20">
            <hz-col span="3">项目职责:</hz-col>
            <hz-col span="21">
                <div class="list">
                    该项目的主要目标是给客户提供仓库租赁服务。在本项目中我主要负责前端页面的实现。在该项目中，我主要遇到的难题是 轮播图不连续和其连续点击出错的问题。不连续的问题我采用分别在轮播图的最前面放一张倒数第二的图片，最后面放一张 轮播图整数第二的图片进行解决。而连续点击导致出错的问题我是先用jQuery方法获取这个元素，并对它的运动属性进行判断，如果是真则返回,假才调用定时器使图片运动。
                </div>
            </hz-col>
        </hz-row>
    </div>
</template>
<script name="profile" setup lang="ts">
    import weixin from "../../assets/common/img/weixin.png";
</script>

<style scoped lang="scss">
    .profile{
        .title{
            font-size: 24px;
            font-weight: bold;
        }
        .list{
            line-height: 1.8em;
        }
        .cust-head{
            font-size: 20px;
        }
        .edu{
            .hz-col{
                text-align: center;
            }
        }
    }
</style>
