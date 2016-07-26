(function () {

angular.module('moviesearch.services', [])

    .factory('movieSearchService', ['$http', function ($http) {

        var vm = this;

        // Data

        // Methods

        /**
         * Call to IMDB and return a $http response with the answer
         * @param  string title
         * @return response
         */
        vm.getMovieDetails = function(title) {
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

        return vm;

    }]);

})();
