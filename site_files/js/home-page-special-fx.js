const mooSound = new Audio(
  "/site_files/assets/home_page/animal_bull_scottish_highland_moo_002.mp3"
);

function playMoo() {
  mooSound.currentTime = 0; // Rewinds sound file if clicked multiple times rapidly
  mooSound.play();
}

document.addEventListener("DOMContentLoaded", function () {
  function typeWriter(text, i) {
    const typeText = document.querySelector("#hero-heading");
    if (i < text.length) {
      typeText.innerHTML =
        text.substring(0, i + 1) + '<span class="cursor"></span>';

      setTimeout(() => {
        typeWriter(text, i + 1);
      }, 110);
    } else {
      setTimeout(() => {
        document.querySelector(".cursor").classList.add("cursor-stop");
      }, 1800);
    }
  }

  typeWriter("Hi, I'm Parker.", 0);
});
