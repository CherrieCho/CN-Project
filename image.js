const img = "tropical_sky";

//js에서 이미지 태그 생성하기
const bgImage = document.createElement("img");
bgImage.src = `./image/tropical_sky.jpg`;
//생성한 태그 html에 넣어주기
const body = document.body;
body.appendChild(bgImage);
