const friend = "BRUTUS"
const shiftValue = 3;
//Question 1
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let encryptedName = "";
//Question 2
for (let i = 0; i < friend.length; i++)
{
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}
//Question 3
Using a loop provides automation, enabling us to process each letter of the name consecutively without redundant code. It ensures consistent encryption and can easily adapt to names of any length.
//Question 3
The modulus operator, %, ensures that if the sum of the current index and the shift value surpasses the alphabet's length, it wraps around to the start. Thus, after "z", we return to "a", guaranteeing continuous encryption.
