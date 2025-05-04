// // 단락 평가 : 논리 연산 수행시 앞의 갚으로 확정되면 뒤의 값에 접근X

// function returnFalse() {
//   console.log("false 함수");
//   return false;
// }

// function returnTrue() {
//   console.log("true 함수"); //false로만 식이 확정되므로 true는 실행 x 함수 호출 생략
// }

// console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환 " });
