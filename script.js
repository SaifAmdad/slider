const sliderItems = document.querySelectorAll(".slide-show-item");

console.log(sliderItems);

let count = 1;
setInterval(() => {
  count++;
  let showing = document.querySelector(".show");
  showing.classList.remove("show");
  if (count > sliderItems.length) {
    count = 1;
    sliderItems[0].classList.add("show");
  } else {
    showing.nextElementSibling.classList.add("show");
  }
}, 2000);
