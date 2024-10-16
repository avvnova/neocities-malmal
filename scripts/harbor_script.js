//1. set the count of files in the harbor_assets folder
//2. with that count. generate a random number between 1 and that file count
//3. With that count, create a css entry of background_image: url(assets/harbor_assets{randomNumber}.gif)
//4. with random number. correspond the random number with the art and its artist to cite them appropriately with a simple array
const fileCount = 4;
const randomNumber = Math.floor(Math.random() * 4) + 1;
var filename = 'assets/harbor_assets/harbor' + randomNumber + '.gif';
var rule = 'body { background-image: url(' + filename +'); background-repeat: no-repeat; background-size: cover; background-position: center 70%;}';
var style = document.createElement('style');
style.appendChild(document.createTextNode(rule));
document.head.appendChild(style); 