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
const sizeValue = document.querySelector("#size-value");

const marginSlider = document.querySelector("#margin");
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

const showInputError = () => {
  dataInput.classList.add("error");
};

const dataInputEventListener = () => {
  dataInput.addEventListener("change", (e) => {
    if (e.target.value !== "") {
      dataInput.classList.remove("error");
      submitButton.removeAttribute("disabled");
    } else {
      dataInput.classList.add("error");
      submitButton.setAttribute("disabled", true);
    }
  });
};

dataInputEventListener();

const prepareParameters = (params) => {
  const prepared = {
    data: params.data,
    size: `${params.size} x ${params.size}`,
    color: params.color.replace("#", ""),
    bgcolor: params.bgColor.replace("#", ""),
    qzone: params.qZone,
    format: params.format,
  };

  return prepared;
};
const settingsContainer = document.querySelector("#qr-code-settings");
const resultsContainer = document.querySelector("#qr-code-result");
const qrCodeImage = document.querySelector("#qr-code-image");

const displayQrCode = (imgUrl) => {
  settingsContainer.classList.add("flipped");
  resultsContainer.classList.add("flipped");

  qrCodeImage.setAttribute("src", imgUrl);
};

const getQrCode = (parameters) => {
  const baseUrl = "http://api.qrserver.com/v1/create-qr-code/";
  const urlParams = new URLSearchParams(parameters).toString();

  const fullUrl = `${baseUrl}?${urlParams}`;

  fetch(fullUrl).then((response) => {
    if (response.status === 200) {
      displayQrCode(fullUrl);
    }
  });
};

const onSubmit = () => {
  console.log("clicked");

  const data = dataInput.value;
  if (!data.length) {
    return showInputError();
  }
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

const editButton = document.querySelector("#edit");

const onEdit = () => {
  settingsContainer.classList.remove("flipped");
  resultsContainer.classList.remove("flipped");
};

const addEditEventListener = () => {
  editButton.addEventListener("click", onEdit);
};

addEditEventListener();
