let Mfd:any= new Date("2019/01/20");
let days:string[] = ["Monday","Tue","Wed"];
let months:string[] = ["January","Feb","Mar"];

console.log("Week Day=" + days[Mfd.getDay()]);
console.log("Date=" + Mfd.getDate());
console.log("Month=" + months[Mfd.getMonth()]);
console.log("Year=" + Mfd.getFullYear());
console.log("Mfd Date=" + Mfd.toLocaleDateString());
console.log(`Custom=${days[Mfd.getDay()]} , ${Mfd.getDate()} - ${months[Mfd.getMonth()]} ${Mfd.getFullYear()}`);

