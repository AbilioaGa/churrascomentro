function guests() {
  function counterGuest() {
    const menCounter = document.getElementById("menCounter");
    const womenCounter = document.getElementById("womenCounter");
    const childrenCounter = document.getElementById("childrenCounter");

    let menCount = 0;
    let womenCount = 0;
    let childrenCount = 0;

    function updateCounter(counterElement, count) {
      if (counterElement) {
        counterElement.textContent = count;
      }
    }

    function updateCounterAndDispatchEvent(counter, count) {
      updateCounter(counter, count);
      const countersUpdatedEvent = new CustomEvent("countersUpdated", {
        detail: { menCount, womenCount, childrenCount },
      });
      document.dispatchEvent(countersUpdatedEvent);
    }

    function updateCountAndDispatchEvent(count, type) {
      switch (type) {
        case "men":
          menCount += count;
          menCount = Math.max(0, menCount);
          updateCounterAndDispatchEvent(menCounter, menCount);
          break;
        case "women":
          womenCount += count;
          womenCount = Math.max(0, womenCount);
          updateCounterAndDispatchEvent(womenCounter, womenCount);
          break;
        case "children":
          childrenCount += count;
          childrenCount = Math.max(0, childrenCount);
          updateCounterAndDispatchEvent(childrenCounter, childrenCount);
          break;
        default:
          console.error("Invalid counter group");
      }
    }

    document.getElementById("decrementMen").addEventListener("click", function() {
      updateCountAndDispatchEvent(-1, "men");
    });

    document.getElementById("incrementMen").addEventListener("click", function() {
      updateCountAndDispatchEvent(1, "men");
    });

    document.getElementById("decrementWomen").addEventListener("click", function() {
      updateCountAndDispatchEvent(-1, "women");
    })

    document.getElementById("incrementWomen").addEventListener("click", function() {
      updateCountAndDispatchEvent(1, "women");
    })

    document.getElementById("decrementChildren").addEventListener("click", function() {
      updateCountAndDispatchEvent(-1, "children");
    })

    document.getElementById("incrementChildren").addEventListener("click", function() {
      updateCountAndDispatchEvent(1, "children");
    })

    function getTotalGuests() {
      return menCount + womenCount + childrenCount;
    }


    function getTotalByGender(gender) {
      switch (gender) {
        case "men":
          return menCount;
        case "women":
          return womenCount;
        case "children":
          return childrenCount;
        default:
          console.error("Invalid gender specified");
          return 0;
      }
    }

    return {
      handleGuests: updateCountAndDispatchEvent,
      getTotalGuests,
      getTotalByGender,
    };
  }

  return counterGuest();
}

export default guests;
