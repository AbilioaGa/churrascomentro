function meats() {
  function toggleTabs() {
    document.addEventListener("DOMContentLoaded", () => {
      const tabs = document.querySelectorAll('[role="tab"]');
      const tabContents = document.querySelectorAll('[role="tabpanel"]');

      tabContents[0].classList.remove("hidden");
      tabs[0].classList.add("active");
      tabs[0].setAttribute("aria-selected", "true");

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          tabContents.forEach((content) => {
            content.classList.add("hidden");
          });

          tabs.forEach((tab) => {
            tab.classList.remove(
              "active",
              "text-[#a6f750]",
              "border-[#a6f750]",
              "dark:text-[#a6f750]",
              "dark:border-[#a6f750]"
            );
            tab.classList.add("text-gray-500", "border-transparent", "dark:text-gray-400");
            tab.setAttribute("aria-selected", "false");
          });

          tab.classList.add(
            "active",
            "text-[#a6f750]",
            "border-[#a6f750]",
            "dark:text-[#a6f750]",
            "dark:border-[#a6f750]"
          );
          tab.classList.remove("text-gray-500", "border-transparent", "dark:text-gray-400");
          tab.setAttribute("aria-selected", "true");

          const targetId = tab.getAttribute("data-tabs-target");

          const targetContent = document.querySelector(targetId);
          targetContent.classList.remove("hidden");
        });

        tab.addEventListener("mouseenter", () => {
          if (!tab.classList.contains("active")) {
            tab.classList.add("hover:text-[#a6f750]", "hover:border-[#a6f750]", "dark:hover:text-[#a6f750]");
          }
        });

        tab.addEventListener("mouseleave", () => {
          tab.classList.remove("hover:text-[#a6f750]", "hover:border-[#a6f750]", "dark:hover:text-[#a6f750]");
        });
      });
    });
  }
  function oxCuts() {
    const oxCutsCheckboxes = document.querySelectorAll('#ox-cuts input[type="checkbox"]');
    const oxCutsCheckboxesChecked = Array.from(oxCutsCheckboxes).filter((checkbox) => checkbox.checked);
    return oxCutsCheckboxesChecked;
  }

  toggleTabs();
  return { oxCutsCheckboxesChecked: oxCuts() };
}

export default meats;
