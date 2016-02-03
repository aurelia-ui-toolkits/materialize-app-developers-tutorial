export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: 'md-select',  name: 'md-select', moduleId: 'material/select/md-select', nav: true, title: 'Select' },
      { route: 'md-button',  name: 'md-button', moduleId: 'material/button/md-button', nav: true, title: 'Button' },
      { route: 'md-slider',  name: 'md-slider', moduleId: 'material/slider/md-slider', nav: true, title: 'Slider' },
      { route: 'md-collapsible',  name: 'md-collapsible', moduleId: 'material/collapsible/md-collapsible', nav: true, title: 'Collapsible' }
    ]);

    this.router = router;
  }
}
