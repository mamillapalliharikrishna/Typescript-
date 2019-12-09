interface IProduct {
    Id:number;
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;
}
abstract class ProductTemplate implements IProduct {
   public Id:number;
   public Name:string;
   public Price:number;
   public Qty:number;
   abstract Total():number;
   public Print():void {
       console.log("Print all product Details");
   }
}
class Product implements ProductTemplate {
    public Id:number=1;
    public Name:string="TV";
    public Price:number=46000.66;
    public Qty:number = 2;
    public Total():number {
        return this.Qty * this.Price;
    }
    public Print():void {
        console.log("Id=" + this.Id + "\n" + "Name=" + this.Name + "\n" + "Price=" + this.Price + "\n" + "Qty=" + this.Qty + "\n" + "Total=" + this.Total());
    }
}
let product = new Product();
product.Print();