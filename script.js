//text
const dataInput = document.querySelector("#data");

//colors from here
const mainColorPicker = document.querySelector("#color");
const bgColorPicker = document.querySelector("#bg-color");

const mainColorValue = document.querySelector("#color-value");
const bgColorValue = document.querySelector("#bg-color-value");

const updateColor = (e) => {
  const value = e.target.value;
  mainColorValue.innerText = value;
};

const updateBgColor = (e) => {
  const value = e.target.value;
  bgColorValue.innerText = value;
};

const addColorPickerEventListener = () => {
  mainColorPicker.addEventListener("change", updateColor);
  bgColorPicker.addEventListener("change", updateBgColor);
};

addColorPickerEventListener();
