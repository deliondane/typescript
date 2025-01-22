//원시 타입과 리터럴
//number, string, boolean, null, undefined

//1. number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

//2. string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;

//3. boolean
let bool1: boolean = true;
let bool2: boolean = false;
// let bool3: boolean = "true";

//4. null
let null1: null = null;

//5. undefined
let undefined1: undefined = undefined;

//리터럴 타입
let numA: 10 = 10;
numA = 10
let strA: 'hello' = 'hello'
strA = "hello"  

//배열과 튜플
let numArr: number[] = [1,2,3];
let boolArr: boolean[] = [true, false];
let boolArr1: Array<boolean> = [true, false]; //제네릭 문법
let multArr: (string | number)[] = [1, "b"]; //union 타입
let doubleArr:number[][] = [[1,2,3],[4,5]] //다차원 배열

//튜플
let tup1: [number, number] = [1,2];
let tup2: [number, string, boolean] = [1, "hello", true]; 
tup1.push(1)
// tup1.push("1")
tup2.push(2)
tup2.push("3")

const users: [string, number][] = [
    ["김혜원", 1],
    ["김혜투", 2],
    ["김혜삼", 3],
    ["김혜사", 4],
    ["김혜오", 5]
]

//객체타입
//객체 리터럴 타입
let user: object= {
    id: 1,
    name: "김혜원"
}
// user.id
let user2: {
    id: number,
    name: string
}={
    id:2,
    name: "김혜투"
}
user2.id
let user3: {
    id?: number,
    name: string
}={
    name: "김혜삼"
}
user3.name

let cat: {
    name: string;
    color: string;
} = {
    name: "야옹",
    color: "brown"
}

let user1: {
    id?:number;
    name: string;
} = {
    id: 1,
    name: "김혜원"
}
user1={
    name: "김혜투"
}

//읽기 전용
let usert: {
    id?: number;
    readonly name: string; 
} = {
    id:1,
    name: "김혜원"
}
// usert.name="김혜투"