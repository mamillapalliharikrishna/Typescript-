var user = "admin";
var Movie = /** @class */ (function () {
    function Movie() {
    }
    Object.defineProperty(Movie.prototype, "MovieName", {
        get: function () {
            return this._movieName;
        },
        set: function (newName) {
            if (user && user == "admin") {
                this._movieName = newName;
            }
            else {
                console.log("Not Allowed");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Movie;
}());
var movie = new Movie();
movie.MovieName = "Thor";
console.log(movie.MovieName);
