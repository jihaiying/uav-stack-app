var listTotal = require("./listTotal");

function generateDB() {
  return {
    listTotal: listTotal
  };
}

module.exports = generateDB;
