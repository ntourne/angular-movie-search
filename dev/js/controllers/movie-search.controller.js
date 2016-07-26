(function() {

angular.module('moviesearch.controllers', [])

    .controller('MovieSearchController', ['movieSearchService', function(movieSearchService) {

        var vm = this;

        // Data
        vm.query = "";
        vm.movie = null;


        // Methods

        /**
         * Search movies
         * @return response
         */
        vm.search = function() {

            /**
             * Call to OMDB API sending the query that user input
             * @param  string vm.query
             * @return response
             */
            movieSearchService.getMovieDetails(vm.query)
                .success(function (data) {

                    // if movie found
                    if (data && data.Response == "True") {
                        vm.movie = data;
                        if (vm.movie.Poster == "N/A")
                            vm.movie.Poster = "http://placehold.it/300x444"
                    }

                    // if movie not found or error, show alert message
                    else
                        alert("Movie not found. Please, try with another title")
                });
        }

    }]);


})();
