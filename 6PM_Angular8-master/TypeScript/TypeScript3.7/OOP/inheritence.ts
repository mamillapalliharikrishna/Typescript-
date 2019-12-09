class Base {
    public id:number=1;
    public name:string="TV";
    public price:number;
    public Print():void {
        console.log("id=" + this.id + "\n" + "name=" + this.name);
    }
 }
 class Derived extends Base {
   public price:number=34500.55;
   public Print():void {
       super.Print();
       console.log("price=" + this.price);
   }
 }
 let obj:Derived = new Base();
 obj.Print();