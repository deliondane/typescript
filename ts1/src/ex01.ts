//객체 타입의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
// num2 = num1; //다운캐스팅 오류

type Animal = {
    name: string;
    color: string;
}
type Dog = {
    name: string;
    color: string;
    breed: string;
}
type Cat = {
    name: string;
    color: string;
    breed: string;
}
let animal : Animal = {
    name: "코끼리";
    color: "gray";
}
let dog : Dog = {
    name: "강아지",
    color: "brown",
    breed: "말티즈"
}
animal = dog; //업캐스팅
// dog = animal; //다운캐스팅 오류

type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book = {
    name: "책",
    price: 18000
}

let programmingBook: ProgrammingBook = {
    name: "타입스크립트",
    price: 20000,
    skill: "typescript"
}

book = programmingBook
// programmingBook = book

//인터페이스
interface Person{
    name: string;
    age?: number;
    sayHi: () => void;
}
const person: Person = {
    name: "hye",
    age: 20,
    sayHi() {
        
    },
}

interface Animals {
    name: string;
    age: number;
}
interface Dogs extends Animals {
    breed: string;
}
interface Cats extends Animals{
    scratch: boolean;
} 

const dogs: Dogs = {
    breed: "말티주",
    name: "멍멍이",
    age: 2
}
