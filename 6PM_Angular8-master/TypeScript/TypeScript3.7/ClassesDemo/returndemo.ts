class Sample {
    public Captcha():string{
        let a = Math.random() * 10;
        let b = Math.random() * 10;
        let c = Math.random() * 10;
        let d = Math.random() * 10;
        let e = Math.random() * 10;
        let code = Math.round(a) + " " + Math.round(b) + " " + Math.round(c) + " " + Math.round(d) + " " + Math.round(e);        
        return code;
    }
}
let obj1 = new Sample();
console.log(obj1.Captcha());
console.log(obj1.Captcha());
console.log(obj1.Captcha());