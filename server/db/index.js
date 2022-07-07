var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'breweries'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const getAllBreweries = () => {
  console.log("function being called")
  return con.query('SELECT * FROM breweries', (error, results) => {
    if (error) {
      return console.error("HIT ERROR HERE", error.message);
    }
    console.log("RESULTS FROM DB", results);
    return results
  });
}

// getAllBreweries();

module.exports = {
  getAllBreweries
};