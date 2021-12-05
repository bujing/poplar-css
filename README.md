# Poplar CSS

一个轻量级、可扩展、适用于任何 `Web` 项目的公共样式库。

## Base

如果把页面渲染的 `CSS` 树视作高楼，那么我会选择 `normalize.css` 作为高楼的第一层，同时我期望 `poplar.css` 可以作为第二层。

`poplar.css` 在 `normalize.css` 的基础上，重置了一部分元素的样式。当然，这些都是以可配置变量的方式来完成的。

## Text

文本是页面中最基本的组成部分，而与文本关系最为密切的样式不外乎：字号、颜色和对齐方式。

在 `$text-size` 集合中声明文本的字号样式，支持扩展和重写。

``` scss
// 默认配置
$text-size: () !default;
$text-size: map-merge(
  (
    'xl': 20px,
    'lg': 18px,
    'md': 16px,
    'sm': 14px,
    'xs': 12px
  ),
  $text-size
);
// 指定集合
$text-size: (
  'xxl': 24px,
  'xl': 22px
);
// 输出
.text-xxl { font-size: 24px; } // 扩展
.text-xl { font-size: 22px; } // 重写
// other
```

也可以通过字号边界声明，来获取一个区间内的字号样式。

``` scss
// 指定变量
$font-size-min: 30;
$font-size-max: 32;
// 输出
.fs-30 { font-size: 30px; }
// ...
.fs-32 { font-size: 32px; }
```

在 `$text-color` 集合中声明文本的颜色样式，丰富文本的不同语义表示，支持扩展和重写。

``` scss
// 默认配置
$text-color: () !default;
$text-color: map-merge(
  (
    'black': $black,
    'gray': $gray,
    'white': $white
  ),
  $text-color
);
// 指定集合
$text-color: (
  red: #f00
);
// 输出
.text-red { color: #f00; } // 扩展
.text-black { color: #000; }
// other
```

在 `$text-align` 集合中声明文本的对齐样式，包含 `center`、`left`、 `right` 和 `justify`，支持重写，但不支持扩展。

``` css
.text-center { text-align: center; }
/* other */
```

## Float

浮动和清除浮动，也是不能忽略的常用样式。

在 `$float-side` 集合中声明浮动的对齐样式，包含 `left`、 `right` 和 `none`，支持重写，但不支持扩展。

``` css
.float-left { float: left; }
/* other */
```

`.clearfix` 用于清除容器内部元素的浮动影响；`.clear-both` 则是用于清除容器外部元素的浮动影响。

``` css
.clearfix::after {
  clear: both;
  content: '';
  display: block;
}

.clear-both { clear: both; }
```

## Flexbox

弹性盒子为我们提供了更加灵活、方便和强大的布局能力，是当下主流的布局方式。

指定容器使用弹性盒子布局。

``` css
.flex { display: flex; }

.flex-inline { display: inline-flex; }
```

指定元素在主轴上的布局方向（正方向或反方向），包含 `row`、 `row-reverse`、`column` 和 `column-reverse`，支持重写，但不支持扩展。

``` css
.flex-row { flex-direction: row; }
/* other */
```

指定元素在主轴上的排布，是收缩或溢出，还是在交叉轴上延伸，包含 `nowrap`、 `wrap` 和 `wrap-reverse`，支持重写，但不支持扩展。

``` css
.flex-nowrap { flex-wrap: nowrap; }
/* other */
```

指定元素在主轴方向上的（元素之间及其周围的）空间分配，支持重写，但不支持扩展。

``` scss
// 默认集合
$main-content: (
  'stretch': stretch,
  'between': space-between,
  'around': space-around,
  'evenly': space-evenly,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;
// 输出
.main-content-stretch { justify-content: stretch; }
// other
```

指定元素在交叉轴方向上的（元素之间及其周围的）空间分配，对单行弹性盒子无效，支持重写，但不支持扩展。

``` scss
// 默认集合
$cross-content: (
  'stretch': stretch,
  'between': space-between,
  'around': space-around,
  'evenly': space-evenly,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;
// 输出
.cross-content-stretch { align-content: stretch; }
// other
```

指定元素在交叉轴方向上的对齐方式，支持重写，但不支持扩展。

``` scss
// 默认集合
$cross-items: (
  'stretch': stretch,
  'baseline': baseline,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;
// 输出
.cross-items-stretch { align-items: stretch; }
// other
```

## Button

按钮样式支持对其背景色、文字颜色和边框颜色进行配置。

设置灰度对比阀值，可以为不同的背景色匹配对应的文字颜色。

``` scss
// 默认配置
$button-style: () !default;
$button-style: map-merge(
  (
    'black': (
      'background-color': $black,
    ),
    'white': (
      'background-color': $white,
      'border-color': $black
    )
  ),
  $button-style
);
// 输出
.button-black {
  background-color: #000;
  border: 1px solid #000;
  color: #fff;
}
// other
```

## Border

增加边框圆角样式，可以配合按钮或者其他带边框的元素使用，支持扩展和重写。

``` scss
// 默认配置
$radius: () !default;
$radius: map-merge(
  (
    'lg': 4px,
    'md': 3px,
    'sm': 2px
  ),
  $radius
);
// 输出
.radius-lg { border-radius: 4px; }
// other
```
