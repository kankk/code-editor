import { cloneDeep } from 'lodash';
import type { IFiles } from './types';

export const buildFiles = (rawFiles: IFiles, parentPath = ''): IFiles => {
  const files = cloneDeep(rawFiles);
  if (Array.isArray(files)) {
    return files.map((item) => {
      if ('children' in item) {
        const path = `${parentPath}/${item.name}`;
        return {
          name: item.name,
          path: `${parentPath}/${item.name}`,
          children: buildFiles(item.children, path),
        };
      }
      return {
        name: item.name,
        path: `${parentPath}/${item.name}`,
        content: item.content,
      };
    });
  }
  return [];
};
