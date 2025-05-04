// 1. 묵시적 형 변환
// -> 자바 스크립트엔진이 알아서 형 변환

let num = 10;
let str = "20";

const result = num+str; //num이 str로 변환됨 ->문자열간 덧셈
// 숫자+문자 --> 문자열형으로 묵시적 변환

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용하여 직접 형 변환
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
// 문자열 -> 숫자 ----> 숫자 + 숫자 가 됨!

let str2 = "10개";
let strToNum2 = parseInt(str2);

// 숫자 -> 문자
let num1 = 20;
let numToStr1 = String(num1);






