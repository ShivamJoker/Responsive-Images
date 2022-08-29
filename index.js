const imgEl = document.querySelector("img");
const imgWidth = document.querySelector("#img-width");
const width = document.querySelector("#device-width");
const expectedWidth = document.querySelector("#expected-width");
const dprText = document.querySelector("#dpr");

let dpr = 0;
let imgWidthVal = 0;

const updateExpectedWidth = () => {
  const rawWidth = imgWidthVal * dpr;
  expectedWidth.innerText = Math.ceil(rawWidth / 250) * 250;
};
new ResizeObserver((e) => {
  imgWidthVal = e[0].contentRect.width;
  imgWidth.innerText = imgWidthVal.toFixed(2);
  updateExpectedWidth();
}).observe(imgEl);

const updatePixelRatio = () => {
  dpr = window.devicePixelRatio;
  dprText.innerText = dpr.toFixed(2);

  updateExpectedWidth();

  matchMedia(`(resolution: ${dpr}dppx)`).addEventListener(
    "change",
    updatePixelRatio,
    { once: true }
  );
};

updatePixelRatio();

width.innerText = window.innerWidth;

window.addEventListener("resize", () => {
  width.innerText = window.innerWidth;
});
