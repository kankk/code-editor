<script setup lang="ts">
import { ref } from 'vue';
import Workbench from '@components/CodeEditor/Workbench.vue';
import { defaultFiles } from '@mock/files';

const files = ref(defaultFiles);
</script>

<template>
  <div class="w-screen h-screen overflow-hidden">
    <Workbench :files="files" />
  </div>
</template>

<style>
</style>
