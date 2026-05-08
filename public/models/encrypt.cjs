const crypto = require("crypto");
const fs = require("fs");

const encryptFile = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile);

  output.write(iv);
  input.pipe(cipher).pipe(output);
};

// Usage: node encrypt.cjs <inputFile> <outputFile> <password>
// Password is passed as a CLI argument, never hardcoded.
const password = process.argv[4];
if (!password) {
  console.error("Usage: node encrypt.cjs <inputFile> <outputFile> <password>");
  process.exit(1);
}
encryptFile(process.argv[2], process.argv[3], password);
