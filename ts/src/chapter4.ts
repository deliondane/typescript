let unknownValue: unknown;
// let z: number = unknownValue;
let z: unknown = 1;
let w: unknown = "hello";
let x: unknown = null;
let v: unknown = undefined;
let y: unknown = [];
let c: unknown = {};
let l: unknown = () => {};

let s: string = unknownValue;

function errorFun(): never {
    throw new Error()
}

//never
let nevers: never
let q: number = nevers;
let w: {} = nevers;

let h 