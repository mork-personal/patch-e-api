const expect = require('chai').expect;
const validator = require('../validator');

describe('The Juno 106 validator ', function() {

// data split into each byte below
// F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7
  var invalidLengths = [
      {patch: "F0 F7"},
      {patch: "F0 41 30 00 00 00 00 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"  },
      {patch: "F0 41 30 00 00 0F 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 00 51 11 F7"},
      {patch: "F0 41 30 00 00 0F 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 FFF7"}
  ];
  invalidLengths.forEach(function (test) {
    it("should throw exception if length is incorrect", function () {
      const patchNoSpaces = test.patch.replace(/\s/g, "");

      expect(validator.validateJuno106.bind(validator, patchNoSpaces)).to.throw(validator.invalidJuno106);
    });
  });

  var invalidStarts = [
    {patch: "F1 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "A0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "FF 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "00 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"}
];
invalidStarts.forEach(function (test) {
  it("should throw exception if hex does not start with F0", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    expect(validator.validateJuno106.bind(validator, patchNoSpaces)).to.throw(validator.invalidSysex);
  });
});

var invalidEnds = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 FF"},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F0"},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 00"},
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 A0"}
];
invalidEnds.forEach(function (test) {
  it("should throw exception if hex does not end with F7", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    expect(validator.validateJuno106.bind(validator, patchNoSpaces)).to.throw(validator.invalidSysex);
  });
});

var invalidManufacturerIds = [
    {patch: "F0 43 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "F0 40 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "F0 42 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "F0 AF 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"}
];
invalidManufacturerIds.forEach(function (test) {
  it("should throw exception if manufacturer id is not roland", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    expect(validator.validateJuno106.bind(validator, patchNoSpaces)).to.throw(validator.invalidJuno106);
  });
});

var invalidMessageTypes = [
    {patch: "F0 41 32 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "F0 41 29 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "F0 41 AF 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "F0 41 F7 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"}
];
invalidMessageTypes.forEach(function (test) {
  it("should throw exception if message type is invalid", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    expect(validator.validateJuno106.bind(validator, patchNoSpaces)).to.throw(validator.invalidJuno106);
  });
});

var validJuno106Patches = [
    {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "F0 41 31 00 00 14 31 F5 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "F0 41 30 00 00 A0 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7"},
    {patch: "F0 41 31 00 00 14 31 00 66 00 23 B2 3A 00 56 6C 03 31 2D 20 00 51 11 F7"}
];
validJuno106Patches.forEach(function (test) {
  it("should not throw exception if sysex is valid", function () {
    const patchNoSpaces = test.patch.replace(/\s/g, "");

    validator.validateJuno106(patchNoSpaces);
  });
});

});