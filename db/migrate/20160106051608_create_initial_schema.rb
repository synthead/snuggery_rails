class CreateInitialSchema < ActiveRecord::Migration
  def change
    create_table :thermostats do |t|
      t.integer :temperature, default: 70
      t.boolean :enabled, default: true
    end
  end
end
