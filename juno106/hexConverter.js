const junoPatchDataBuilder = require("./junoPatchDataBuilder");
const octaveLevel = require("../juno106/octaveLevel");
const chorusLevel = require("../juno106/chorusLevel");
const highPassFilterLevel = require("../juno106/highPassFilterLevel");

function convert(hexStr) {
  const hexSplitIntoBytes = hexStr.match(/.{1,2}/g);
  const byte21AsBinary = pad(hexToBin(hexSplitIntoBytes[21]), 8);
  const byte22AsBinary = pad(hexToBin(hexSplitIntoBytes[22]), 8);
  return new junoPatchDataBuilder()
    .lfoRate(hexToDec(hexSplitIntoBytes[5]))
    .lfoDelayTime(hexToDec(hexSplitIntoBytes[6]))
    .lfoPitchModulation(hexToDec(hexSplitIntoBytes[7]))
    .pulseWidthModulation(hexToDec(hexSplitIntoBytes[8]))
    .noiseLevel(hexToDec(hexSplitIntoBytes[9]))
    .vcfFreq(hexToDec(hexSplitIntoBytes[10]))
    .vcfRes(hexToDec(hexSplitIntoBytes[11]))
    .vcfEnv(hexToDec(hexSplitIntoBytes[12]))
    .vcfLfo(hexToDec(hexSplitIntoBytes[13]))
    .vcfKeyboardTracking(hexToDec(hexSplitIntoBytes[14]))
    .vcaLevel(hexToDec(hexSplitIntoBytes[15]))
    .envA(hexToDec(hexSplitIntoBytes[16]))
    .envD(hexToDec(hexSplitIntoBytes[17]))
    .envS(hexToDec(hexSplitIntoBytes[18]))
    .envR(hexToDec(hexSplitIntoBytes[19]))
    .subOscillatorLevel(hexToDec(hexSplitIntoBytes[20]))
    .octaveLevel(
      octaveLevel.binaryToOctaveLevel(byte21AsBinary.substring(0, 3))
    )
    .isPulseOn(byte21AsBinary.substring(3, 4) === "1")
    .isSawOn(byte21AsBinary.substring(4, 5) === "1")
    .isChorusOn(byte21AsBinary.substring(5, 6) === "0")
    .chorusLevel(
      byte21AsBinary.substring(6, 7) === "0"
        ? chorusLevel.chorusLevels.TWO
        : chorusLevel.chorusLevels.ONE
    )
    .isPwmControlledByLFO(byte22AsBinary.substring(0, 1) === "0")
    .isVcaControlledByEnvelope(byte22AsBinary.substring(1, 2) === "0")
    .isVcfEnvelopePolarityPositive(byte22AsBinary.substring(2, 3) === "0")
    .highPassFilterLevel(
      highPassFilterLevel.binaryToHighPassFilterLevel(
        byte22AsBinary.substring(3, 5)
      )
    )
    .build();
}

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

function hexToBin(hex) {
  return hexToDec(hex).toString(2).padStart(8, "0");
}

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

module.exports = { convert };
