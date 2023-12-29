const carrosel = document.getElementById("carousel-example");
const instanceOptions = {
  id: "carousel-example",
  override: true,
};

const items = [
  {
    position: 0,
    card01: document.getElementById("carousel-item-1"),
  },
  {
    position: 1,
    card02: document.getElementById("carousel-item-2"),
  },
  {
    position: 2,
    card03: document.getElementById("carousel-item-3"),
  },
];
const options = {
  defaultPosition: 1,
  interval: 3000,

  indicators: {
    activeClasses: "bg-white dark:bg-gray-800",
    inactiveClasses:
      "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
    items: [
      {
        position: 0,
        card01: document.getElementById("carousel-item-1"),
      },
      {
        position: 1,
        card02: document.getElementById("carousel-item-2"),
      },
      {
        position: 2,
        card03: document.getElementById("carousel-item-3"),
      },
    ],
  },
};
function onNext() {
  console.log("next slider item is shown");
}

function onPrev() {
  console.log("next slider item is shown");
}
