const expect = require('chai').expect;
const hexToJuno106Converter = require('../juno106/hexConverter');

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

var dcoLfos = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 0F 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 3A 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 FF 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 255}
  ];
dcoLfos.forEach(function (test) {
  it("should parse dco lfo from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.dcoLfo).to.equal(test.expected);
  });
});

var dcoPwms = [
    {patch: "F0 41 30 00 00 14 31 00 00 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 0F 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 3A 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 FF 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 255}
  ];
dcoPwms.forEach(function (test) {
  it("should parse dco pwm from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.dcoPwm).to.equal(test.expected);
  });
});

// was 00
var dcoNoises = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 0F 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 3A 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 FF 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 255}
  ];
dcoNoises.forEach(function (test) {
  it("should parse dco noise from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.dcoNoise).to.equal(test.expected);
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

var vcfKybds = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 00 6C 03 31 2D 20 02 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 0F 6C 03 31 2D 20 02 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 3A 6C 03 31 2D 20 02 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 FF 6C 03 31 2D 20 02 51 11 F7", expected: 255}
  ];
vcfKybds.forEach(function (test) {
  it("should parse vcf Kybds from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.vcfKybd).to.equal(test.expected);
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

var dcoSubs = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 0F 51 11 F7", expected: 15},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 3A 51 11 F7", expected: 58},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3B 01 56 6C 03 31 2D 20 FF 51 11 F7", expected: 255}
  ];
dcoSubs.forEach(function (test) {
  it("should parse dco sub from hex to " + test.expected, function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    const junoPatchData = hexToJuno106Converter.convert(patchNoSpaces);

    expect(junoPatchData.dcoSub).to.equal(test.expected);
  });
});

});