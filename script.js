//text
const dataInput = document.querySelector("#data");
console.log(dataInput.value);

//colors from here
const mainColorPicker = document.querySelector('#main-color');
const backgroundColorPicker = document.querySelector('#bg-color');

const updateColor = () => {
    const value = e.target.value;
}

const addColorPickerEventListener = () => { 
    mainColorPicker.addEventListener('change', updateColor);
    backgroundColorPicker.addEventListener('change', updateBackgroundColor) 
}

addColorPickerEventListener();