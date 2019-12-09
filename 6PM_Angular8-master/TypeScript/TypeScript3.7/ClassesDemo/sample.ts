class Emp {
   Name:string;
   Salary:number;
}
class Emp1 {
   JoinDate:string;
}
interface IEmp extends Emp, Emp1 {
    Designation:string;
}
let obj:IEmp = {
    Name: "John",
    Salary: 45000.66,
    Designation:"Manager",
    JoinDate:"2019/02/23"
};