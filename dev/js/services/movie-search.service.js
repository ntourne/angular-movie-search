// movieService can be used in a controller like this:
// movieService.getMovieDetails("Pulp Fiction").success(function (data) {
//    $scope.movie = data
// }
//
(function () {

  angular.module('moviesearch.services', [])

    .factory('movieSearchService', ['$http', function ($http) {

        function getMovieDetails(title) {
            var getData = {
                method: 'jsonp',
                url: 'http://www.omdbapi.com/?t=' + title, //add +'&apikey=YOUR_API_KEY' if you have one.
                headers: {
                    'Content-Type': undefined
                },
                params : {
                    callback : 'JSON_CALLBACK'
                }

            };
            return $http(getData)
        }

        return {
            getMovieDetails: getMovieDetails
        };

    }]);

})();
