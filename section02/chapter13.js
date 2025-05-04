function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

add10(0);

// promise 대기,성공,실패

const promise = new Promise((resolve, reject) => {
  //비동기 작업
  // executor

  setTimeout(() => {
    const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});

// then 메서드
// -> 그 후에

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
