function steppers() {
  function stepperGuests() {
    document.addEventListener("DOMContentLoaded", () => {
      const nextButton = document.querySelector("button[data-next]");
      const stepper1SpanElement = document.querySelector("#guests-indicator span");
      const stepper1LiElements = document.querySelector("#guests-indicator");
      const stepper1SvgElements = stepper1SpanElement.querySelectorAll("svg");
      const [svgVisible, svgHidden] = stepper1SvgElements;

      document.addEventListener("countersUpdated", (event) => {
        const { menCount, womenCount, childrenCount } = event.detail;

        const anyCounterGreaterThanZero = menCount > 0 || womenCount > 0 || childrenCount > 0;

        if (anyCounterGreaterThanZero) {
          nextButton.classList.remove("hidden");
          stepper1SpanElement.classList.remove("bg-gray-100", "dark:bg-[#181c19]");
          stepper1SpanElement.classList.add("bg-[#a6f750]", "dark:bg-[#a6f750]");
          stepper1LiElements.classList.remove("after:border-gray-100", "dark:after:border-[#181c19]");
          stepper1LiElements.classList.add("after:border-[#a6f750]", "dark:after:border-[#a6f750]");
          svgVisible.classList.add("hidden");
          svgHidden.classList.remove("hidden");
        } else {
          nextButton.classList.add("hidden");
          stepper1SpanElement.classList.remove("bg-[#a6f750]", "dark:bg-[#a6f750]");
          stepper1SpanElement.classList.add("bg-gray-100", "dark:bg-[#181c19]");
          stepper1LiElements.classList.remove("after:border-[#a6f750]", "dark:after:border-[#a6f750]");
          stepper1LiElements.classList.add("after:border-gray-100", "dark:after:border-[#181c19]");
          svgVisible.classList.remove("hidden");
          svgHidden.classList.add("hidden");
        }
      });
    });
  }
  function stepperMeats() {
    document.addEventListener("DOMContentLoaded", () => {
      const checkboxes = document.querySelectorAll('#meats input[type="checkbox"]');
      const stepper2SpanElement = document.querySelector("#meats-indicator span");
      const stepper2LiElements = document.querySelector("#meats-indicator");
      const stepper2SvgElements = stepper2SpanElement.querySelectorAll("svg");
      const [svgVisible, svgHidden] = stepper2SvgElements;

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          const atLeastOneChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
          if (atLeastOneChecked) {
            stepper2SpanElement.classList.remove("bg-gray-100", "dark:bg-[#181c19]");
            stepper2SpanElement.classList.add("bg-[#a6f750]", "dark:bg-[#a6f750]");
            stepper2LiElements.classList.remove("after:border-gray-100", "dark:after:border-[#181c19]");
            stepper2LiElements.classList.add("after:border-[#a6f750]", "dark:after:border-[#a6f750]");
            svgVisible.classList.add("hidden");
            svgHidden.classList.remove("hidden");
          } else {
            stepper2SpanElement.classList.remove("bg-[#a6f750]", "dark:bg-[#a6f750]");
            stepper2SpanElement.classList.add("bg-gray-100", "dark:bg-[#181c19]");
            stepper2LiElements.classList.remove("after:border-[#a6f750]", "dark:after:border-[#a6f750]");
            stepper2LiElements.classList.add("after:border-gray-100", "dark:after:border-[#181c19]");
            svgVisible.classList.remove("hidden");
            svgHidden.classList.add("hidden");
          }
        });
      });
    });
  }
  function stepperSideDishes() {
    document.addEventListener("DOMContentLoaded", () => {
      const checkboxes = document.querySelectorAll('#sideDishes input[type="checkbox"]');
      const stepper3SpanElement = document.querySelector("#sideDishes-indicator span");
      const stepper3LiElements = document.querySelector("#sideDishes-indicator");
      const stepper3SvgElements = stepper3SpanElement.querySelectorAll("svg");
      const [svgVisible, svgHidden] = stepper3SvgElements;

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          const atLeastOneChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
          if (atLeastOneChecked) {
            stepper3SpanElement.classList.remove("bg-gray-100", "dark:bg-[#181c19]");
            stepper3SpanElement.classList.add("bg-[#a6f750]", "dark:bg-[#a6f750]");
            stepper3LiElements.classList.remove("after:border-gray-100", "dark:after:border-[#181c19]");
            stepper3LiElements.classList.add("after:border-[#a6f750]", "dark:after:border-[#a6f750]");
            svgVisible.classList.add("hidden");
            svgHidden.classList.remove("hidden");
          } else {
            stepper3SpanElement.classList.remove("bg-[#a6f750]", "dark:bg-[#a6f750]");
            stepper3SpanElement.classList.add("bg-gray-100", "dark:bg-[#181c19]");
            stepper3LiElements.classList.remove("after:border-[#a6f750]", "dark:after:border-[#a6f750]");
            stepper3LiElements.classList.add("after:border-gray-100", "dark:after:border-[#181c19]");
            svgVisible.classList.remove("hidden");
            svgHidden.classList.add("hidden");
          }
        });
      });
    });
  }
  function stepperDrinks() {
    document.addEventListener("DOMContentLoaded", () => {
      const checkboxes = document.querySelectorAll('#drinks input[type="checkbox"]');
      const stepper4SpanElement = document.querySelector("#drinks-indicator span");
      const stepper4LiElements = document.querySelector("#drinks-indicator");
      const stepper4SvgElements = stepper4SpanElement.querySelectorAll("svg");
      const [svgVisible, svgHidden] = stepper4SvgElements;

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          const atLeastOneChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
          if (atLeastOneChecked) {
            stepper4SpanElement.classList.remove("bg-gray-100", "dark:bg-[#181c19]");
            stepper4SpanElement.classList.add("bg-[#a6f750]", "dark:bg-[#a6f750]");
            stepper4LiElements.classList.remove("after:border-gray-100", "dark:after:border-[#181c19]");
            stepper4LiElements.classList.add("after:border-[#a6f750]", "dark:after:border-[#a6f750]");
            svgVisible.classList.add("hidden");
            svgHidden.classList.remove("hidden");
          } else {
            stepper4SpanElement.classList.remove("bg-[#a6f750]", "dark:bg-[#a6f750]");
            stepper4SpanElement.classList.add("bg-gray-100", "dark:bg-[#181c19]");
            stepper4LiElements.classList.remove("after:border-[#a6f750]", "dark:after:border-[#a6f750]");
            stepper4LiElements.classList.add("after:border-gray-100", "dark:after:border-[#181c19]");
            svgVisible.classList.remove("hidden");
            svgHidden.classList.add("hidden");
          }
        });
      });
    });
  }
  function stepperSupplies() {
    document.addEventListener("DOMContentLoaded", () => {
      const checkboxes = document.querySelectorAll('#supplies input[type="checkbox"]');
      const stepper5SpanElement = document.querySelector("#supplies-indicator span");
      const stepper5SvgElements = stepper5SpanElement.querySelectorAll("svg");
      const [svgVisible, svgHidden] = stepper5SvgElements;

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          const atLeastOneChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
          if (atLeastOneChecked) {
            stepper5SpanElement.classList.remove("bg-gray-100", "dark:bg-[#181c19]");
            stepper5SpanElement.classList.add("bg-[#a6f750]", "dark:bg-[#a6f750]");
            svgVisible.classList.add("hidden");
            svgHidden.classList.remove("hidden");
          } else {
            stepper5SpanElement.classList.remove("bg-[#a6f750]", "dark:bg-[#a6f750]");
            stepper5SpanElement.classList.add("bg-gray-100", "dark:bg-[#181c19]");
            svgVisible.classList.remove("hidden");
            svgHidden.classList.add("hidden");
          }
        });
      });
    });
  }
  stepperGuests();
  stepperMeats();
  stepperSideDishes();
  stepperDrinks();
  stepperSupplies();
}

export default steppers;
