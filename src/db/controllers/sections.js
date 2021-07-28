const DB = require("../conn");

const SECTIONS_TABLE = "17201010_courses";

module.exports.get = (callback) => {
	DB.query(`SELECT * from ${SECTIONS_TABLE}`, {}, callback);
}
