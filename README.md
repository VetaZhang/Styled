
Styled
===

Styled components by styled-component

## SBlock

```jsx
<SBlock
  // layout 值为主轴和侧轴的布局方式，用空格分隔
  // 主轴：start, center, end, around, between，侧轴：start, center, end, stretch
  flex={{ layout: 'start center', direction: 'column' }}
  // 简写时其他值均为默认值，flex 可改成 inlineFlex
  flex="start center"

  // absolute, relative, fixed。zIndex 默认为 1
  absolute={{ zIndex: '1', top: '10px', bottom: '1rem', left: '', right: '' }}

  // size
  width=""
  height=""
  minWidth=""
  minWidth=""
  minHeight=""
  maxWidth=""
  maxHeight=""

  // 边距
  margin=""
  marginTop=""
  marginBottom=""
  marginLeft=""
  marginRight=""
  padding=""
  paddingTop=""
  paddingBottom=""
  paddingLeft=""
  paddingRight=""

  // 背景
  bgColor=""
  bgImg=""
  bgLinear=""
  bgSize=""
  bgPosition=""
  bgRepeat=""

  // 边框
  border=""
  borderTop=""
  borderBottom=""
  borderLeft=""
  borderRight=""
  radius=""

  // 字体
  family=""
  size=""
  weight=""
  color=""
  decoration=""
  lineClamp=""
  lineHeight=""
  whiteSpace=""

  // 其他
  display=""
  boxSize=""
  boxShadow=""
  overflow=""
  opacity=""
  align="" // text-align
  verticalAlign=""
>
  ...
</SBlock>
```

---

## SInline
添加了 display: inline-block; 预设属性的基础组件

其他属性与 SBlock 一致

---

## SFlex
添加了水平和垂直方向都居中的 flex 预设属性的基础组件
```jsx
<SFlex
  inline // 设置为 inline-flex
  direction="column" // 设置布局方向
>
  ...
</SFlex>
```
其他属性与 SBlock 一致

---

## SPara
文字段落

```jsx
<SPara
  lineClamp="2" // 显示行数，超出的部分会显示成省略号
>
  ...
</SPara>
```
其他属性与 SBlock 一致

---

## SText
单行的行内文本，超出容器宽度的部分会显示成省略号
```jsx
<SText>...</SText>
```
其他属性与 SBlock 一致

---

## SImg
图片组件，默认为块级元素，且 100% 宽度居中显示
```jsx
<SImg src="" />
```
其他属性与 SBlock 一致

---

## SAvatar
头像组件，默认为圆形且图片居中显示
```jsx
<SAvatar src="" size="" />
```
其他属性与 SBlock 一致

---

## SCover
大图组件，图片默认居中显示，宽度 100%，高度为 100px
```jsx
<SCover src="" />
```
其他属性与 SBlock 一致

---

## SButton
大圆角按钮，块级居中显示，内部为 flex 布局，水平和垂直方向都居中
```jsx
<SButton height="">...</SButton>
```
其他属性与 SBlock 一致

---

## SScroll
滚动容器组件，添加 -webkit-overflow-scrolling: touch; 预置属性
```jsx
<SScroll height="">...</SScroll>
```
其他属性与 SBlock 一致