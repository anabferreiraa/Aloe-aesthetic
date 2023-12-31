let carrosel = document.getElementById("carousel-example");
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");

const maxItems = items.length;

controls.forEach((controls) => {
  controls.addEventListener("click", () => {
    const isLeft = controls.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }
    if (currentItem >= maxItems) {
      currentItem = 0;
    }
    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("currente-item"));
    console.log("controls clicked", isLeft, currentItem);

    items[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });
    items[currentItem].classList.add("currente-item");
  });
});
