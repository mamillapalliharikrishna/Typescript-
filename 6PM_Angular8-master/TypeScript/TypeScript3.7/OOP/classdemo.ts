class Database {
    constructor(dbName:string){
        console.log("Connected to " + dbName);
    }
    public Insert():void {
        console.log("Record Inserted");
    }
    public Delete():void {
        console.log("Record Delete");
    }
}
let oracle = new Database("oracle");
oracle.Delete();