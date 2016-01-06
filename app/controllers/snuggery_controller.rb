class SnuggeryController < ApplicationController
  def index
    @thermostat = Thermostat.first
  end
end
