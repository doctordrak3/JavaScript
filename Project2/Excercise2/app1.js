const friend = "BRUTUS"
const shiftValue = 3;
//Question 1
const alphabet = "abcdefghijklmnopqrstuvwxyz";
//Question 2
const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());
//Question 3 
JavaScript uses zero-based indexing, which means the first item of a string is accessed using 0.
//Question 4
const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];
//Question 5
The modulus operator, %, helps us wrap around the alphabet. If we try to access an index beyond the length of our alphabet, the modulus operator ensures that the result wraps around starting from 0. For instance, accessing the 28th position (which doesn't exist) would give us an index of 2, corresponding to the third letter, "c". This operator ensures we always get a valid index within the bounds of the alphabet.
//Question 6
const alphabetLength = alphabet.length;
//Question 7
const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];
//Question 8
const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);
