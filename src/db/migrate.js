const DB = require('./conn');

DB.query(`-- CREATE TABLE "17201010_courses" -----------------------------
CREATE TABLE \`17201010_courses\`( 
\t\`seats\` Int( 255 ) NOT NULL DEFAULT 6,
\t\`id\` Int( 255 ) AUTO_INCREMENT NOT NULL,
\t\`name\` VarChar( 255 ) NOT NULL,
\t\`time\` VarChar( 255 ) NOT NULL,
\tCONSTRAINT \`unique_section_id\` UNIQUE( \`id\` ) )
ENGINE = InnoDB;
-- -------------------------------------------------------------
`, {}, console.log);

DB.query(`INSERT INTO \`17201010_courses\`(
    \`seats\`,
    \`id\`,
    \`name\`,
    \`time\`
) VALUES (
    6,
    1,
    'Section-01',
    'Sunday: 12:30PM 1:00PM'
 );
`, {}, console.log);

DB.query(`INSERT INTO \`17201010_courses\`(
    \`seats\`,
    \`id\`,
    \`name\`,
    \`time\`
) VALUES (
    6,
    2,
    'Section-02',
    'Sunday: 2:30PM 4:00PM'
 );
`, {}, console.log);

DB.query(`-- CREATE TABLE "17201010_users" -------------------------------
CREATE TABLE \`17201010_users\`( 
\t\`email\` VarChar( 255 ) NOT NULL,
\t\`password\` VarChar( 255 ) NOT NULL,
\t\`sid\` VarChar( 255 ) NOT NULL,
\t\`name\` VarChar( 255 ) NOT NULL,
\t\`section\` Int( 255 ),
\t\`id\` Int( 255 ) AUTO_INCREMENT NOT NULL,
\tCONSTRAINT \`unique_id\` UNIQUE( \`id\` ) )
ENGINE = InnoDB;
-- -------------------------------------------------------------
`, {}, console.log);


