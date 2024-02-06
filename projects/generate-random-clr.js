//Generate a random color
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());
let intervalId;
const startChangeingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1500);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangeingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangeingColor);

document.querySelector("#stop").addEventListener("click", stopChangeingColor);
