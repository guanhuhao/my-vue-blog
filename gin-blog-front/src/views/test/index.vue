<!-- <template>
  <MdEditor v-model="text" />
</template>

<script setup>
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('Hello Editor!');
</script> -->

<template>
  <MdPreview :editorId="id" :modelValue="text" />
  <MdCatalog :editorId="id" :scrollElement="scrollElement" />
</template>

<script setup>
import { ref } from 'vue';
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

const id = 'preview-only';
const text = ref('```\n\nbar = (\n    Bar()\n    .add_xaxis([\"衬衫\", \"羊毛衫\", \"雪纺衫\", \"裤子\", \"高跟鞋\", \"袜子\"])\n    .add_yaxis(\"商家A\", [5, 20, 36, 10, 75, 90])\n    .set_global_opts(title_opts={\"text\": \"主标题\", \"subtext\": \"副标题\"})\n)\nbar.render()\n\n```');
const scrollElement = document.documentElement;
</script>