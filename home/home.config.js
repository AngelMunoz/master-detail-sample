import home from './home.html';

function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '',
      controller: 'HomeCtrl',
      controllerAs: '$ctrl',
      template: home
    });

};

export default HomeConfig;