const expect = require('chai').expect;
const hexToJuno106Converter = require('../juno106/hexConverter');
const octaveLevel = require('../juno106/octaveLevel');
const chorusLevel = require('../juno106/chorusLevel');
const highPassFilterLevel = require('../juno106/highPassFilterLevel');

describe('The hex to Juno 106 converter', function() {

// data split into each byte below
// F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7
  var lfoRates = [
      {patch: "F0 41 30 00 00 00 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
      {patch: "F0 41 30 00 00 0F 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 15},
      {patch: "F0 41 30 00 00 3A 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 58},
      {patch: "F0 41 30 00 00 FF 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 255}
  ];
  lfoRates.forEach(function (test) {
    it("should parse lfo rate from hex to " + test.expected, function () {
      const patchNoSpaces = test.patch.replace(/\s/g, "");

      const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

      expect(junoPatchData.lfoRate).to.equal(test.expected);
    });
  });

  var lfoDelayTimeRates = [
    {patch: "F0 41 30 00 00 14 00 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 0F 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 3A 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 FF 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 255}
  ];
lfoDelayTimeRates.forEach(function (test) {
  it("should parse lfo delay time from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.lfoDelayTime).to.equal(test.expected);
  });
});

var lfoPitchModulations = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 0F 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 3A 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 FF 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 255}
  ];
lfoPitchModulations.forEach(function (test) {
  it("should parse lfoPitchModulation from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.lfoPitchModulation).to.equal(test.expected);
  });
});

var pulseWidthModulations = [
    {patch: "F0 41 30 00 00 14 31 00 00 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 0F 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 3A 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 FF 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 255}
  ];
pulseWidthModulations.forEach(function (test) {
  it("should parse pulseWidthModulation from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.pulseWidthModulation).to.equal(test.expected);
  });
});

// was 00
var noiseLevels = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 0F 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 3A 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 FF 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 255}
  ];
noiseLevels.forEach(function (test) {
  it("should parse noiseLevel from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.noiseLevel).to.equal(test.expected);
  });
});

var vcfFreqs = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 00 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 0F 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 3A 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 FF 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 255}
  ];
vcfFreqs.forEach(function (test) {
  it("should parse vcf freqs from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.vcfFreq).to.equal(test.expected);
  });
});

var vcfReses = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 00 3B 01 56 6C 03 31 2D 20 02 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0F 3B 01 56 6C 03 31 2D 20 02 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 3A 3B 01 56 6C 03 31 2D 20 02 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 FF 3B 01 56 6C 03 31 2D 20 02 51 11 F7", expected: 255}
  ];
vcfReses.forEach(function (test) {
  it("should parse vcf reses from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.vcfRes).to.equal(test.expected);
  });
});

var vcfEnvs = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 00 01 56 6C 03 31 2D 20 02 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 0F 01 56 6C 03 31 2D 20 02 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3A 01 56 6C 03 31 2D 20 02 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D FF 01 56 6C 03 31 2D 20 02 51 11 F7", expected: 255}
  ];
vcfEnvs.forEach(function (test) {
  it("should parse vcf envs from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.vcfEnv).to.equal(test.expected);
  });
});

var vcfLfos = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 00 56 6C 03 31 2D 20 02 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 0F 56 6C 03 31 2D 20 02 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 3A 56 6C 03 31 2D 20 02 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B FF 56 6C 03 31 2D 20 02 51 11 F7", expected: 255}
  ];
vcfLfos.forEach(function (test) {
  it("should parse vcf Lfos from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.vcfLfo).to.equal(test.expected);
  });
});

var vcfKeyboardTrackings = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 00 6C 03 31 2D 20 02 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 0F 6C 03 31 2D 20 02 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 3A 6C 03 31 2D 20 02 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 FF 6C 03 31 2D 20 02 51 11 F7", expected: 255}
  ];
vcfKeyboardTrackings.forEach(function (test) {
  it("should parse vcfKeyboardTrackings from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.vcfKeyboardTracking).to.equal(test.expected);
  });
});

var vcaLevels = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 00 03 31 2D 20 02 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 0F 03 31 2D 20 02 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 3A 03 31 2D 20 02 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 FF 03 31 2D 20 02 51 11 F7", expected: 255}
  ];
vcaLevels.forEach(function (test) {
  it("should parse vcf level from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.vcaLevel).to.equal(test.expected);
  });
});

var envAs = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 00 31 2D 20 02 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 0F 31 2D 20 02 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 3A 31 2D 20 02 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C FF 31 2D 20 02 51 11 F7", expected: 255}
  ];
envAs.forEach(function (test) {
  it("should parse env a from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.envA).to.equal(test.expected);
  });
});

var envDs = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 00 2D 20 02 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 0F 2D 20 02 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 3A 2D 20 02 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 FF 2D 20 02 51 11 F7", expected: 255}
  ];
envDs.forEach(function (test) {
  it("should parse env d from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.envD).to.equal(test.expected);
  });
});

var envSes = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 00 20 02 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 0F 20 02 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 3A 20 02 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 FF 20 02 51 11 F7", expected: 255}
  ];
