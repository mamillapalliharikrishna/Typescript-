let products:string[] = ["TV","Mobile","Shoe"];
for(var property in products){
    console.log(`${property} [${typeof property}]=${products[property]}`);
}