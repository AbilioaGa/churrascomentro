function pages() {
  document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector("[data-prev]");
    const nextButton = document.querySelector("[data-next]");
    const sections = document.querySelectorAll("#wrap > div");

    let currentIndex = 0;

    prevButton.classList.add("hidden");

    nextButton.addEventListener("click", function () {
      sections[currentIndex].classList.add("hidden");
      currentIndex++;
      sections[currentIndex].classList.remove("hidden");
      prevButton.classList.remove("hidden");

      if (currentIndex === sections.length - 1) {
        nextButton.classList.add("hidden");
      }

      nextButton;
    });

    prevButton.addEventListener("click", function () {
      sections[currentIndex].classList.add("hidden");
      currentIndex--;
      sections[currentIndex].classList.remove("hidden");
      nextButton.classList.remove("hidden");

      if (currentIndex === 0) {
        prevButton.classList.add("hidden");
      }
    });
  });
}

export default pages;
