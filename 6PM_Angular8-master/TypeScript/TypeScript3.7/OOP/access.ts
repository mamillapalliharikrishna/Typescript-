class Parent {
   public Id:number=1;
   private Name:string="TV";
   protected Price:number=53400.55;
}
class Child extends Parent {
   Print(childObject:Child) {
       var parentObj = new Parent();
       parentObj.Id=1;
       
       childObject.Id=2;
       childObject.Price=45000;
   }
}