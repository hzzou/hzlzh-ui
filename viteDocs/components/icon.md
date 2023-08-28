
# **Icon 图标**
::: tip
一些常用的字体图标
:::

##
<hz-icon name="help" color="#f00" size="20"></hz-icon>

```vue
<template>
    <hz-icon name="help" color="#f00" size="20"></hz-icon>
</template>
```
<style>
@import url("../common/style.scss");

table:nth-of-type(2) thead th{
    width: 20% !important;
}

.icon_lists {
    width: 100% !important;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
}

.icon_lists li {
    width: 20%;
    height: 100px;
    text-align: center;
    list-style: none !important;
    cursor: default;
    border: 1px solid #dedede;
    margin: 0 !important;
}

.icon_lists .icon {
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: 42px;
    color: #333 !important;
}

.icon_lists .icon:hover {
  font-size: 100px;
}

.icon_lists li .name,
.icon_lists li .code-name {
  color: #666;
}
</style>
## **Icon API**
### **Icon Attributes**

| 属性名   | 说明  | 类型            | 默认值    |
|-------|-----|---------------|--------|
| name  | 名字  | String        | ""     |
| color | 颜色  | String        | "#999" |
| size  | 大小  | String,Number | 16     |

### **name的可选值**
* 不带icon- 前缀

