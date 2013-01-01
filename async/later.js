module.exports = function (msg, callback) {
  setTimeout(function () {
    if (Math.random() < 0.1) {
      callback(new Error('Shit Broke on `' + msg + '`!'));
    }
    else {
      callback(null, msg + ' completed');
    }
  }, Math.random() * 1000);
};