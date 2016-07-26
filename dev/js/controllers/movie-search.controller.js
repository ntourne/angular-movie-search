(function() {

angular.module('moviesearch.controllers', [])

    .controller('MovieSearchController', ['movieSearchService', function(movieSearchService) {

        var vm = this;

        // Data
        vm.query = "";
        vm.movie = null;


        // Methods
        vm.search = function() {

            movieSearchService.getMovieDetails(vm.query)
                .success(function (data) {
                    vm.movie = data;
                    console.log(vm.movie);
                });
        }


    }]);


})();
