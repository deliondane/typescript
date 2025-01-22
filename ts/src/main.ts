let str: string = "hello";
let num: number = 123;
let bool: boolean = true;

str='123'

//객체 타입
const obj: {a:number, b:string}={a:0, b:"str"};
obj.b="123"

//배열 타입
//  const arr:number[] = []; //튜플타입
 const arr: Array<string>=[]
 arr.push('563')

// 함수 타입
// const hello: (msg: string) => string=(msg) => {
//     return msg
// }
// const hello: (msg: string) => string=(msg) => msg
// const hello : (a:string, b:string) => string = (a,b) => a
const hello: (a: string, b: number) => (msg, xyz) => {
    return msg
}
