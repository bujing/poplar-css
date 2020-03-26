# 弹性盒子

弹性盒子是当下主流的布局方式。

如果把行内元素和块元素分别当成文字和段落，那么页面默认的渲染就相当于写一篇（横版的）文章。但是如果要写竖版的文章呢？弹性盒子轻松满足你。

弹性盒子有主轴和交叉轴之分，主轴就是文字书写的方向，交叉轴就是文字换行的方向。

```
// 为元素指定弹性盒子布局
.flex,
.flex-row,
.flex-row-reverse,
.flex-column,
.flex-column-reverse {
  display: flex;
}
// 指定元素排列的方向
.flex-row { flex-direction: row; } // 默认，文本流的方向（例如中文就是从左到右），如同横版文章
.flex-row-reverse { flex-direction: row-reverse; } // 文本流的反向，如同横版文章
.flex-column { flex-direction: column; } // 从上到下，如同竖版文章
.flex-column-reverse { flex-direction: column-reverse; } // 从下到上，如同竖版文章

// 行内块盒子
.flex-inline { display: inline-flex; }

// 弹性盒子内的元素默认不换行，需要明确指定
.flex-wrap { flex-wrap: wrap; }
.flex-wrap-reverse { flex-wrap: wrap-reverse; }

// 元素在主轴的空间分布
.main-content-start { justify-content: flex-start; }
.main-content-end { justify-content: flex-end; }
.main-content-center { justify-content: center; }
.main-content-between { justify-content: space-between; }
.main-content-around { justify-content: space-around; }
.main-content-evenly { justify-content: space-evenly; }

// 元素在交叉轴的空间分布（单行弹性盒子无效）
.cross-content-stretch { align-content: stretch; }
.cross-content-start { align-content: flex-start; }
.cross-content-end { align-content: flex-end; }
.cross-content-center { align-content: center; }
.cross-content-between { align-content: space-between; }
.cross-content-around { align-content: space-around; }

// 元素在交叉轴的对齐方式
.cross-items-stretch { align-items: stretch; }
.cross-items-start { align-items: flex-start; }
.cross-items-end { align-items: flex-end; }
.cross-items-center { align-items: center; }
.cross-items-baseline { align-items: baseline; }

// 子元素的空间适配
.flex-item-stretch { flex: 1 1 0%; }
.flex-item-auto { flex: 1 1 auto; }
.flex-item-none { flex: 0 0 auto; }
```