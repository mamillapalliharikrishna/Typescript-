class Product {
  public Name:string;
  public Price:number;
}
class Employee {
  public Name:string;
  public Salary:number;
  public Designation:string;
}
class Demo {
  public PrintDetails<T>(obj:T){
     for(var property in obj) {
       console.log(property + ":" + obj[property]);
     }
  }
}
let obj = new Demo();
let prod = new Product();
prod.Name="Samsung TV";
prod.Price=45000.66;

let emp = new Employee();
emp.Name="John";
emp.Salary=56000.66;
emp.Designation="Manager";

obj.PrintDetails<Product>(prod);
obj.PrintDetails<Employee>(emp);

