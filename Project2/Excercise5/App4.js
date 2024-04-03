const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];
//Question 1 
guests.unshift("BRUTUS");
//Question 2
You can check the first element of the guests array using guests[0].
//Question 3
guests.push("AUGUSTUS", "LUCIA");
//Question 4
const spartacusIndex = guests.indexOf("SPARTACUS");
//Question 5
If "SPARTACUS" wasn't invited, the indexOf method would return -1.
//Question 6
const indexToRemove = guests.indexOf("CASSIUS");
guests.splice(indexToRemove, 1);
//Question 6
const specialGuests = guests.slice(0, 3);
//Question 6
const honoredGuests = guests.slice(0, 2); // Extracts honored guests.
const otherGuests = guests.slice(2); // Extracts the rest of the guests.
otherGuests.sort(); // Sorts the other guests.
const sortedGuests = honoredGuests.concat(otherGuests); // Combines both arrays.
