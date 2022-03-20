<script lang="ts">
import { PropType } from 'vue';
import type { IFiles } from '../../utils/types';

export default {
  name: 'Files',
};
</script>

<script setup lang="ts">

defineProps({
  files: {
    type: Array as PropType<IFiles>,
    default: () => ([]),
  },
  depth: {
    type: Number,
    default: 1,
  },
});

</script>

<template>
  <div
    v-for="node of files"
    :key="node.path"
  >
    <div v-if="'children' in node">
      <div :style="{ paddingLeft: `${depth * 8}px`}">
        {{ node.name }}
      </div>
      <Files
        :files="node.children"
        :depth="depth + 1"
      />
    </div>
    <div
      v-else
      :style="{ paddingLeft: `${depth * 8}px`}"
    >
      {{ node.name }}
    </div>
  </div>
</template>

<style>
</style>
