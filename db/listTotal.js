function generateListTotal() {
  return {
    total: 200
  };
}

var listTotal = {
  code: 200,
  message: "成功",
  data: generateListTotal()
};

module.exports = listTotal;
