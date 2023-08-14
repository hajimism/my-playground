export const generateUlid = () => {
  // Base32 encoding characters
  const ENCODING_CHARS = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

  // Generate timestamp part (48 bits)
  let timestamp = Date.now();
  let timestampPart = "";
  for (let i = 0; i < 10; i++) {
    timestampPart = ENCODING_CHARS.charAt(timestamp % 32) + timestampPart;
    timestamp = Math.floor(timestamp / 32);
  }

  // Generate random part (80 bits)
  let randomPart = "";
  for (let i = 0; i < 16; i++) {
    randomPart += ENCODING_CHARS.charAt(Math.floor(Math.random() * 32));
  }

  return timestampPart + randomPart;
};
