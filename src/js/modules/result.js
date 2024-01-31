import guests from "./guests.js";
function result() {
  function resetScreen() {
    const resetButton = document.getElementById("result-button");
    const resetScreen = document.querySelectorAll("section");

    resetButton.addEventListener("click", () => {
      resetScreen.forEach((section) => {
        if (section.classList.contains("block")) {
          section.classList.remove("block");
          section.classList.add("hidden");
        } else {
          section.classList.remove("hidden");
          section.classList.add("block");
        }
      });
    });
  }
  function totalGuests() {
    const totalGuestsElement = document.getElementById("totalGuests");

    const { getTotalGuests } = guests();
    document.addEventListener("countersUpdated", () => {
      const guestsCount = getTotalGuests();
      const guestsText = guestsCount === 1 ? "convidado" : "convidados";

      totalGuestsElement.innerText = `${guestsCount} ${guestsText}`;
    });
  }
  function guestsList() {
    const guestsListElement = document.getElementById("guestsList");
    const { getTotalByGender } = guests();

    document.addEventListener("countersUpdated", () => {
      const menCount = getTotalByGender("men");
      const womenCount = getTotalByGender("women");
      const childrenCount = getTotalByGender("children");

      const menText = menCount <= 1 ? "homem" : "homens";
      const womenText = womenCount <= 1 ? "mulher" : "mulheres";
      const childrenText = childrenCount <= 1 ? "criança" : "crianças";

      const menListItem = `<li class="flex items-center gap-2"><img class="w-10 h-10 rounded-full" src="./assets/img/user-men.png" alt="Rounded avatar"><span>${menCount} ${menText}</span></li>`;
      const womenListItem = `<li class="flex items-center gap-2"><img class="w-10 h-10 rounded-full" src="./assets/img/user-women.png" alt="Rounded avatar"><span>${womenCount} ${womenText}</span></li>`;
      const childrenListItem = `<li class="flex items-center gap-2"><img class="w-10 h-10 rounded-full" src="./assets/img/user-children.png" alt="Rounded avatar"><span>${childrenCount} ${childrenText}</span></li>`;

      guestsListElement.innerHTML = menListItem + womenListItem + childrenListItem;
    });
  }
  function updateMeatTableFromCheckboxes() {
    const meatCheckboxes = document.querySelectorAll('input[type="checkbox"][data-type="meat"]');
    const tableBody = document.querySelector("#tableMeats tbody");
    const tableFoot = document.querySelector("#tableMeats tfoot");

    const { getTotalByGender } = guests();

    meatCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const menCount = getTotalByGender("men");
        const womenCount = getTotalByGender("women");
        const childrenCount = getTotalByGender("children");

        const meatConsumptionRates = {
          men: 0.4,
          women: 0.32,
          children: 0.2,
        };

        let totalMeat = 0;
        let totalSelectedMeat = 0;

        tableBody.innerHTML = "";

        meatCheckboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            const itemName = checkbox.nextElementSibling.innerText;
            const itemUnit =
              itemName.toLowerCase().includes("pão de alho") || itemName.toLowerCase().includes("queijo coalho")
                ? "un"
                : "kg";
            let meatAmount = 0;

            if (
              itemUnit === "kg" &&
              !itemName.toLowerCase().includes("pão de alho") &&
              !itemName.toLowerCase().includes("queijo coalho")
            ) {
              meatAmount =
                menCount * meatConsumptionRates.men +
                womenCount * meatConsumptionRates.women +
                childrenCount * meatConsumptionRates.children;
              totalMeat += meatAmount;
            } else if (
              itemName.toLowerCase().includes("pão de alho") ||
              itemName.toLowerCase().includes("queijo coalho")
            ) {
              meatAmount = menCount * 2 + womenCount * 2 + childrenCount;
            }

            if (
              itemUnit === "kg" &&
              !itemName.toLowerCase().includes("pão de alho") &&
              !itemName.toLowerCase().includes("queijo coalho")
            ) {
              const numSelectedMeats = Array.from(meatCheckboxes).filter(
                (cb) =>
                  cb.checked &&
                  !cb.nextElementSibling.innerText.toLowerCase().includes("pão de alho") &&
                  !cb.nextElementSibling.innerText.toLowerCase().includes("queijo coalho")
              ).length;
              const meatPerType = meatAmount / numSelectedMeats;
              meatAmount = meatPerType;
            }

            const row = document.createElement("tr");
            row.innerHTML = `
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${itemName}</th>
                        <td class="px-6 py-4">${itemUnit === "kg" ? meatAmount.toFixed(2) : meatAmount} ${itemUnit}</td>
                    `;
            tableBody.appendChild(row);

            if (
              itemUnit === "kg" &&
              !itemName.toLowerCase().includes("pão de alho") &&
              !itemName.toLowerCase().includes("queijo coalho")
            ) {
              totalSelectedMeat += meatAmount;
            }
          }
        });

        tableFoot.querySelector("td").innerText = `${totalSelectedMeat.toFixed(2)} kg`;
      });
    });
  }

  document.addEventListener("DOMContentLoaded", updateMeatTableFromCheckboxes);

  function updateSideDishesTableFromCheckboxes() {
    const sideDishesCheckboxes = document.querySelectorAll('input[type="checkbox"][data-type="sideDish"]');
    const tableBody = document.querySelector("#tableSideDishes tbody");
    const { getTotalByGender } = guests();

    sideDishesCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const menCount = getTotalByGender("men");
        const womenCount = getTotalByGender("women");
        const childrenCount = getTotalByGender("children");

        const sideDishesConsumptionRates = {
          men: {
            arroz: 0.2,
            farofa: 0.1,
            vinagrete: 0.1,
            salada_de_maionese: 0.15,
          },
          women: {
            arroz: 0.15,
            farofa: 0.08,
            vinagrete: 0.08,
            salada_de_maionese: 0.1,
          },
          children: {
            arroz: 0.1,
            farofa: 0.05,
            vinagrete: 0.05,
            salada_de_maionese: 0.08,
          },
        };

        let totalSelectedSideDishes = {
          arroz: 0,
          farofa: 0,
          vinagrete: 0,
          salada_de_maionese: 0,
        };

        tableBody.innerHTML = "";

        sideDishesCheckboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            const itemName = checkbox.nextElementSibling.innerText;
            let sideDishAmount = 0;

            if (itemName.includes("Arroz")) {
              sideDishAmount =
                menCount * sideDishesConsumptionRates.men.arroz +
                womenCount * sideDishesConsumptionRates.women.arroz +
                childrenCount * sideDishesConsumptionRates.children.arroz;
              totalSelectedSideDishes.arroz += sideDishAmount;
            } else if (itemName.includes("Farofa")) {
              sideDishAmount =
                menCount * sideDishesConsumptionRates.men.farofa +
                womenCount * sideDishesConsumptionRates.women.farofa +
                childrenCount * sideDishesConsumptionRates.children.farofa;
              totalSelectedSideDishes.farofa += sideDishAmount;
            } else if (itemName.includes("Vinagrete")) {
              sideDishAmount =
                menCount * sideDishesConsumptionRates.men.vinagrete +
                womenCount * sideDishesConsumptionRates.women.vinagrete +
                childrenCount * sideDishesConsumptionRates.children.vinagrete;
              totalSelectedSideDishes.vinagrete += sideDishAmount;
            } else if (itemName.includes("Salada de Maionese")) {
              sideDishAmount =
                menCount * sideDishesConsumptionRates.men.salada_de_maionese +
                womenCount * sideDishesConsumptionRates.women.salada_de_maionese +
                childrenCount * sideDishesConsumptionRates.children.salada_de_maionese;
              totalSelectedSideDishes.salada_de_maionese += sideDishAmount;
            }

            const row = document.createElement("tr");
            row.innerHTML = `
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${itemName}</th>
                      <td class="px-6 py-4">${sideDishAmount.toFixed(2)} kg</td>
                  `;
            tableBody.appendChild(row);
          }
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", updateSideDishesTableFromCheckboxes);

  function updateDrinksTableFromCheckboxes() {
    const drinksCheckboxes = document.querySelectorAll('input[type="checkbox"][data-type="drinks"]');
    const tableBody = document.querySelector("#tableDrinks tbody");
    const { getTotalByGender } = guests();

    drinksCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        tableBody.innerHTML = "";

        const menCount = getTotalByGender("men");
        const womenCount = getTotalByGender("women");
        const childrenCount = getTotalByGender("children");

        drinksCheckboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            const itemName = checkbox.nextElementSibling.innerText;
            let drinkAmount = 0;
            let unit = "";

            switch (itemName) {
              case "Água":
                drinkAmount = Math.ceil((menCount + womenCount + childrenCount) / 5);
                unit = "L";
                break;
              case "Cerveja":
                drinkAmount = (menCount + womenCount) * 3;
                unit = "de 600ml";
                break;
              case "Refrigerante":
                drinkAmount = Math.ceil((menCount + womenCount + childrenCount) / 5);
                unit = "de 2L";
                break;
              case "Suco":
                drinkAmount = Math.ceil((menCount + womenCount + childrenCount) / 5);
                unit = "L";
                break;
              default:
                break;
            }

            const row = document.createElement("tr");
            row.innerHTML = `
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${itemName}</th>
                        <td class="px-6 py-4">${drinkAmount} ${unit}</td>
                    `;
            tableBody.appendChild(row);
          }
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", updateDrinksTableFromCheckboxes);

  function updateSuppliesTableFromCheckboxes() {
    const suppliesCheckboxes = document.querySelectorAll('input[type="checkbox"][data-type="supplies"]');
    const tableBody = document.querySelector("#tableSupplies tbody");
    const { getTotalGuests } = guests();

    suppliesCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        tableBody.innerHTML = "";

        suppliesCheckboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            const itemName = checkbox.nextElementSibling.innerText;
            let supplyAmount = 0;
            let unit = "";

            switch (itemName) {
              case "Carvão":
                supplyAmount = getTotalGuests() * 1;
                unit = "kg";
                break;
              case "Sal Grosso":
                supplyAmount = getTotalGuests() * 0.04;
                unit = "kg";
                break;
              case "Gelo":
                supplyAmount = Math.ceil(getTotalGuests() / 10) * 5;
                unit = "kg";
                break;
              default:
                break;
            }

            const row = document.createElement("tr");
            row.innerHTML = `
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${itemName}</th>
                      <td class="px-6 py-4">${supplyAmount.toFixed(2)} ${unit}</td>
                  `;
            tableBody.appendChild(row);
          }
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", updateSuppliesTableFromCheckboxes);

  function printList() {
    const printButton = document.getElementById("print-button");
    printButton.addEventListener("click", () => {
      window.print();
    });
  }

  function resetAll() {
    const remakeButton = document.getElementById("remake-button");
    remakeButton.addEventListener("click", () => {
      window.location.reload();
    });
  }

  resetScreen();
  totalGuests();
  guestsList();
  printList();
  resetAll();
}

export default result;
