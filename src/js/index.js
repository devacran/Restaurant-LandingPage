const $catalog = document.getElementById("catalog");
const $catalogNavigation = document.getElementById("catalogNavigation");
const catalogControls = Array.from($catalogNavigation.querySelectorAll("a"));

const $bookSlider = document.getElementById("bookSlider");
const bookSliderControls = Array.from(
  document.querySelectorAll(".bookSlider__control")
);

const $testimonialSlider = document.getElementById("testimonialSlider");
const testimonialSliderControls = Array.from(
  document.querySelectorAll(".testimonialSlider__control")
);

class MoveElement {
  constructor($element, movementAmount) {
    this.element = $element;
    this.movementAmount = movementAmount;
  }
  moveElement(controlID) {
    const position = controlID * this.movementAmount;
    this.element.style.transform = `translateX(-${position}px)`;
  }
}

class MoveElementControl extends MoveElement {
  constructor($element, controls, movementAmount) {
    super($element, movementAmount);
    this.controls = controls;
    this.makeControlsListeners();
  }
  makeControlsListeners() {
    this.controls.map((control, controlID) => {
      control.addEventListener("click", () => {
        this.moveElement(controlID);
      });
    });
  }
}

const catalog = new MoveElementControl($catalog, catalogControls, 1000);
const testimonialSlider = new MoveElementControl(
  $testimonialSlider,
  testimonialSliderControls,
  600
);
const bookSlider = new MoveElementControl($bookSlider, bookSliderControls, 600);
