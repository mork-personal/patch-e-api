const junoPatchDataBuilder = require("./junoPatchDataBuilder");

function convert(hexStr) {
  const hexSplitIntoBytes = hexStr.match(/.{1,2}/g);
  return new junoPatchDataBuilder()
    .lfoRate(hexToDec(hexSplitIntoBytes[5]))
    .build();
}

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

module.exports = { convert };
