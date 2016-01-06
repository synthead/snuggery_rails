function Thermostat(deltaButtons, temperatureForm, temperatureInput) {
  this.temperatureForm = temperatureForm;
  this.temperatureInput = temperatureInput;

  var thisThermostat = this;

  deltaButtons.mousedown(function(event) {
    var val = parseInt(thisThermostat.temperatureInput.val());
    var delta = $(event.target).data("delta");

    thisThermostat.submitTemperature(val + delta);
  });
};

Thermostat.prototype.submitTemperature = function(temperature) {
  this.temperatureInput.val(temperature);
  this.temperatureForm.trigger("submit.rails");
}

$(function() {
  var temperatureForm = $(".edit_thermostat");
  var temperatureInput = temperatureForm.find("input[type='text']");

  new Thermostat(
      $(".delta-button"),
      temperatureForm,
      temperatureInput
  );

  temperatureForm.on("ajax:complete", function() {
    temperatureInput.blur();
  });
});
