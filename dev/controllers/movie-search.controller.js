angular.module('app', [])

    .controller('MovieSearchController', function() {

        var vm = this;

        vm.query = "";

        vm.search = function() {
            alert(vm.query);
        }


    });
