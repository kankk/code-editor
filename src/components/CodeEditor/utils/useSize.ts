import { ref, computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

export function useSize() {
  const { width, height } = useWindowSize();

  const ceHeaderHeight = ref(24);
  const ceMenuWidth = ref(32);
  const ceSidebarWidth = ref(250);
  const ceFooterHeight = ref(24);

  const ceBodyHeight = computed(() => height.value - ceHeaderHeight.value - ceFooterHeight.value);
  const ceBodyWidth = computed(() => width.value - ceMenuWidth.value - ceSidebarWidth.value);

  const ceEditorToolHeight = ref(24);
  const ceConsoleHeight = ref(200);

  const ceEditorWidth = computed(() => ceBodyWidth.value);
  const ceEditorHeight = computed(() => ceBodyHeight.value - ceEditorToolHeight.value - ceConsoleHeight.value);

  return {
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
  };
}
