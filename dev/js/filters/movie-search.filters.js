(function () {

angular.module('moviesearch.filters', [])

    /**
     * Filter that returns IMDB link
     */
    .filter('imdblink', ['$filter', function ($filter) {
        return function (input) {
            return "http://www.imdb.com/title/" + input;
        };
    }]);

})();
