// 함수 선언

function greeting() {
  console.log("안녕하세요");
}

// console.log("호출 전");
// greeting();
// console.log("호출 후");

function getArea(width, height) {
  function another() {
    //중첩 함수
    console.log("another");
  }
  let area = width * height;

  another();
  return area;
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

//호이스팅 : 함수를 밑에다 적어도 함수선언이 위에 있어도 위로 끌어올려서 자동 실행됨
