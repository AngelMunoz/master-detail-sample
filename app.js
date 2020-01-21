import angular from 'angular';
import '@uirouter/angularjs';

import master from './home/sample-templates/master-template.html';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home'
import './master-detail'

// Create and bootstrap application
const requires = [
  'ui.router',
  'home',
  'master-detail'
];

window.app = angular.module('app', requires)
  .run(function($templateCache) {
    'ngInject';
    $templateCache.put('home/sample-templates/master-template.html', master)
  });

const mainApp = document.querySelector("[main-app]");
angular.bootstrap(mainApp, ['app']);