import {ScullyConfig} from '@scullyio/scully';

const defaultPostRenderers:string[] = [];
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'my-blog',
  outDir: './dist/static',
  defaultPostRenderers,
  routes: {},
  };
