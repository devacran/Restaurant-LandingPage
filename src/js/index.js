const $catalog = document.getElementById("catalog");
const $catalogNavigation = document.getElementById("catalogNavigation");
const $catalogNavigationButtons = Array.from(
  $catalogNavigation.querySelectorAll("a")
);

const makeNavigationListeners = ($element, controls, movementAmount) => {
  controls.map((control, controlID) => {
    control.addEventListener("click", () => {
      moveElement($element, movementAmount, controlID);
    });
  });
};
const moveElement = ($element, movementAmount, controlID) => {
  // const controlsQty = $element.length;
  // const maxMovement = $element.length * movementAmount;
  const position = controlID * movementAmount;
  move(position);
};

const move = (position) => {
  $catalog.style.transform = `translateX(-${position}px)`;
};
