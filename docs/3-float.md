# 浮动

自从弹性盒子普及开来之后，浮动布局也就渐用渐少了。但是少用不代表无用，该有的还是要有。

存在浮动，就必然需要清除浮动。清除的方法有很多，列举两种，基本可以囊括所有浮动场景。

``` css
// 浮动
.float-left { float: left; }
.float-right { float: right; }
.float-none { float: none; }

// 清除
.clearfix::after {
  clear: both;
  content: "";
  display: block; 
}
.clear-both { clear: both; }
```