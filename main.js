// 랜덤번호 지정
// 유저가 번호를 입력하고 go버튼을 누름
// 만약 번호를 맞추면 맞췄습니다!
// 번호보다 높게 잎력했으면 down
// 번호보다 낮게 입력했으면 up
// reset버튼 누르면 리셋
// 3번의 기회를 다 쓰면 go버튼이 disabled
// 유저가 1~100 범위 밖의 숫자를 입력하면 기회 깎지 않고 알려준다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려주고 기회를 깎지 않는다

let computerNum;
let chances = 3;
let gameOver = false;
let history = []; //사용자가 입력한 숫자 기록(중복된 숫자 입력 방지용)
const playButton = document.getElementById("play-button");
const userNum = document.getElementById("user-input");
const result = document.getElementById("result");
const answer = document.getElementById("answer");
const resetButton = document.getElementById("reset-button");
const chanceLeft = document.getElementById("chances-left");

//마우스 올리면 정답 표시
answer.addEventListener("mouseenter", function () {
  answer.textContent = `정답은? ${computerNum}`;
});
// 마우스를 떼면 다시 "정답 보기"로 변경
answer.addEventListener("mouseleave", function () {
  answer.textContent = "정답 보기";
});
userNum.addEventListener("focus", function () {
  userNum.value = "";
}); //입력칸 클릭하면 숫자 사라지게
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  answer.textContent = "정답 보기";
}

function play() {
  const userValue = userNum.value;

  if (userValue == "") {
    alert("숫자를 입력해주세요!");
    return; //다음줄로 내려가지 않고 바로 함수종료(chance가 안 줄어든다)
  }

  if (userValue < 1 || userValue > 100) {
    alert("1부터 100까지의 숫자만 입력 가능합니다!");
    return;
  }

  //사용자가 이미 입력한 숫자를 또 입력할 경우
  if (history.includes(userValue) == true) {
    alert("이미 입력한 숫자입니다!");
    return;
  }

  if (userValue == computerNum) {
    result.textContent = "정답입니다!!!";
    playButton.disabled = true;
    return;
  } else if (userValue > computerNum) {
    result.textContent = "DOWN!!!";
  } else if (userValue < computerNum) {
    result.textContent = "UP!!!";
  }

  chances--; //play버튼을 누를때마다 기회가 1씩 줄어듦
  chanceLeft.textContent = `남은 기회: ${chances}번`;

  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
    chanceLeft.textContent = `GAME OVER`;
  }
}

function reset() {
  userNum.value = ""; //사용자 입력란을 빈칸으로 만듦
  pickRandomNum();
  result.textContent = "결과는?";
  chances = 3;
  chanceLeft.textContent = `남은 기회: ${chances}번`;
  gameOver = false;
  playButton.disabled = false;
  history = [];
}

pickRandomNum();
