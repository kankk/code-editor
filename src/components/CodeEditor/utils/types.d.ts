export interface IFile {
  name: string;
  path?: string;
  content: string;
}

export interface IDir {
  name: string;
  path?: string;
  children: Array<IFile | IDir>;
}

export type IFiles = Array<IFile | IDir>;
