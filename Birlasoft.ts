class Person
{
 Age : number;
 Name : string;
 constructor(a:number,n:string){
    this.Age = a;
    this.Name = n;
 }
 Display():void
 {
    console.log(this.Age,this.Name);
 }
}
let obj = new Person(22,'SARIM');
obj.Display();

let obj1 = new Person(25,'KASHIF');
obj1.Display();