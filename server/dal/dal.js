const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "developmentgroupmeetings"
});

connection.connect(err => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("We're connected.");
});

function execute(sql) {
    return new Promise ((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

module.exports = { execute };