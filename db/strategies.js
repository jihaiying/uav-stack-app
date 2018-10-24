var faker = require("faker");
var _ = require("lodash");
faker.locale = "zh_CN";

function generateStrategies() {
  return _.times(20, function(index) {
    return {
      id: index,
      name: faker.name.findName(),
      desc: faker.lorem.sentence(),
      email: faker.internet.email(),
      date: faker.date.past()
    };
  });
}

var strategies = {
  code: 200,
  message: "成功",
  data: generateStrategies()
};

module.exports = strategies;
