(function () {

angular.module('moviesearch.directives', [])


    /**
     * Template to display movie details
     */
    .directive('movieDetails', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/movie-details.html'
        };
    })

})();
