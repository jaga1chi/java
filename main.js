/* //변수 만들기//
var a = 10  // let
console.log(a) // print(a)

const b = 20 // 상수 : 한번 정하면 바뀌지 않음
console.log(b)

a = a+40
console.log(a)



var num1 =  10
var num2 = 30
var s = `${num1} + ${num2} = ${num1 +num2}`    //백플레시(탭 위)// : 포메팅 방식
console.log(s)

// 문자열

var s = "abcde"
console.log(s[0])
console.log(s.slice(1,3))


//리스트

var a = [1,2,3]
console.log(a)

var c = Array(10)  // 빈 공간의 리스트 만들때 사용
console.log(c)

//추가
a.push(5)
console.log(a)

//삭제
a.pop()
console.log(a)
a.shift()
console.log(a)
 
//조건문
var a = 10
if (a > 10){
    console.log("크다")
}
else if (a < 10){
    console.log("작다")
}
else {
    console.log("같다")
}
 ===,== : 같다 표현

//반복
for(var i = 1 ; i < 11 ; i+=2){
    console.log(i)
}
i = 0
while(i < 10){
    i++
    console.log(i) 
}
*/

/*//구구단 1단 부처 19단까지 출력하기
s = 1
i = 2
for (var s = 1 ; s < 20 ; s++){
    for(var i = 1 ; i < 20 ; i++){
        console.log(`${s} * ${i} = ${s * i}`)}
    }

//1부터 3452까지 숫자의 합을 반복문으로 구하시오
a = 0
for (var i = 1 ; i < 3453 ; i++){
     a =  a + i
}
console.log(a)
*/

//객체
var dino = {
    x : 10,
    y : 20,
    w : 100,
    h : 100,
    draw(){
        console.log(this.x)
        console.log("그리기 함수")
    }
}

dino.draw()