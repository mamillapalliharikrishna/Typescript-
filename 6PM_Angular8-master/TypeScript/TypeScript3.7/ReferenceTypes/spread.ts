let electronics:string[] =["TV","Mobile"];
let shoes:string[] = ["Nike", "Lee"];
let products:string[] = ["Watch", ...electronics, ...shoes, "Bata"];
console.log(products.toString());