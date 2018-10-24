var strategies = require("./strategies");

function generateDB() {
  return {
    strategies: strategies
  };
}

module.exports = generateDB;
