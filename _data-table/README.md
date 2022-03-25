# README

- @doc https://www.naiveui.com/zh-CN/os-theme/components/data-table

# 常见问题 @faq

- emit is not function @fix
    - https://stackoverflow.com/questions/71101819/uncaught-typeerror-emit-is-not-a-function-in-vue3
    - https://www.jianshu.com/p/90dbff361623
    - https://github.com/vuejs/core/issues/4295

```
// 真相
defineEmits只能在<script setup>里使用...

===
"@vue/compiler-sfc": "^3.2.31",
```    