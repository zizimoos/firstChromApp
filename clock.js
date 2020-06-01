const clockContainer = document.querySelector(".js-clock");
clockYear = clockContainer.querySelector(".clock-year");
clockTitle = clockContainer.querySelector(".clock-title");

const getTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockYear.innerText = `${year}`;
  clockTitle.innerText = `
  ${hours > 9 ? `${hours}` : `0${hours}`}:${
    minutes > 9 ? `${minutes}` : `0${minutes}`
  }:${seconds > 9 ? `${seconds}` : `0${seconds}`}
  `;
};

const init = () => {
  setInterval(getTime, 1000);
};
init();
