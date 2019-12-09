class  Arrow {
  public Add = (a:number,b:number)=>a+b;
  public Hello =(uname:string)=>"Hello !" + uname;
}
let obj = new Arrow();
console.log(obj.Add(10,20));
console.log(obj.Hello("John"));