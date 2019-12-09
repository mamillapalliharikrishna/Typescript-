let code = "admin1";
class Employee {
    private _fullName:string;

    get FullName():string {
        return this._fullName;
    }
    set FullName(newName: string) {
        if(code && code == "admin"){
            this._fullName=newName;
        } else {
            console.log("Not Allowed");
        }
    }
}
let emp = new Employee();
emp.FullName="David";
if(emp.FullName) {
    console.log(emp.FullName);
}