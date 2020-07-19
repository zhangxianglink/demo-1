

## CSS简单入门总结

1. > **层叠样式表** (Cascading Style Sheets，缩写为 **CSS**），是一种 [样式表](https://developer.mozilla.org/zh-CN/docs/DOM/stylesheet) 语言，用来描述 [HTML](https://developer.mozilla.org/zh-CN/docs/HTML) 或 [XML](https://developer.mozilla.org/zh-CN/docs/XML_介绍)（包括如 [SVG](https://developer.mozilla.org/zh-CN/docs/SVG)、[MathML](https://developer.mozilla.org/zh-CN/docs/Web/MathML)、[XHTML](https://developer.mozilla.org/zh-CN/docs/XHTML) 之类的 XML 分支语言）文档的呈现。CSS 被分为不同等级：CSS1 现已废弃， CSS2.1 是推荐标准， [CSS3](https://developer.mozilla.org/zh-CN/docs/CSS/CSS3) 分成多个小模块且正在标准化中。

   

2. > CSS 在使用上可以 , 多个元素被同一选择器选中, 不同选择器选择同一元素, 多个css文件同时使用. 这就导致css的运用十分灵活.

   

3. >文档流: 
   >
   >**inline**: 内联元素, 排序从左到右, 宽度由内部元素的和决定, 高度由line-height间接决定.
   >
   >**block**: 块元素, 排序从上到下, 可以设置宽, 默认auto. 高度由内部文档流元素决定
   >
   >**inline-block** :  排序从左到右, 宽度模仿inline, 高度模仿block,可以设置宽高.

4. > 盒子模型:
   
   
   
   > content box = 元素大小
>
   > border box =  内容 + padding + border
   
   
   
5. > div的分层 : 
   >
   > 由下而上, backgroud. border, 块级子元素, 浮动元素, 内联子元素, 定位元素
   >
   > positon

   
   
6. > 浏览器渲染原理
   >
   > 1. 根据html构建DOM
   > 2. 根据css构建CSSOM
   > 3. 将上述的两颗树合并**渲染** 为render  tree
   > 4. Layout 布局 (文档流,盒模型,计算大小,和位置 )
   > 5. Paint 绘制(边框颜色,文字色彩,阴影等)
   > 6. Compose 合成 (根据层叠关系展示画面)
>
   > **注意**: 需要了解的是，这些步骤并不一定要按顺序完成。 
   >
   >  例如:  修改背景色, 跳过Layout, 进行后续操作;
   >
   > ​           改变transform, 会跳过Layout, Paint
   >
   > 选择合适的属性,可以提高css的性能.
   
   
   
7. > **transform**属性允许你旋转，缩放，倾斜或平移给定元素(不支持inline)
   >
   > ```css
   > translate 位移: translate(12px, 50%); translateX(2em); translateY(3in);
   > scale 缩放: scale(2, 0.5); scaleX(2); scaleY(0.5);
   > rotate 旋转: rotate(0.5turn); rotate(180deg);
   > skew 倾斜: skew(30deg, 20deg); skewX(30deg); skewY(1.07rad);
   > ```

8. > **animation** 是由多个属性组合的简写属性.
   >
   > ```css
   > /* @keyframes duration | timing-function | delay |
   >    iteration-count | direction | fill-mode | play-state | name */
   > 时长, 过渡方式, 延时, 次数, 方向, 填充模式, 暂停/重启
   > animation: 3s ease-in 1s 2 reverse both paused slidein;
   > ```
   >
   > 
   >
   > **animation-name**属性指定应用的一系列动画，每个名称代表一个由[`@keyframes`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes)定义的动画序列。
   >
   > **animation-duration**属性指定一个动画周期的时长。
   >
   > **animation-delay**定义动画于何时开始，即从动画应用在元素上到动画开始的这段时间的长度。
   >
   > **animation-iteration-count**   定义动画在结束前运行的次数 可以是1次 无限循环(**infinite**)
   >
   > **animation-direction** CSS 属性指示动画是否反向播放
   >
   > ```
   > normal :  默认属性
   > alternate: 动画交替反向运行
   > reverse: 反向运行动画，每周期结束动画由尾到头运行。
   > alternate-reverse: 反向交替， 反向开始交替
   > ```
   >
   > **animation-fill-mode** 设置CSS动画在执行之前和之后如何将样式应用于其目标。
   >
   > 可以使用forwards停留在最后一帧.
   >
   > **animation-play-state** 属性定义一个动画是否运行或者暂停。
   >
   > ```
   > animation-play-state: running;
   > animation-play-state: paused;
   > ```
   >
   > 
   >
   > **animation-timing-function**属性定义CSS动画在每一动画周期中执行的节奏. 
   >
   > ```
   > animation-timing-function: ease-in;
   > animation-timing-function: ease-out;
   > animation-timing-function: ease-in-out;
   > animation-timing-function: linear;
   > animation-timing-function: step-start;
   > animation-timing-function: step-end;
   > ```