class Demo {
    static s=0;
    n=0;
    constructor(){
        this.n= this.n + 1;
        Demo.s = Demo.s + 1;
    }
    Print():void {
        console.log("s=" + Demo.s + " " + "n=" + this.n);
    }
}
let obj1 = new Demo();
obj1.Print();
let obj2 = new Demo();
obj2.Print();
let obj3 = new Demo();
obj3.Print();