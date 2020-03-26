# 浮动

自从弹性盒子普及开来之后，浮动布局也就渐用渐少了。但是少用不代表无用，该有的还是要有。

存在浮动，就必然需要清除浮动。清除的方法有很多，列举两种，基本可以囊括所有浮动场景。

``` css
// 浮动
.float-left { float: left; }
.float-right { float: right; }
.float-none { float: none; } // 移除[1]

// 清除
.clearfix::after {
  clear: both;
  content: "";
  display: block; 
}
.clear-both { clear: both; }
```

### 补充说明

1. 元素浮动，必然是被人为设置了 `float-left` 或 `float-right`，要使其不浮动，自然应该清除其浮动设置，而不是追加设置 `float-none`。故此，移除 `float-none`。

2. 清除浮动，固定高度或者以 `overflow: hidden` 为首的设置块格式化上下文，都是行之有效的解决方法。除此之外，还有适用于大多数场景的 `after` 伪元素，弊端是：`after` 伪元素被占用。之所以再加上一个 `clear-both`，只要是考虑到以下布局：

``` html
// 在此布局中，div1 所做的一切清除浮动的努力，都无法消除浮动对 div2 的影响
// 这件事只能 div2 自己做，使用 clear-both
<div div1>
  <div class="float-left"></div>
  <div class="float-right"></div>
  <div div2></div>
</div>
```