var generateStrategies = require("./strategies");

function generateDB() {
  return {
    strategies: generateStrategies()
  };
}

module.exports = generateDB;
