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
  new Thermostat(
      $(".delta-button"),
      $(".edit_thermostat"),
      $(".edit_thermostat input[type='text']")
  );

  $(".edit_thermostat").on("ajax:complete", function(event) {
    $(event.target).find("input[type='text']").blur();
  });
});
