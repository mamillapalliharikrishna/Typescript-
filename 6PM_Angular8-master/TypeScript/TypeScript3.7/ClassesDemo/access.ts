let user:string = "admin";
class Movie {
   private _movieName:string;

   get MovieName() {
       return this._movieName;
   }
   set MovieName(newName:string){
       if(user && user=="admin") {
           this._movieName = newName;
       } else {
           console.log("Not Allowed");
       }
   }
}
let movie = new Movie();
movie.MovieName = "Thor";
console.log(movie.MovieName);