// generate a random key and IV
const key = 'H@McQfTjWnZr4u7x!A%D*F-JaNdRgUkX';
const iv = 'H@McQfTjWnZr4u7x!A%D*F-JaNdRgUkx';

numIterations = 1;

function encrypt(data) {
    // encrypt some bytes using CBC mode
    // (other modes include: CFB, OFB, and CTR)
    let cipher = forge.aes.createEncryptionCipher(key, 'CBC');
    cipher.start(iv);
    cipher.update(forge.util.createBuffer(data));
    cipher.finish();
    // outputs encrypted hex
    let encrypted = cipher.output.toHex();
    return encrypted;
}


function decrypt(data) {
    // decrypt some bytes using CBC mode
    // (other modes include: CFB, OFB, and CTR)
    let ciphertext = forge.util.hexToBytes(data);
    let input = forge.util.createBuffer(ciphertext);
    let decipher = forge.aes.createDecryptionCipher(key, 'CBC');
    decipher.start(iv);
    decipher.update(input);
    decipher.finish();
    let decrypted = decipher.output;
    // outputs decrypted string
    return decrypted.toString();
}