const gallery_grids = document.querySelectorAll(".gallery_grids img");
const modal = document.querySelector(".modal");
const modalimg = document.querySelector(".modalimg");
const close = document.querySelector(".close");

gallery_grids.forEach(image => {
    image.addEventListener("click", () => {
        modalimg.src = image.src;
        modal.classList.add("appear");
        close.addEventListener("click", () => {
            modal.classList.remove("appear");
        });
    });
});
