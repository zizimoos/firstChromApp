const form = document.querySelector(".js-form"),
  input = document.querySelector("input");
const greetings = document.querySelector(".js-greetings");

const paintGreeting = (currentUser) => {
  form.classList.remove("showing");
  greetings.classList.add("showing");
  greetings.innerHTML = `Hello ${currentUser}`;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = input.value;
  console.log(currentValue);

  paintGreeting(currentValue);
  localStorage.setItem("currentUser", currentValue);
};

const askForName = () => {
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmit);
};

const loadName = () => {
  const currentUser = localStorage.getItem("currentUser");
  console.log(currentUser);
  if (!currentUser) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
};

const initG = () => {
  loadName();
};
initG();
