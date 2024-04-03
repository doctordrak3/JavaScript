const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};
//Question 1
guests.BRUTUS = {
  title: "Senator",
  region: "Rome",
  dietaryPreference: "Vegan",
  pastGifts: ["Silver Dagger", "Marble Bust"]
};
//Question 2
guests.CICERO.pastGifts.push("Golden Lyre");
//Question 3
const antonyRegion = guests.ANTONY.region;
//Question 4
delete guests.CICERO;
//Question 5
const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";
//Question 6
The region of ANTONY in the original guests object will be "Egypt". This is because objects in JavaScript are reference types. When we assign the object to a new variable, we're not creating a new copy of the object. Instead, both variables point to the same object in memory. Thus, changes made through one variable are reflected in the other.
