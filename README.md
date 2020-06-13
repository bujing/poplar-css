# Poplar CSS

一个轻量级、可扩展、适用于任何 `Web` 项目的公共样式库。

## Base

如果把页面渲染的 `CSS` 树视作高楼，那么我会选择 `normalize.css` 作为高楼的第一层，同时我期望 `poplar.css` 可以作为第二层。

`poplar.css` 在 `normalize.css` 的基础上，重置了一部分元素的样式。当然，这些都是以可配置变量的方式来完成的。

## Text

文本是页面中最基本的组成部分，而与文本关系最为密切的样式不外乎：字号、颜色和对齐方式。

在 `$text-size` 集合中声明文本的字号样式。扩展此集合，可以获取自定义的样式类。

``` scss
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

@each $size, $value in $text-size {
  .text-#{$size} {
    font-size: $value;
  }
}
```

``` html
<p class="text-md">这是一段示例文字。</p>
```

也可以通过字号边界声明，来获取一个区间内的字号样式。

``` scss
$text-size-min: 0 !default;
$text-size-max: 0 !default;

@if $text-size-max > $text-size-min {
  @for $size from $text-size-min through $text-size-max {
    .fs-#{$size} {
      font-size: #{$size}px;
    }
  }
}
```

``` html
<p class="fs-16">这是一段示例文字。</p>
```

在 `$text-color` 集合中声明文本的颜色样式，丰富文本的不同语义表示。同样支持扩展。

``` scss
$black: #000;
$white: #fff;

$text-color: () !default;
$text-color: map-merge(
  (
    'black': $black,
    'white': $white
  ),
  $text-color
);

@each $color, $value in $text-color {
  .text-#{$color} {
    color: $value;
  }
}
```

``` html
<p class="text-black">这是一段示例文字。</p>
```

在 `$text-align` 集合中声明文本的对齐样式。

``` scss
$text-align: center, left, right, justify !default;

@each $align in $text-align {
  .text-#{$align} {
    text-align: $align;
  }
}
```

``` html
<p class="text-center">这是一段示例文字。</p>
```

## Float

浮动和清除浮动，也是不能忽略的常用样式。

``` scss
$float-side: left, right, none !default;

@each $side in $float-side {
  .float-#{$side} {
    float: $side;
  }
}
```

`.clearfix` 用于清除容器内部元素的浮动影响；`.clear-both` 则是用于清除容器外部元素的浮动影响。

``` scss
.clear {
  &fix::after {
    clear: both;
    content: '';
    display: block;
  }

  &-both {
    clear: both;
  }
}
```

## Flexbox

弹性盒子为我们提供了更加灵活、方便和强大的布局能力，是当下主流的布局方式。

指定容器使用弹性盒子布局。

``` scss
.flex {
  display: flex;

  &-inline {
    display: inline-flex;
  }
}
```

指定元素在主轴上的布局方向（正方向或反方向）。

``` scss
$flex-direction: row, row-reverse, column, column-reverse !default;

@each $direction in $flex-direction {
  .flex-#{$direction} {
    @extend .flex;
    flex-direction: $direction;
  }
}
```

指定元素在主轴上的排布，是收缩或溢出，还是在交叉轴上延伸。

``` scss
$flex-wrap: nowrap, wrap, wrap-reverse !default;

@each $wrap in $flex-wrap {
  .flex-#{$wrap} {
    flex-wrap: $wrap;
  }
}
```

指定元素在主轴方向上的（元素之间及其周围的）空间分配。

``` scss
$main-content: (
  'stretch': stretch,
  'between': space-between,
  'around': space-around,
  'evenly': space-evenly,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;

@each $content, $value in $main-content {
  .main-content-#{$content} {
    justify-content: $value;
  }
}
```

指定元素在交叉轴方向上的（元素之间及其周围的）空间分配，对单行弹性盒子无效。

``` scss
$cross-content: (
  'stretch': stretch,
  'between': space-between,
  'around': space-around,
  'evenly': space-evenly,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;

@each $content, $value in $cross-content {
  .cross-content-#{$content} {
    align-content: $value;
  }
}
```

指定元素在交叉轴方向上的对齐方式。

``` scss
$cross-items: (
  'stretch': stretch,
  'baseline': baseline,
  'start': flex-start,
  'end': flex-end,
  'center': center
) !default;

@each $item, $value in $cross-items {
  .cross-items-#{$item} {
    align-items: $value;
  }
}
```

## Button

按钮的样式稍微有些复杂，目前支持对其背景色、文字样式（颜色、字号、粗细）和边框样式（边框、圆角）进行独立配置。

设置灰度对比阀值，可以为不同的背景色匹配对应的文字颜色。

``` scss
$black: #000;
$white: #fff;

$yiq-contrasted-threshold: 192 !default;
$yiq-contrasted-dark: $black !default;
$yiq-contrasted-light: $white !default;

$button-style: () !default;
$button-style: map-merge(
  (
    'black': (
      'background': $black,
    ),
    'white': (
      'background': $white,
      'border-color': $black
    )
  ),
  $button-style
);

@function color-contrasted ($color) {
  $r: red($color);
  $g: green($color);
  $b: blue($color);
  $y: $r * 0.299 + $g * 0.587 + $b * 0.114;

  @if ($y > $yiq-contrasted-threshold) {
    @return $yiq-contrasted-dark;
  } @else {
    @return $yiq-contrasted-light;
  }
}

@mixin button ($style) {
  $background: map.get($style, 'background');
  $border-width: map.get($style, 'border-width');
  $border-style: map.get($style, 'border-style');
  $border-color: map.get($style, 'border-color');
  $border-radius: map.get($style, 'border-radius');
  $color: map.get($style, 'color');
  $font-size: map.get($style, 'font-size');
  $font-weight: map.get($style, 'font-weight');

  background-color: if($background, $background, transparent);
  border-width: if($border-width, $border-width, 1px);
  border-style: if($border-style, $border-style, solid);
  border-color: if($border-color, $border-color, transparent);
  @if ($border-radius) {
    border-radius: $border-radius;
  }
  color: if($color, $color, color-contrasted($background));
  @if ($font-size) {
    font-size: $font-size;
  }
  @if ($font-weight) {
    font-weight: $font-weight;
  }
}

@each $name, $style in $button-style {
  .button-#{$name} {
    @include button($style);
  }
}
```
