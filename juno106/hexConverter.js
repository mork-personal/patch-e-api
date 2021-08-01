const junoPatchDataBuilder = require("./junoPatchDataBuilder");

function convert(hexStr) {
  const hexSplitIntoBytes = hexStr.match(/.{1,2}/g);
  return new junoPatchDataBuilder()
    .lfoRate(hexToDec(hexSplitIntoBytes[5]))
    .lfoDelayTime(hexToDec(hexSplitIntoBytes[6]))
    .dcoLfo(hexToDec(hexSplitIntoBytes[7]))
    .dcoPwm(hexToDec(hexSplitIntoBytes[8]))
    .dcoNoise(hexToDec(hexSplitIntoBytes[9]))
    .vcfFreq(hexToDec(hexSplitIntoBytes[10]))
    .vcfRes(hexToDec(hexSplitIntoBytes[11]))
    .vcfEnv(hexToDec(hexSplitIntoBytes[12]))
    .vcfLfo(hexToDec(hexSplitIntoBytes[13]))
    .vcfKybd(hexToDec(hexSplitIntoBytes[14]))
    .vcaLevel(hexToDec(hexSplitIntoBytes[15]))
    .envA(hexToDec(hexSplitIntoBytes[16]))
    .envD(hexToDec(hexSplitIntoBytes[17]))
    .envS(hexToDec(hexSplitIntoBytes[18]))
    .envR(hexToDec(hexSplitIntoBytes[19]))
    .dcoSub(hexToDec(hexSplitIntoBytes[20]))
    .build();
}

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

module.exports = { convert };
