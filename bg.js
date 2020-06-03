const body = document.querySelector("body");

const genRandom = () => {
  imageNumber = Math.floor(Math.random() * 5);
  //   console.log(imageNumber);
  return imageNumber;
};

const paintImage = (imageNumber) => {
  const image = new Image();
  image.classList.add("bgImage");
  image.src = `images/${imageNumber + 1}.jpg`;
  body.appendChild(image);
};
const initBg = () => {
  const imageNumber = genRandom();
  paintImage(imageNumber);
};

setInterval(initBg, 5000);
