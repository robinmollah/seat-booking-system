const DB = require('./conn');

DB.query("-- DROP TABLE \"17201010_courses\" -------------------------------\n" +
	"DROP TABLE IF EXISTS `17201010_courses` CASCADE;\n" +
	"-- -------------------------------------------------------------\n", {}, console.log);

DB.query("-- DROP TABLE \"17201010_users\" -------------------------------\n" +
	"DROP TABLE IF EXISTS `17201010_courses` CASCADE;\n" +
	"-- -------------------------------------------------------------\n", {}, console.log);
