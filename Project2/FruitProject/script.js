const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  const results = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(str.toLowerCase())
  );
  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value.trim();
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";
  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result;
    suggestions.appendChild(li);
  });
}

function useSuggestion(e) {
  input.value = e.target.textContent;
  suggestions.innerHTML = "";
}

function highlightSuggestion(e) {
  const hoveredItem = e.target;
  const allItems = suggestions.querySelectorAll("li");

  allItems.forEach((item) => {
    item.classList.remove("highlighted");
  });

  hoveredItem.classList.add("highlighted");
}

input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);
suggestions.addEventListener("mouseover", highlightSuggestion);
