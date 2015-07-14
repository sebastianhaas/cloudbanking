angular
    .module('app')
    .controller('TransactionController', ['$scope', '$state', 'Transaction', function ($scope,
                                                                                       $state, Transaction) {
        $scope.transactions = [];
        function getTransactions() {
            Transaction
                .find()
                .$promise
                .then(function (results) {
                    $scope.transactions = results;
                });
        }

        getTransactions();

        $scope.addTransaction = function () {
            Transaction
                .create($scope.newTransaction)
                .$promise
                .then(function (transaction) {
                    $scope.newTransaction = '';
                    $scope.transactionForm.content.$setPristine();
                    $('.focus').focus();
                    getTransactions();
                });
        };

        $scope.removeTransaction = function (item) {
            Transaction
                .deleteById(item)
                .$promise
                .then(function () {
                    getTransactions();
                });
        };
    }]);