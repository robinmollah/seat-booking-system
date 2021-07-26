const DB = require("../conn");

const USER_TABLE = "17201010_users";

module.exports.login = (email, password, callback) => {
	DB.query(`SELECT email, password FROM ${USER_TABLE} WHERE \`email\` = '${email}'`, {}, callback)
}

module.exports.signup = (userData, callback) => {
	DB.query(`INSERT INTO \`17201010_users\`(
    \`email\`,
    \`password\`,
    \`sid\`,
    \`name\`
) VALUES (
    '${userData.email}',
    '${userData.password}',
    '${userData.sid}',
    '${userData.name}');
 `,
		{}, callback);
}
