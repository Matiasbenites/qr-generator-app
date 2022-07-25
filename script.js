//text
const dataInput = document.querySelector("#data");

//img format

const imageFormat = document.querySelector('input[name ="format"]:checked');

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

//sliders here

const sizeSlider = document.querySelector("#size");
const marginSlider = document.querySelector("#margin");

const sizeValue = document.querySelector("#size-value");
const marginValue = document.querySelector("#margin-value");

const updateSize = (e) => {
  const value = e.target.value;
  sizeValue.innerText = `${value} x ${value}`;
};

const updateMargin = (e) => {
  const value = e.target.value;
  marginValue.innerText = `${value} px`;
};

const addSliderEventListeners = () => {
  sizeSlider.addEventListener("change", updateSize);
  marginSlider.addEventListener("change", updateMargin);
};

addSliderEventListeners();

//submit
const submitButton = document.querySelector("#cta");

const prepareParameters = (params) => {
  return {
    data: params.data,
    size: `${params.size} x ${params.size}`,
    color: params.color.replace("#", ""),
    bgcolor: params.bgColor.replace("#", ""),
    qzone: params.qZone,
    format: params.format,
  };
};

const getQrCode = (parameters) => {
  console.log(new URLSearchParams(parameters).toString());
  const baseUrl = "http://api.qrserver.com/v1/create-qr-code/";
  // const urlParams

  //fetch()...
};

const onSubmit = () => {
  console.log("clicked");

  const data = dataInput.value;
  const color = mainColorPicker.value;
  const bgColor = bgColorPicker.value;
  const size = sizeSlider.value;
  const qZone = marginSlider.value;
  const format = imageFormat.value;

  const parameters = prepareParameters({
    data,
    color,
    bgColor,
    size,
    qZone,
    format,
  });

  getQrCode(parameters);
};

const addSubmitEventListener = () => {
  submitButton.addEventListener("click", onSubmit);
};

addSubmitEventListener();