envSes.forEach(function (test) {
  it("should parse env s from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.envS).to.equal(test.expected);
  });
});

var envRs = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 00 02 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 0F 02 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 3A 02 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D FF 02 51 11 F7", expected: 255}
  ];
envRs.forEach(function (test) {
  it("should parse env r from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.envR).to.equal(test.expected);
  });
});

var subOscillatorLevels = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 3A 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 FF 51 11 F7", expected: 255}
  ];
subOscillatorLevels.forEach(function (test) {
  it("should parse subOscillatorLevel from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.subOscillatorLevel).to.equal(test.expected);
  });
});

var octaveLevels = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 80 11 F7", expected: octaveLevel.octaveLevels.FOUR},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 90 11 F7", expected: octaveLevel.octaveLevels.FOUR},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 40 11 F7", expected: octaveLevel.octaveLevels.EIGHT},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 50 11 F7", expected: octaveLevel.octaveLevels.EIGHT},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 3A 20 11 F7", expected: octaveLevel.octaveLevels.SIXTEEN},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 3A 30 11 F7", expected: octaveLevel.octaveLevels.SIXTEEN}
  ];
octaveLevels.forEach(function (test) {
  it("should set octaveLevel based on first 3 bits of byte 21 ", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.octaveLevel).to.equal(test.expected);
  });
});

var isPulseOns = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 10 11 F7", expected: true},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 F0 11 F7", expected: true},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 00 11 F7", expected: false},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F E0 11 F7", expected: false}
  ];
isPulseOns.forEach(function (test) {
  it("should set isPulseOn based on fourth bit of byte 21 ", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.isPulseOn).to.equal(test.expected);
  });
});

var isSawOns = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 08 11 F7", expected: true},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 0F 11 F7", expected: true},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 00 11 F7", expected: false},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 07 11 F7", expected: false}
  ];
isSawOns.forEach(function (test) {
  it("should set isSawOn based on fifth bit of byte 21 ", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.isSawOn).to.equal(test.expected);
  });
});

var isChorusOns = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 04 11 F7", expected: false},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 0F 11 F7", expected: false},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 00 11 F7", expected: true},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 0B 11 F7", expected: true}
  ];
isChorusOns.forEach(function (test) {
  it("should set isChorusOn based on sixth bit of byte 21 ", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.isChorusOn).to.equal(test.expected);
  });
});

var chorusLevels = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 02 11 F7", expected: chorusLevel.chorusLevels.ONE},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 0F 11 F7", expected: chorusLevel.chorusLevels.ONE},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 00 11 F7", expected: chorusLevel.chorusLevels.TWO},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 0D 11 F7", expected: chorusLevel.chorusLevels.TWO}
  ];
chorusLevels.forEach(function (test) {
  it("should set chorusLevel based on seventh bit of byte 21 ", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.chorusLevel).to.equal(test.expected);
  });
});

var isPwmControlledByLFOs = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 04 81 F7", expected: false},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 0F F1 F7", expected: false},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 00 01 F7", expected: true},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 0B 71 F7", expected: true}
  ];
isPwmControlledByLFOs.forEach(function (test) {
  it("should set isPwmControlledByLFO based on first bit of byte 22 ", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.isPwmControlledByLFO).to.equal(test.expected);
  });
});

var isVcaControlledByEnvelopes = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 04 41 F7", expected: false},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 0F F1 F7", expected: false},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 00 01 F7", expected: true},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 0B B1 F7", expected: true}
  ];
isVcaControlledByEnvelopes.forEach(function (test) {
  it("should set isVcaControlledByEnvelope based on second bit of byte 22 ", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.isVcaControlledByEnvelope).to.equal(test.expected);
  });
});

var isVcfEnvelopePolarityPositives = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 04 21 F7", expected: false},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 0F F1 F7", expected: false},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 00 01 F7", expected: true},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 0B D1 F7", expected: true}
  ];
isVcfEnvelopePolarityPositives.forEach(function (test) {
  it("should set isVcfEnvelopePolarityPositive based on third bit of byte 22 ", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.isVcfEnvelopePolarityPositive).to.equal(test.expected);
  });
});


var highPassFilterLevels = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 02 FF F7", expected: highPassFilterLevel.highPassFilterLevels.ZERO},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 0F 18 F7", expected: highPassFilterLevel.highPassFilterLevels.ZERO},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 00 F7 F7", expected: highPassFilterLevel.highPassFilterLevels.ONE},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 0D 10 F7", expected: highPassFilterLevel.highPassFilterLevels.ONE},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 00 EF F7", expected: highPassFilterLevel.highPassFilterLevels.TWO},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 0D 08 F7", expected: highPassFilterLevel.highPassFilterLevels.TWO},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 00 E7 F7", expected: highPassFilterLevel.highPassFilterLevels.THREE},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 0D 00 F7", expected: highPassFilterLevel.highPassFilterLevels.THREE}
  ];
highPassFilterLevels.forEach(function (test) {
  it("should set highPassFilterLevel based on fourth and fifth bits of byte 22 ", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.highPassFilterLevel).to.equal(test.expected);
  });
});


});