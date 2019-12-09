interface IAngular2 {
    CrossPlatform?:string;
    Speed?:number;
}
interface IAngular4 extends IAngular2 {
    Routing?:string;
    Materials?:string;
}
class angular implements IAngular4 {

}

