// 1. 콜백 함수 : 자신이 아닌 다른 함수에 인수로써 전달된 함수
function main(value) {
  //   console.log(1);
  //   console.log(2);
  value();
  //   console.log("end");
}

main(() => {
  //   console.log("i am sub");
});

// 2. 콜백함수의 활용 -> 중복 코드 발생 줄임
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, function (idx) {
  console.log(idx * 3);
});
