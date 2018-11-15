var faker = require("faker");
var _ = require("lodash");
faker.locale = "zh_CN";

function generateStrategies() {
  return _.times(20, function(index) {
    return {
      id: index,
      name: {
        type: faker.random.number({ min: 1, max: 4 }),
        system: faker.random.number({ min: 1, max: 7 }),
        example: faker.random.words(),
        appID: faker.random.words(),
        log: faker.random.words()
      },
      desc: faker.random.words(),
      email: faker.internet.email(),
      date: faker.date.past(),
      opened: true
    };
  });
}

var strategies = {
  code: 200,
  message: "成功",
  data: generateStrategies()
};

module.exports = strategies;
