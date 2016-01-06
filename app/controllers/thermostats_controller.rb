class ThermostatsController < ApplicationController
  def update
    Thermostat.find(params[:id]).update(params[:thermostat].to_hash)
    render text: "Updated."
  end
end

