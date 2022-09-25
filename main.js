function revealMyInfo(myInfo, className, color, animationName) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myInfo;
  htmlElement.style.color = color;

  htmlElement.style.animationDuration = "1s";

  if (animationName === "bgFadeOut") {
    htmlElement.style.animationName = animationName;
  } else if (animationName === "slideIn") {
    htmlElement.style.animationName = animationName;
  } else if (animationName === "heartBeat") {
    htmlElement.style.animationName = animationName;
  }
}

const todayLunch = [
  "두부김치",
  "짬뽕",
  "제육덮밥",
  "냉면",
  "막국수",
  "햄버거",
  "피자",
  "치킨",
  "삼겹살",
];

function choiceTodayLunch() {
  let htmlElement = document.querySelector(".todayLunch");

  htmlElement.innerHTML =
    todayLunch[Math.floor(Math.random() * todayLunch.length)];
}

const myProfile = {
  name: "Eom Junsik",
  age: 26,
  job: "Developer",
  favorite: "Music",
  motto: "Just Do!",
};

function showMe(key) {
  let htmlElement = document.querySelector(".aboutMe");

  htmlElement.innerHTML = myProfile[key];
}
