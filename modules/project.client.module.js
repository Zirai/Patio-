(function (app) {
  'use strict';

  app.registerModule('project');
  app.registerModule('project.routes', ['ui.router', 'core.routes']);
  app.registerModule('project.services');
}(ApplicationConfiguration));
