const process = require('process');
var app = {};
process.on('SIGINT', function onSigint() {
  app.shutdown();
});
process.on('SIGTERM', function onSigterm() {
  app.shutdown();
});
app.shutdown = function () {
  // clean up your resources and exit 
  process.exit();
};
module.exports = app;