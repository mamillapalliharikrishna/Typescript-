var Database = /** @class */ (function () {
    function Database(dbName) {
        console.log("Connected to " + dbName);
    }
    Database.prototype.Insert = function () {
        console.log("Record Inserted");
    };
    Database.prototype.Delete = function () {
        console.log("Record Delete");
    };
    return Database;
}());
var oracle = new Database("oracle");
oracle.Delete();
