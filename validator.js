const invalidJuno106 =
  "hex data provided does not match the sysex definitions for the Juno 106";
const invalidSysex = "hex data provided does not match sysex standards";

function validateJuno106(hexStr) {
  const hexSplitIntoBytes = hexStr.match(/.{1,2}/g);
  validateSysex(hexSplitIntoBytes);
  const messageType = hexSplitIntoBytes[2];
  if (
    hexSplitIntoBytes.length !== 24 ||
    hexSplitIntoBytes[1] !== "41" ||
    (messageType !== "30" && messageType !== "31")
  ) {
    throw invalidJuno106;
  }
}

function validateSysex(hexSplitIntoBytes) {
  if (
    hexSplitIntoBytes[0] !== "F0" ||
    hexSplitIntoBytes[hexSplitIntoBytes.length - 1] !== "F7"
  ) {
    throw invalidSysex;
  }
}

module.exports = { validateJuno106, invalidJuno106, invalidSysex };
