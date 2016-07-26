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

                    console.log(data);
                    // if movie exists
                    if (data && data.Response == "True") {
                        vm.movie = data;
                        if (vm.movie.Poster == "N/A")
                            vm.movie.Poster = "http://placehold.it/300x444"
                    }


                    else
                        alert("Movie not found. Please, try with another title")
                });
        }


        /*
        Actors: "Joshua Miller"
        Awards: "N/A"
        Country: "USA"
        Director: "Ryan McDonald"
        Genre: "Short, Action"
        Language: "English"
        Metascore: "N/A"
        Plot: "N/A"
        Poster: "N/A"
        Rated: "N/A"
        Released: "01 Apr 2001"
        Response:"True"
        Runtime: "N/A"
        Title: "Terminator"
        Type: "movie"
        Writer: "Ryan McDonald"
        Year: "2001"
        imdbID: "tt1994570"
        imdbRating: "4.8"
        imdbVotes: "16"
        */

    }]);


})();
