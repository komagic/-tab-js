### tab 选项卡插件

### 1.实现方式
    js原生实现，不依赖第三方插件

#### 2.how to create
1.引入 tbtab.js

2.<pre>var tab = new Tab({

            ele: "father-btn", //按钮的父元素
            type: "click", //触发类型（mouseover,mouseout等）
            btnItem: "btn", //按钮的子元素
            current: "current", //当前class
            bdItemParent: "content" //内容的父元素
        });</pre>