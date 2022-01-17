import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-playwright'

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "my-blog",
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
  }
};