<div class="content font-class">
    <ul class="icon_lists dib-box">
  <li class="dib">
    <hz-icon class="icon iconfont icon-unlock"></hz-icon>
    <div class="name">
      unlock
    </div>
    <div class="code-name">.icon-unlock
    </div>
  </li>
  <li class="dib">
    <hz-icon class="icon iconfont icon-user"></hz-icon>
    <div class="name">
      user
    </div>
    <div class="code-name">.icon-user
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-upload"></hz-icon>
    <div class="name">
      upload
    </div>
    <div class="code-name">.icon-upload
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-work"></hz-icon>
    <div class="name">
      work
    </div>
    <div class="code-name">.icon-work
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-training"></hz-icon>
    <div class="name">
      training
    </div>
    <div class="code-name">.icon-training
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-warning"></hz-icon>
    <div class="name">
      warning
    </div>
    <div class="code-name">.icon-warning
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-zoom-in"></hz-icon>
    <div class="name">
      zoom-in
    </div>
    <div class="code-name">.icon-zoom-in
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-zoom-out"></hz-icon>
    <div class="name">
      zoom-out
    </div>
    <div class="code-name">.icon-zoom-out
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-add-bold"></hz-icon>
    <div class="name">
      add-bold
    </div>
    <div class="code-name">.icon-add-bold
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-left-bold"></hz-icon>
    <div class="name">
      arrow-left-bold
    </div>
    <div class="code-name">.icon-arrow-left-bold
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-up-bold"></hz-icon>
    <div class="name">
      arrow-up-bold
    </div>
    <div class="code-name">.icon-arrow-up-bold
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-close-bold"></hz-icon>
    <div class="name">
      close-bold
    </div>
    <div class="code-name">.icon-close-bold
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-down-bold"></hz-icon>
    <div class="name">
      arrow-down-bold
    </div>
    <div class="code-name">.icon-arrow-down-bold
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-minus-bold"></hz-icon>
    <div class="name">
      minus-bold
    </div>
    <div class="code-name">.icon-minus-bold
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-right-bold"></hz-icon>
    <div class="name">
      arrow-right-bold
    </div>
    <div class="code-name">.icon-arrow-right-bold
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-select-bold"></hz-icon>
    <div class="name">
      select-bold
    </div>
    <div class="code-name">.icon-select-bold
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-up-filling"></hz-icon>
    <div class="name">
      arrow-up-filling
    </div>
    <div class="code-name">.icon-arrow-up-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-down-filling"></hz-icon>
    <div class="name">
      arrow-down-filling
    </div>
    <div class="code-name">.icon-arrow-down-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-left-filling"></hz-icon>
    <div class="name">
      arrow-left-filling
    </div>
    <div class="code-name">.icon-arrow-left-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-right-filling"></hz-icon>
    <div class="name">
      arrow-right-filling
    </div>
    <div class="code-name">.icon-arrow-right-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-caps-unlock-filling"></hz-icon>
    <div class="name">
      caps-unlock-filling
    </div>
    <div class="code-name">.icon-caps-unlock-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-comment-filling"></hz-icon>
    <div class="name">
      comment-filling
    </div>
    <div class="code-name">.icon-comment-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-check-item-filling"></hz-icon>
    <div class="name">
      check-item-filling
    </div>
    <div class="code-name">.icon-check-item-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-clock-filling"></hz-icon>
    <div class="name">
      clock-filling
    </div>
    <div class="code-name">.icon-clock-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-delete-filling"></hz-icon>
    <div class="name">
      delete-filling
    </div>
    <div class="code-name">.icon-delete-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-decline-filling"></hz-icon>
    <div class="name">
      decline-filling
    </div>
    <div class="code-name">.icon-decline-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-dynamic-filling"></hz-icon>
    <div class="name">
      dynamic-filling
    </div>
    <div class="code-name">.icon-dynamic-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-intermediate-filling"></hz-icon>
    <div class="name">
      intermediate-filling
    </div>
    <div class="code-name">.icon-intermediate-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-favorite-filling"></hz-icon>
    <div class="name">
      favorite-filling
    </div>
    <div class="code-name">.icon-favorite-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-layout-filling"></hz-icon>
    <div class="name">
      layout-filling
    </div>
    <div class="code-name">.icon-layout-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-help-filling"></hz-icon>
    <div class="name">
      help-filling
    </div>
    <div class="code-name">.icon-help-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-history-filling"></hz-icon>
    <div class="name">
      history-filling
    </div>
    <div class="code-name">.icon-history-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-filter-filling"></hz-icon>
    <div class="name">
      filter-filling
    </div>
    <div class="code-name">.icon-filter-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-file-common-filling"></hz-icon>
    <div class="name">
      file-common-filling
    </div>
    <div class="code-name">.icon-file-common-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-news-filling"></hz-icon>
    <div class="name">
      news-filling
    </div>
    <div class="code-name">.icon-news-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-edit-filling"></hz-icon>
    <div class="name">
      edit-filling
    </div>
    <div class="code-name">.icon-edit-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-fullscreen-expand-filling"></hz-icon>
    <div class="name">
      fullscreen-expand-filling
    </div>
    <div class="code-name">.icon-fullscreen-expand-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-smile-filling"></hz-icon>
    <div class="name">
      smile-filling
    </div>
    <div class="code-name">.icon-smile-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-rise-filling"></hz-icon>
    <div class="name">
      rise-filling
    </div>
    <div class="code-name">.icon-rise-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-picture-filling"></hz-icon>
    <div class="name">
      picture-filling
    </div>
    <div class="code-name">.icon-picture-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-notification-filling"></hz-icon>
    <div class="name">
      notification-filling
    </div>
    <div class="code-name">.icon-notification-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-user-filling"></hz-icon>
    <div class="name">
      user-filling
    </div>
    <div class="code-name">.icon-user-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-setting-filling"></hz-icon>
    <div class="name">
      setting-filling
    </div>
    <div class="code-name">.icon-setting-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-switch-filling"></hz-icon>
    <div class="name">
      switch-filling
    </div>
    <div class="code-name">.icon-switch-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-work-filling"></hz-icon>
    <div class="name">
      work-filling
    </div>
    <div class="code-name">.icon-work-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-task-filling"></hz-icon>
    <div class="name">
      task-filling
    </div>
    <div class="code-name">.icon-task-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-success-filling"></hz-icon>
    <div class="name">
      success-filling
    </div>
    <div class="code-name">.icon-success-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-warning-filling"></hz-icon>
    <div class="name">
      warning-filling
    </div>
    <div class="code-name">.icon-warning-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-folder-filling"></hz-icon>
    <div class="name">
      folder-filling
    </div>
    <div class="code-name">.icon-folder-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-map-filling"></hz-icon>
    <div class="name">
      map-filling
    </div>
    <div class="code-name">.icon-map-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-prompt-filling"></hz-icon>
    <div class="name">
      prompt-filling
    </div>
    <div class="code-name">.icon-prompt-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-meh-filling"></hz-icon>
    <div class="name">
      meh-filling
    </div>
    <div class="code-name">.icon-meh-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-cry-filling"></hz-icon>
    <div class="name">
      cry-filling
    </div>
    <div class="code-name">.icon-cry-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-top-filling"></hz-icon>
    <div class="name">
      top-filling
    </div>
    <div class="code-name">.icon-top-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-home-filling"></hz-icon>
    <div class="name">
      home-filling
    </div>
    <div class="code-name">.icon-home-filling
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-sorting"></hz-icon>
    <div class="name">
      sorting
    </div>
    <div class="code-name">.icon-sorting
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-3column"></hz-icon>
    <div class="name">
      column-3
    </div>
    <div class="code-name">.icon-3column
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-column-4"></hz-icon>
    <div class="name">
      column-4
    </div>
    <div class="code-name">.icon-column-4
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-add"></hz-icon>
    <div class="name">
      add
    </div>
    <div class="code-name">.icon-add
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-add-circle"></hz-icon>
    <div class="name">
      add-circle
    </div>
    <div class="code-name">.icon-add-circle
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-adjust"></hz-icon>
    <div class="name">
      adjust
    </div>
    <div class="code-name">.icon-adjust
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-up-circle"></hz-icon>
    <div class="name">
      arrow-up-circle
    </div>
    <div class="code-name">.icon-arrow-up-circle
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-right-circle"></hz-icon>
    <div class="name">
      arrow-right-circle
    </div>
    <div class="code-name">.icon-arrow-right-circle
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-down"></hz-icon>
    <div class="name">
      arrow-down
    </div>
    <div class="code-name">.icon-arrow-down
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-ashbin"></hz-icon>
    <div class="name">
      ashbin
    </div>
    <div class="code-name">.icon-ashbin
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-right"></hz-icon>
    <div class="name">
      arrow-right
    </div>
    <div class="code-name">.icon-arrow-right
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-browse"></hz-icon>
    <div class="name">
      browse
    </div>
    <div class="code-name">.icon-browse
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-bottom"></hz-icon>
    <div class="name">
      bottom
    </div>
    <div class="code-name">.icon-bottom
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-back"></hz-icon>
    <div class="name">
      back
    </div>
    <div class="code-name">.icon-back
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-bad"></hz-icon>
    <div class="name">
      bad
    </div>
    <div class="code-name">.icon-bad
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-double-left"></hz-icon>
    <div class="name">
      arrow-double-left
    </div>
    <div class="code-name">.icon-arrow-double-left
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-left-circle"></hz-icon>
    <div class="name">
      arrow-left-circle
    </div>
    <div class="code-name">.icon-arrow-left-circle
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-arrow-double-right"></hz-icon>
    <div class="name">
      arrow-double-right
    </div>
    <div class="code-name">.icon-arrow-double-right
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-caps-lock"></hz-icon>
    <div class="name">
      caps-lock
    </div>
    <div class="code-name">.icon-caps-lock
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-camera"></hz-icon>
    <div class="name">
      camera
    </div>
    <div class="code-name">.icon-camera
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-chart-bar"></hz-icon>
    <div class="name">
      chart-bar
    </div>
    <div class="code-name">.icon-chart-bar
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-attachment"></hz-icon>
    <div class="name">
      attachment
    </div>
    <div class="code-name">.icon-attachment
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-code"></hz-icon>
    <div class="name">
      code
    </div>
    <div class="code-name">.icon-code
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-close"></hz-icon>
    <div class="name">
      close
    </div>
    <div class="code-name">.icon-close
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-check-item"></hz-icon>
    <div class="name">
      check-item
    </div>
    <div class="code-name">.icon-check-item
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-calendar"></hz-icon>
    <div class="name">
      calendar
    </div>
    <div class="code-name">.icon-calendar
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-comment"></hz-icon>
    <div class="name">
      comment
    </div>
    <div class="code-name">.icon-comment
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-column-vertical"></hz-icon>
    <div class="name">
      column-vertical
    </div>
    <div class="code-name">.icon-column-vertical
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-column-horizontal"></hz-icon>
    <div class="name">
      column-horizontal
    </div>
    <div class="code-name">.icon-column-horizontal
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-complete"></hz-icon>
    <div class="name">
      complete
    </div>
    <div class="code-name">.icon-complete
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-chart-pie"></hz-icon>
    <div class="name">
      chart-pie
    </div>
    <div class="code-name">.icon-chart-pie
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-cry"></hz-icon>
    <div class="name">
      cry
    </div>
    <div class="code-name">.icon-cry
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-customer-service"></hz-icon>
    <div class="name">
      customer-service
    </div>
    <div class="code-name">.icon-customer-service
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-delete"></hz-icon>
    <div class="name">
      delete
    </div>
    <div class="code-name">.icon-delete
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-direction-down"></hz-icon>
    <div class="name">
      direction-down
    </div>
    <div class="code-name">.icon-direction-down
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-copy"></hz-icon>
    <div class="name">
      copy
    </div>
    <div class="code-name">.icon-copy
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-cut"></hz-icon>
    <div class="name">
      cut
    </div>
    <div class="code-name">.icon-cut
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-data-view"></hz-icon>
    <div class="name">
      data-view
    </div>
    <div class="code-name">.icon-data-view
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-direction-down-circle"></hz-icon>
    <div class="name">
      direction-down-circle
    </div>
    <div class="code-name">.icon-direction-down-circle
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-direction-right"></hz-icon>
    <div class="name">
      direction-right
    </div>
    <div class="code-name">.icon-direction-right
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-direction-up"></hz-icon>
    <div class="name">
      direction-up
    </div>
    <div class="code-name">.icon-direction-up
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-discount"></hz-icon>
    <div class="name">
      discount
    </div>
    <div class="code-name">.icon-discount
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-direction-left"></hz-icon>
    <div class="name">
      direction-left
    </div>
    <div class="code-name">.icon-direction-left
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-download"></hz-icon>
    <div class="name">
      download
    </div>
    <div class="code-name">.icon-download
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-electronics"></hz-icon>
    <div class="name">
      electronics
    </div>
    <div class="code-name">.icon-electronics
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-drag"></hz-icon>
    <div class="name">
      drag
    </div>
    <div class="code-name">.icon-drag
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-elipsis"></hz-icon>
    <div class="name">
      elipsis
    </div>
    <div class="code-name">.icon-elipsis
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-export"></hz-icon>
    <div class="name">
      export
    </div>
    <div class="code-name">.icon-export
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-explain"></hz-icon>
    <div class="name">
      explain
    </div>
    <div class="code-name">.icon-explain
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-edit"></hz-icon>
    <div class="name">
      edit
    </div>
    <div class="code-name">.icon-edit
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-eye-close"></hz-icon>
    <div class="name">
      eye-close
    </div>
    <div class="code-name">.icon-eye-close
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-email"></hz-icon>
    <div class="name">
      email
    </div>
    <div class="code-name">.icon-email
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-error"></hz-icon>
    <div class="name">
      error
    </div>
    <div class="code-name">.icon-error
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-favorite"></hz-icon>
    <div class="name">
      favorite
    </div>
    <div class="code-name">.icon-favorite
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-file-common"></hz-icon>
    <div class="name">
      file-common
    </div>
    <div class="code-name">.icon-file-common
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-file-delete"></hz-icon>
    <div class="name">
      file-delete
    </div>
    <div class="code-name">.icon-file-delete
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-file-add"></hz-icon>
    <div class="name">
      file-add
    </div>
    <div class="code-name">.icon-file-add
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-film"></hz-icon>
    <div class="name">
      film
    </div>
    <div class="code-name">.icon-film
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-fabulous"></hz-icon>
    <div class="name">
      fabulous
    </div>
    <div class="code-name">.icon-fabulous
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-file"></hz-icon>
    <div class="name">
      file
    </div>
    <div class="code-name">.icon-file
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-folder-close"></hz-icon>
    <div class="name">
      folder-close
    </div>
    <div class="code-name">.icon-folder-close
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-filter"></hz-icon>
    <div class="name">
      filter
    </div>
    <div class="code-name">.icon-filter
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-good"></hz-icon>
    <div class="name">
      good
    </div>
    <div class="code-name">.icon-good
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-hide"></hz-icon>
    <div class="name">
      hide
    </div>
    <div class="code-name">.icon-hide
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-home"></hz-icon>
    <div class="name">
      home
    </div>
    <div class="code-name">.icon-home
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-history"></hz-icon>
    <div class="name">
      history
    </div>
    <div class="code-name">.icon-history
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-file-open"></hz-icon>
    <div class="name">
      file-open
    </div>
    <div class="code-name">.icon-file-open
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-forward"></hz-icon>
    <div class="name">
      forward
    </div>
    <div class="code-name">.icon-forward
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-import"></hz-icon>
    <div class="name">
      import
    </div>
    <div class="code-name">.icon-import
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-image-text"></hz-icon>
    <div class="name">
      image-text
    </div>
    <div class="code-name">.icon-image-text
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-keyboard-26"></hz-icon>
    <div class="name">
      keyboard-26
    </div>
    <div class="code-name">.icon-keyboard-26
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-keyboard-9"></hz-icon>
    <div class="name">
      keyboard-9
    </div>
    <div class="code-name">.icon-keyboard-9
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-link"></hz-icon>
    <div class="name">
      link
    </div>
    <div class="code-name">.icon-link
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-layout"></hz-icon>
    <div class="name">
      layout
    </div>
    <div class="code-name">.icon-layout
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-fullscreen-shrink"></hz-icon>
    <div class="name">
      fullscreen-shrink
    </div>
    <div class="code-name">.icon-fullscreen-shrink
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-layers"></hz-icon>
    <div class="name">
      layers
    </div>
    <div class="code-name">.icon-layers
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-lock"></hz-icon>
    <div class="name">
      lock
    </div>
    <div class="code-name">.icon-lock
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-fullscreen-expand"></hz-icon>
    <div class="name">
      fullscreen-expand
    </div>
    <div class="code-name">.icon-fullscreen-expand
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-map"></hz-icon>
    <div class="name">
      map
    </div>
    <div class="code-name">.icon-map
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-meh"></hz-icon>
    <div class="name">
      meh
    </div>
    <div class="code-name">.icon-meh
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-menu"></hz-icon>
    <div class="name">
      menu
    </div>
    <div class="code-name">.icon-menu
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-loading"></hz-icon>
    <div class="name">
      loading
    </div>
    <div class="code-name">.icon-loading
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-help"></hz-icon>
    <div class="name">
      help
    </div>
    <div class="code-name">.icon-help
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-minus-circle"></hz-icon>
    <div class="name">
      minus-circle
    </div>
    <div class="code-name">.icon-minus-circle
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-modular"></hz-icon>
    <div class="name">
      modular
    </div>
    <div class="code-name">.icon-modular
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-notification"></hz-icon>
    <div class="name">
      notification
    </div>
    <div class="code-name">.icon-notification
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-mic"></hz-icon>
    <div class="name">
      mic
    </div>
    <div class="code-name">.icon-mic
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-more"></hz-icon>
    <div class="name">
      more
    </div>
    <div class="code-name">.icon-more
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-pad"></hz-icon>
    <div class="name">
      pad
    </div>
    <div class="code-name">.icon-pad
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-operation"></hz-icon>
    <div class="name">
      operation
    </div>
    <div class="code-name">.icon-operation
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-play"></hz-icon>
    <div class="name">
      play
    </div>
    <div class="code-name">.icon-play
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-print"></hz-icon>
    <div class="name">
      print
    </div>
    <div class="code-name">.icon-print
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-mobile-phone"></hz-icon>
    <div class="name">
      mobile-phone
    </div>
    <div class="code-name">.icon-mobile-phone
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-minus"></hz-icon>
    <div class="name">
      minus
    </div>
    <div class="code-name">.icon-minus
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-navigation"></hz-icon>
    <div class="name">
      navigation
    </div>
    <div class="code-name">.icon-navigation
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-pdf"></hz-icon>
    <div class="name">
      pdf
    </div>
    <div class="code-name">.icon-pdf
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-prompt"></hz-icon>
    <div class="name">
      prompt
    </div>
    <div class="code-name">.icon-prompt
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-move"></hz-icon>
    <div class="name">
      move
    </div>
    <div class="code-name">.icon-move
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-refresh"></hz-icon>
    <div class="name">
      refresh
    </div>
    <div class="code-name">.icon-refresh
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-run-up"></hz-icon>
    <div class="name">
      run-up
    </div>
    <div class="code-name">.icon-run-up
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-picture"></hz-icon>
    <div class="name">
      picture
    </div>
    <div class="code-name">.icon-picture
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-run-in"></hz-icon>
    <div class="name">
      run-in
    </div>
    <div class="code-name">.icon-run-in
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-pin"></hz-icon>
    <div class="name">
      pin
    </div>
    <div class="code-name">.icon-pin
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-save"></hz-icon>
    <div class="name">
      save
    </div>
    <div class="code-name">.icon-save
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-search"></hz-icon>
    <div class="name">
      search
    </div>
    <div class="code-name">.icon-search
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-share"></hz-icon>
    <div class="name">
      share
    </div>
    <div class="code-name">.icon-share
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-scanning"></hz-icon>
    <div class="name">
      scanning
    </div>
    <div class="code-name">.icon-scanning
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-security"></hz-icon>
    <div class="name">
      security
    </div>
    <div class="code-name">.icon-security
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-sign-out"></hz-icon>
    <div class="name">
      sign-out
    </div>
    <div class="code-name">.icon-sign-out
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-select"></hz-icon>
    <div class="name">
      select
    </div>
    <div class="code-name">.icon-select
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-stop"></hz-icon>
    <div class="name">
      stop
    </div>
    <div class="code-name">.icon-stop
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-success"></hz-icon>
    <div class="name">
      success
    </div>
    <div class="code-name">.icon-success
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-smile"></hz-icon>
    <div class="name">
      smile
    </div>
    <div class="code-name">.icon-smile
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-switch"></hz-icon>
    <div class="name">
      switch
    </div>
    <div class="code-name">.icon-switch
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-setting"></hz-icon>
    <div class="name">
      setting
    </div>
    <div class="code-name">.icon-setting
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-survey"></hz-icon>
    <div class="name">
      survey
    </div>
    <div class="code-name">.icon-survey
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-task"></hz-icon>
    <div class="name">
      task
    </div>
    <div class="code-name">.icon-task
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-skip"></hz-icon>
    <div class="name">
      skip
    </div>
    <div class="code-name">.icon-skip
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-text"></hz-icon>
    <div class="name">
      text
    </div>
    <div class="code-name">.icon-text
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-time"></hz-icon>
    <div class="name">
      time
    </div>
    <div class="code-name">.icon-time
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-telephone-out"></hz-icon>
    <div class="name">
      telephone-out
    </div>
    <div class="code-name">.icon-telephone-out
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-toggle-left"></hz-icon>
    <div class="name">
      toggle-left
    </div>
    <div class="code-name">.icon-toggle-left
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-toggle-right"></hz-icon>
    <div class="name">
      toggle-right
    </div>
    <div class="code-name">.icon-toggle-right
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-telephone"></hz-icon>
    <div class="name">
      telephone
    </div>
    <div class="code-name">.icon-telephone
    </div>
  </li>

  <li class="dib">
    <hz-icon class="icon iconfont icon-top"></hz-icon>
    <div class="name">
      top
    </div>
    <div class="code-name">.icon-top
    </div>
  </li>
</ul>
</div>



