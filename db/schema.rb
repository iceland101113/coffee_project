# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180726134740) do

  create_table "coffee_data", force: :cascade do |t|
    t.string "name"
    t.integer "wifi"
    t.integer "seat"
    t.integer "quiet"
    t.integer "tasty"
    t.integer "cheap"
    t.integer "music"
    t.string "address"
    t.string "latitude"
    t.string "longitude"
    t.string "url"
    t.string "limited_time"
    t.string "socket"
    t.string "standing_desk"
    t.string "mrt"
    t.string "open_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "county_id"
    t.index ["county_id"], name: "index_coffee_data_on_county_id"
  end

  create_table "counties", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
