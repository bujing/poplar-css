# 文本

提供一些文本字号和颜色的公共样式，是很有必要的，因为很多页面文本的样式，都只是字号和颜色的两两组合。

此模块沿用了 `bootstrap` 的设定。

``` css
// 字号
.text-xl { font-size: 20px; }
.text-lg { font-size: 18px; }
.text-md { font-size: 16px; }
.text-sm { font-size: 14px; }
.text-xs { font-size: 12px; }

// 颜色
.text-primary { color: #283593; }
.text-secondary { color: #757575; }
.text-warning { color: #ff6f00; }
.text-danger { color: #b71c1c; }
.text-dark { color: #212121; }
.text-gray { color: #bdbdbd; }

// 对齐
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
```

可以声明对应的 `Map`，扩展样式类。

但是在实际开发过程中，因为不规范的设计，字号飘忽不定，往往不是固定的五个字号就能完全涵盖的。所以预留了 `.fs-` 类，支持简单粗暴的字号声明，通过指定 `$fs-min` 和 `$fs-max` 变量，生成以两者为边界的字号规则。

```
$fs-min: 12;
$fs-max: 24;

// =>

.fs-12 { font-size: 12px; }
.fs-13 { font-size: 13px; }
.fs-14 { font-size: 14px; }
// ...
.fs-22 { font-size: 22px; }
.fs-23 { font-size: 23px; }
.fs-24 { font-size: 24px; }
```