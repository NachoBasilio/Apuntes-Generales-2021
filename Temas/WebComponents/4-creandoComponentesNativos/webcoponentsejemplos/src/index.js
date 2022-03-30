import "./components/PersonajeDiver";

const container = document.querySelector(".container");

container.addEventListener("MainInfo", (e) => {
  const data = e.detail;
  const links = document.querySelector(".links");
  links.textContent = data;
});
