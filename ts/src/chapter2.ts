//타입별칭 인덱스 시그니처
//타입별칭 변수처럼 해주는 문법
type User={
    id:number;
    name:string;
    nickname:string;
    birth:string;
    location:string;
}
let user9: User={
    id: 1,
    name: "hyewon",
    nickname: "deliondane",
    birth: "010927",
    location: "제주시"
}

//인덱스 시그니처
//: 객체 타입을 유연하게 정의할 수 있도록 도와주는 특수한 문법
type CountryCodes = {
    Korea: string;
    UnitedState: string;
}
let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
}

//열거형 enum
enum Role{
    ADMIN=0,
    USER=100,
    GUEST=2,
}
const user8={
    name: "김혜투",
    role:Role.ADMIN, //0
}
const user7={
    name: "김혜삼",
    role:Role.USER, //100
}
const user6={
    name: "김혜사",
    role:Role.GUEST, //101
}

//any unknwon
//any
let anyVar: any=10;
anyVar="java";
anyVar=true;
anyVar={};
anyVar.toUpperCase();
anyVar.toFixed();

//unknwon-any비슷하지만 보다 안전한 타입
let unknownVar: unknown;
unknownVar= "";
unknownVar= 1;
unknownVar=() => {};
//num = unknownVar
if(typeof unknownVar === "number"){
    unknownVar*3
}

//void never
//void 아무런 값도 없음을 의미
function func2() {
    console.log("hello");
    return
}