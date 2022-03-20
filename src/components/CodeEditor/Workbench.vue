<script setup lang="ts">
import {
  ref, provide, PropType,
} from 'vue';
import type { IFiles } from './utils/types';
import Header from './Header.vue';
import Footer from './Footer.vue';
import Menu from './Menu.vue';
import Sidebar from './Sidebar.vue';
import EditorTool from './EditorTool.vue';
import Editor from './Editor.vue';
import Console from './Console.vue';
import { useSize } from './utils/useSize';
import { buildFiles } from './utils/builder';

import { CeWorkbenchKey } from './utils/key';

const {
  ceHeaderHeight,
  ceBodyHeight,
  ceFooterHeight,
  ceMenuWidth,
  ceSidebarWidth,
  ceBodyWidth,
  ceEditorToolHeight,
  ceConsoleHeight,
  ceEditorWidth,
  ceEditorHeight,
} = useSize();

const props = defineProps({
  files: {
    type: Array as PropType<IFiles>,
    default: () => ([]),
  },
});

const files = ref(buildFiles(props.files));
// watch(props.files, (newFiles) => {
//   files.value = cloneDeep(newFiles);
// });

provide(CeWorkbenchKey, {
  files,
});

</script>

<template>
  <div class="ce-workbench w-full h-full">
    <!-- 顶部 -->
    <Header
      class="ce-header bg-stone-700"
      :style="{ height: `${ceHeaderHeight}px` }"
    />
    <!-- 中间 -->
    <div
      class="flex"
      :style="{ height: `${ceBodyHeight}px` }"
    >
      <!-- 菜单 -->
      <Menu
        class="h-full bg-stone-700"
        :style="{ width: `${ceMenuWidth}px` }"
      />
      <!-- 侧边栏 -->
      <Sidebar
        class="h-full bg-stone-800"
        :style="{ width: `${ceSidebarWidth}px` }"
      />
      <!-- 内容区 -->
      <div
        class="h-full"
        :style="{ width: `${ceBodyWidth}px` }"
      >
        <!-- 编辑器工具栏 -->
        <EditorTool
          class="w-full bg-stone-800"
          :style="{ height: `${ceEditorToolHeight}px` }"
        />
        <!-- 编辑器 -->
        <Editor
          class="bg-stone-900"
          :style="{ width: `${ceEditorWidth}px`, height: `${ceEditorHeight}px`}"
        />
        <!-- 打印区 -->
        <Console
          class="w-full bg-stone-900 border-t border-stone-700"
          :style="{ height: `${ceConsoleHeight}px`}"
        />
      </div>
    </div>
    <!-- 底部 -->
    <Footer
      class="ce-footer bg-blue-500"
      :style="{ height: `${ceFooterHeight}px` }"
    />
  </div>
</template>

<style>
@import url("./styles/code-editor.scss");
</style>
