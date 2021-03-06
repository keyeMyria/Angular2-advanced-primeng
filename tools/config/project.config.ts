import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';
import { InjectableDependency } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedAdvancedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    let additional_deps: InjectableDependency[] = [
		{src: 'primeui/themes/delta/theme.css', inject: true},
		{src: 'primeui/primeui-ng-all.min.css', inject: true},
		{src: 'primeui/primeui-ng-all.min.js', inject: true},
		{src: 'jquery-slimscroll/jquery.slimscroll.min.js', inject: true},
        {src: 'jquery/dist/jquery.min.js', inject: 'libs'}
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);
  }
}
