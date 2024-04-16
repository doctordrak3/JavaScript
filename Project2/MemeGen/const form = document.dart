const form = document.getElementById('memeForm');
const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const imageUrl = document.getElementById('imageUrl').value;
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;

    // Clear previous meme
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create image element
    const image = new Image();
    image.crossOrigin = "Anonymous"; // Allow cross-origin image
    image.src = imageUrl;
    
    image.onload = function() {
        // Set canvas dimensions to match image
        canvas.width = image.width;
        canvas.height = image.height;

        // Draw image onto canvas
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Draw top text
        ctx.fillStyle = 'white';
        ctx.font = '30px Impact';
        ctx.textAlign = 'center';
        ctx.fillText(topText, canvas.width / 2, 50);

        // Draw bottom text
        ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);

        // Show canvas
        canvas.style.display = 'block';
    };
});
