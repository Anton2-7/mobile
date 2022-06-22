function f1() {
  let a = document.querySelector(".container__reg-button-next");
  a.classList.add("bt-active");
}
document.querySelector(".container__input-reg-username").onclick = f1;
