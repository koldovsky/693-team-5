const coll = document.getElementsByClassName("faq__collapsible");
const cont = document.getElementsByClassName("faq__content");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    cont[i].classList.toggle("active");
  });
}