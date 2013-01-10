var mysql = require('mysql');
var util = require('util');
var client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'training'
});
client.connect();

client.query({nestTables: true, sql: "SELECT * FROM data"}, function (err, results) {
  if (err) console.error(err);
  console.log(util.inspect(results, 2, null, true));
  process.exit();
});