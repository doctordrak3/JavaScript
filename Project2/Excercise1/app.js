// Question 1
`partyLocation`
`shiftValue`
`encryptedMessage`
`decryptedMessage`
`isPartySafe`
// Question 2
let partyLocation = "GARDEN"; // String
let shiftValue = 3; // Number
let encryptedMessage = ""; // String
let decryptedMessage = ""; // String
let isPartySafe = false; // Boolean
//Question 3
let partyLocation = "GARDEN"; // As the message might change.
const shiftValue = 3; // Since the shift value remains constant throughout.
let encryptedMessage = ""; // This will change when we encode the message with the original party location.
let decryptedMessage = ""; // This will change when we decode the encrypted message to reveal the party location.
let isPartySafe = false; // Hopefully, this doesn't change.
//Question 4
const shiftValue = 3;
Number.isInteger(shiftValue);
