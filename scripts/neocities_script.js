document.addEventListener("DOMContentLoaded", function () {
    const imageFolder = "/../assets/neocities_backgrounds"; // Folder where images are stored
    const imageCount = 91; // Number of images available in the folder
    
    // Generate a random number to pick an image
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    const imageUrl = `${imageFolder}/image${randomIndex}.png`; // Modify filename format as needed

    // Set background image
    document.body.style.backgroundImage = `url('${imageUrl}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
});
