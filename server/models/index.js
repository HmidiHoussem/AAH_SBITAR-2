const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.patient = require("./patient.model");

db.ROLES = ["user", "Doctor", "Receptionist"];

module.exports = db;
