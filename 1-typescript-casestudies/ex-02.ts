const fruit: string = "banana";
console.log(fruit);

const double = (num: number): number => num * 2;
console.log(double(5));

//comment
/*

comments
comments
comments
comments
comments
*/


class Person{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    safeHello(): void {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const p = new Person("Faaris");
p.safeHello();




