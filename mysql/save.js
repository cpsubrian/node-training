var mysql = require('mysql');
var async = require('async');
var prompt = require('prompt');
var client = mysql.createConnection({
  host: 'localhost',
  user: 'root'
});

prompt.start();
client.connect();

async.series([

  function (next) {
    client.query("CREATE DATABASE IF NOT EXISTS training", next);
  },

  function (next) {
    client.changeUser({database: 'training'}, next);
  },

  function (next) {
    client.query(
      "CREATE TABLE IF NOT EXISTS data (" +
      " `key` VARCHAR(255), `value` VARCHAR(255) )"
    , next);
  },

  function (next) {
    prompt.get(['key', 'value'], function (err, results) {
      if (err) return console.error(err);
      client.query("INSERT INTO data SET ?", {key: results.key, value: results.value}, next);
    });
  }

], function (err) {
  if (err) return console.error(err);
  console.log('Saved');
  process.exit();
});