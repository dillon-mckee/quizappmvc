// defining Model as a function
// setting this.text to empty string
// setting this.OnChange to null
var Model = function() {
  this.text = "";
  this.onUpdate = null;
};

// Adding setText method which converts everything to uppercase
// eventListener listening for change on DOM
Model.prototype.setText = function(value) {
  this.text = value.toUpperCase();
  if (this.onUpdate) {
    this.onUpdate(this.text);
  }
};

// View function taking two parameters: a selector for the input
// and an optional initial value.
// setting this.OnChange to null
// eventListener for change of input

 var View = function(elementSelector, initialValue) {
    this.element = $(elementSelector);
    this.setValue(initialValue || '');
    this.onChange = null;

    this.element.on('input', this.onInput.bind(this));
};

// Adding onInput method that listens for input event and calls onChange


View.prototype.onInput = function() {
    var value = this.element.val();
    if (this.onChange) {
        this.onChange(value);
    }
};

// Defining setValue method to retrieve value of text

View.prototype.setValue = function(text) {
    this.element.val(text);
};

// controller links  the callbacks from the model and the view
// to their corresponding actions using .bind.
// When the user enters something in the view, the model's text
// is changed. And when the model's text is changed, the view
// has its value updated.

var Controller = function(model, view) {
  view.onChange = model.setText.bind(model);
  model.onUpdate = view.setValue.bind(view);
};

//document.addEventListener('DOMContentLoaded', function() {
    var model = new Model();
    var view = new View('.uppercase');
    var controller = new Controller(model, view);
//});
