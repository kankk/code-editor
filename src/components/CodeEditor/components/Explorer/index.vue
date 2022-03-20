<script lang="ts">
import { inject } from 'vue';
import Files from '../Files/index.vue';
import { CeWorkbenchKey } from '../../utils/key';

export default {
  name: 'Explorer',
};
</script>

<script setup lang="ts">
const workbench = inject(CeWorkbenchKey);
const files = workbench?.files;
</script>

<template>
  <div>
    <Files :files="files" />
  </div>
</template>

<style>
</style>
