var mainForm = document.querySelector('#main-form');

for (var i = 0; i < formData.length; i++) {
  var formInput = formData[i];
  var elementInput = formInput.type;
  var elementLabel = formInput.label;
  var elementId = formInput.id;
  var elementIcon = formInput.icon;
  var elementOptions = formInput.options;
  var newElement;

  if (elementInput == "select") {
    newElement = document.createElement('select');
    var placeholderOption = document.createElement("option");
    placeholderOption.value = '';
    placeholderOption.text = elementLabel;
    placeholderOption.disabled = true;
    placeholderOption.setAttribute("selected", "selected");
    newElement.add(placeholderOption);
    for (var j = 0; j < elementOptions.length; j++) {
      var selectorOption = elementOptions[j];
      var newOption = document.createElement("option");
      newOption.text = selectorOption.label;
      newOption.value = selectorOption.value;
      newElement.add(newOption);
    }
  } else if (elementInput == "textarea") {
    newElement = document.createElement('textarea');
  } else {
    newElement = document.createElement('input');
  }

  //Setting the initial object to have the same properties as the form label
  newElement.type = elementInput;
  newElement.Label = elementLabel;
  newElement.placeholder = elementLabel;
  newElement.id = elementId;
  newElement.icon = elementIcon;
  newElement.options = elementOptions;

  //creating a div element for the icon
  var iconDiv = document.createElement('div');

  //If loop to test if the item should have an icon

  if (newElement.icon) {
    var fontIcons = document.createElement('i');
    fontIcons.classList.add('fa', newElement.icon);
    iconDiv.append(fontIcons);
  }
  iconDiv.append(newElement);
  mainForm.append(iconDiv);
  mainForm.append(newElement)
}

var buttonDiv = document.createElement('div');
buttonDiv.classList.add('button-div');
var submit = document.createElement('button');
submit.setAttribute("type", "submit");
submit.innerHTML = "Submit form";
buttonDiv.append(submit);
mainForm.append(buttonDiv);
