class SnuggeryController < ApplicationController
  def index
    @thermostat = (Thermostat.first or Thermostat.create)
  end
end
