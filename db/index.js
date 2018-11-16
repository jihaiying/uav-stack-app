var strategies = require("./strategies");
var listTotal = require("./listTotal");

function generateDB() {
  return {
    strategies: strategies,
    listTotal: listTotal
  };
}

module.exports = generateDB;
