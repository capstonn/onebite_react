for (let idx = 0; idx < 5; idx++) {
  if (idx % 2 === 0) {
    continue; //2로 나누어 떨어지면 밑 코드 실행 x
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
