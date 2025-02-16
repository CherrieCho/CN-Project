//랜덤번호 지정
//유저가 번호를 입력하고 go버튼을 누름
//만약 번호를 맞추면 맞췄습니다!
//번호보다 높게 잎력했으면 down
//번호보다 낮게 입력했으면 up
//reset버튼 누르면 리셋
//3번의 기회를 다 쓰면 go버튼이 disabled
//유저가 1~100 범위 밖의 숫자를 입력하면 기회 깎지 않고 알려준다
//유저가 이미 입력한 숫자를 또 입력하면, 알려주고 기회를 깎지 않는다

let computerNum;
const playButton = document.getElementById("play-button");
const userNum = document.getElementById("user-input");
const result = document.getElementById("result");
const answer = document.getElementById("answer");
const chances = document.getElementById("chances-left");

playButton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  answer.textContent = `정답은? ${computerNum}`;
}

function play() {
  const userValue = userNum.value;

  if (userValue == computerNum) {
    result.textContent = "정답입니다!!!";
  } else if (userValue < 1 || userValue > 100) {
    alert("1부터 100까지의 숫자만 입력 가능합니다!");
  } else if (userValue > computerNum) {
    result.textContent = "DOWN!!!";
  } else if (userValue < computerNum) {
    result.textContent = "UP!!!";
  }
}

pickRandomNum();
