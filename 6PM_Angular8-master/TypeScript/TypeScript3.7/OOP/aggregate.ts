class Base {
   public id:number=1;
   public name:string="TV";
   public Print():void {
       console.log("id=" + this.id + "\n" + "name=" + this.name);
   }
}
class Derived {
  public price:number=34500.55;
  public Print():void {
      let obj = new Base();
      obj.Print();
      console.log("price=" + this.price);
  }
}
let obj = new Derived;
obj.Print();