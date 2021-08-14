const octaveLevels = {
  FOUR: 4,
  EIGHT: 8,
  SIXTEEN: 16,
};

function binaryToOctaveLevel(binaryAsStr) {
  switch (binaryAsStr) {
    case "100":
      return octaveLevels.FOUR;
    case "010":
      return octaveLevels.EIGHT;
    case "001":
      return octaveLevels.SIXTEEN;
  }
}

module.exports = { octaveLevels,  binaryToOctaveLevel };
