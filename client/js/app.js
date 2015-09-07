angular
  .module('app', [
    'lbServices',
    'ui.router',
    'ngMaterial',
    'md.data.table'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,
                                                             $urlRouterProvider) {
    $stateProvider
      .state('transaction', {
        url: '',
        templateUrl: 'views/transaction.tmpl.html',
        controller: 'TransactionController'
      });

    $urlRouterProvider.otherwise('transaction');
  }]);
