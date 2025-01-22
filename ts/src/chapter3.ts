//함수 타입
function func(a:number,b:number):number {
    return a+b
}
func(5,8)
function func1(a:string,b:number):string {
    return a+b
}
func1("hello",52)

//화살표 함수 타입 정의
const add = (a:number,b:number):number  => a+b

//매개변수 기본값 설정
function introduce(name: string="김혜원"){
    console.log(`name: ${name}`)
}
introduce("김혜투")

//선택적 매개변수 설정
function introduce1(name="김혜원", tall?:number){
    console.log(`name: ${name}`)
    console.log(`tall: ${tall}`)
}

//필수 매개변수값은 항상 선택적 매개변수보다 앞에 있어야함
function introduce3(name="김혜원", age:number, tall?:number){

}

//나머지 매개변수
function getSum(...rest){
    let sum = 0;
    rest.forEach((it) => (sum +=it));
    return sum; 
}