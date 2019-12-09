class Employee {
    public FirstName:string ="Raj";
    public LastName:string = "Kumar";
    public Print():void {
        console.log(this.FirstName + " " + this.LastName);
    }
}
class PartTimeEmployee extends Employee {
    public FirstName:string ="Kiran";
    public LastName:string = "Rao";
    public Print():void {
        console.log(this.FirstName + " " + this.LastName + "-Part Time");
    }
}
class FullTimeEmployee extends Employee {
    public FirstName:string ="Tom";
    public LastName:string = "Hanks";
    public Print():void {
        console.log(this.FirstName + " " + this.LastName + "-Full Time");
    }
}
let employees:Employee[] = new Array();
employees[0] = new Employee();
employees[1] = new PartTimeEmployee();
employees[2] = new FullTimeEmployee();
for(var i=0; i<employees.length;i++){
    employees[i].Print();
}