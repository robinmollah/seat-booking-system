const DB = require("../conn");

const SECTIONS_TABLE = "17201010_courses";

module.exports.get = (callback) => {
	DB.query(`SELECT * from ${SECTIONS_TABLE}`, {}, section_info => {
		DB.query(`SELECT COUNT(*) as value FROM 17201010_users GROUP BY section`, {}, section_count => {
			callback({
				sections: section_info,
				count: section_count
			})
		})
	});
}

module.exports.take = (email, section_id, callback) => {
	DB.query(`UPDATE 17201010_users SET section = '${section_id}' WHERE email = '${email}'`, {}, callback)
}

module.exports.students = (section_id, callback) => {
	DB.query(`SELECT * FROM 17201010_users WHERE section = '${section_id}'`, {}, callback);
}
