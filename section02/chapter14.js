// async
// 어떤함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "장수현",
        id: "win",
      });
    }, 1500);
  });
}
console.log(getData());
