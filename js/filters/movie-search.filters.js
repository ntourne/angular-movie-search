(function () {

angular.module('moviesearch.filters', [])

    .filter('imdblink', ['$filter', function ($filter) {
        return function (input) {
            return "http://www.imdb.com/title/" + input;
        };
    }]);

})();
