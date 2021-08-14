const highPassFilterLevels = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
};

function binaryToHighPassFilterLevel(binaryAsStr) {
  switch (binaryAsStr) {
    case "11":
      return highPassFilterLevels.ZERO;
    case "10":
      return highPassFilterLevels.ONE;
    case "01":
      return highPassFilterLevels.TWO;
    case "00":
      return highPassFilterLevels.THREE;
  }
}

module.exports = { highPassFilterLevels, binaryToHighPassFilterLevel };
