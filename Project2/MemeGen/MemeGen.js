const form = document.querySelector("#memeform");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the value of the image URL input
  const imageUrl = document.getElementById("imageUrl").value;
  const topTextvalue = document.getElementById("textOnTop").value;
  const bottomTextvalue = document.getElementById("textOnBottom").value;

  // Create image element
  const image = document.createElement("img");
  image.src = imageUrl;

  // Create text elements
  const topText = document.createElement("p");
  topText.textContent = topTextvalue;
  topText.classList.add("meme-text", "top-text");

  const bottomText = document.createElement("p");
  bottomText.textContent = bottomTextvalue;
  bottomText.classList.add("meme-text", "bottom-text");

  // Create container for image and text
  const memeContainer = document.createElement("div");
  memeContainer.classList.add("meme-item");

  // Append image and text to container
  memeContainer.appendChild(image);
  memeContainer.appendChild(topText);
  memeContainer.appendChild(bottomText);

  // Append container to imageContainer
  document.getElementById("imageContainer").appendChild(memeContainer);

  // Add click event listener to remove meme
  memeContainer.addEventListener("click", function () {
    memeContainer.remove();
  });
});
