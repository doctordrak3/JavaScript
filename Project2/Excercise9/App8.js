const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shiftValue) % alphabet.length;
  return alphabet[newIndex];
}

function decrypt(encryptedMessage, shiftValue) {
    // entializing the decrypted message variable
  let decryptedMessage = "";
  // loop through each letter in the encrypted message
  for (let index = 0; index < encryptedMessage.length; index++) {
    // setting the letter for the current index of the message
    const letter = encryptedMessage[index];
// cleaning out one of cases
    if (letter === " ") {
      decryptedMessage += " ";
      //   console.log("added space: ", index);
      wordLength = 0;
      continue;
    } else if ((index + 1) % 3 === 0) {
      //   console.log("skipped: ", index);
      continue;
    } else if (!alphabet.includes(letter.toLowerCase())) {
      //   console.log("skipped non-alphabet: ", index);
      continue;
    }

    letterIndex = alphabet.indexOf(letter.toLowerCase());
    let newIndex = (letterIndex - shiftValue) % alphabet.length; // Handle negative indexes
    if (newIndex < 0) {
      newIndex += 26;
    }
    shiftedLetter = alphabet[newIndex];
    decryptedMessage += shiftedLetter;
  }
  return decryptedMessage;
}

let encryptedMessage =
  "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";

let message = decrypt(encryptedMessage, 42);
console.log(message);
