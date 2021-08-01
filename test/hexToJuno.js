const expect = require('chai').expect;
const hexToJuno106Converter = require('../juno106/hexConverter');

describe('The hex to Juno 106 converter', function() {

// data split into each byte below
// F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7
    var lfoRates = [
      {patch: "F0 41 30 00 00 00 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 0},
      {patch: "F0 41 30 00 00 14 31 00 66 00 23 0D 3A 00 56 6C 03 31 2D 20 00 51 11 F7", expected: 20},
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
});