import { join } from 'path';

import { SeedConfig } from './seed.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: '@angular/material/prebuilt-themes/pink-bluegrey.css', inject: true}
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    this.addPackageBundles({
      name:'@angular/material',
      path:'node_modules/@angular/material/bundles/material.umd.js',
      packageMeta:{
        main: 'index.js',
        defaultExtension: 'js'
      }
    });

    this.addPackageBundles({
      name: 'angular-in-memory-web-api',
      path: 'node_modules/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      packageMeta: {
        main: 'index.js',
        defaultExtension: 'js'
      }
    });
    
    this.addPackageBundles({
      name:'@angular/flex-layout',
      path:'node_modules/@angular/flex-layout/bundles/flex-layout.umd.js',
      packageMeta:{
        main: 'index.js',
        defaultExtension: 'js'
      }
    });
    
        
    this.addPackageBundles({
      name:'@swimlane/ngx-datatable',
      path:'node_modules/@swimlane/ngx-datatable/release/index.js',
      packageMeta:{
        main: 'index.js',
        defaultExtension: 'js'
      }
    });

    // let additionalPackages: ExtendPackages[] = [{
    //   name: '@angular/material',
    //   path: 'node_modules/@angular/material/bundles/material.umd.js',
    //   packageMeta:{
    //     main: 'index.js',
    //     defaultExtension: 'js'
    //   }
    // }];
    // this.addPackagesBundles(additionalPackages);
    // Add packages (e.g. ng2-translate)
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
