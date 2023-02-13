import * as model from "./model.js";
import formView from "./views/formView.js";
import passwordView from "./views/passwordView.js";

function printCurrentState() {
  console.log(JSON.stringify(model.state, null, 2));
}

const controlLengthSlider = function (currentValue) {
  // 1. Update passwordLength in the state
  model.updatePasswordLength(currentValue);
  // 2. Update the change to the UI
  formView.renderPasswordLength(currentValue);
};

const controlPasswordOptions = function (optionChecked) {
  formView.renderPasswordOptions(optionChecked);
};

const init = function () {
  formView.addHandlerPageLoad(model.state);
  formView.addHandlerPasswordLengthSlider(controlLengthSlider);
  formView.addHandlerPasswordOptions(controlPasswordOptions);
};
init();
