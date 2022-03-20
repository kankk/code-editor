import { InjectionKey, Ref } from 'vue';
import type { IFiles } from './types';

export const CeWorkbenchKey: InjectionKey<{
  files: Ref<IFiles>
}> = Symbol('ce:workbench');
