(function () {

angular.module('moviesearch.directives', [])


    .directive('movieDetails', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/movie-details.html'
        };
    })

})();
