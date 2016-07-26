(function () {

angular.module('moviesearch.services', [])

    .factory('movieSearchService', ['$http', function ($http) {

        var vm = this;

        // Data

        // Methods
        vm.getMovieDetails = function(title) {
            var getData = {
                method: 'jsonp',
                url: 'https://www.omdbapi.com/?t=' + title, //add +'&apikey=YOUR_API_KEY' if you have one.
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
