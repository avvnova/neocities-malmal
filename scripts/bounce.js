function applyBounce(element, amplitude = 10, frequency = 5) {
    let originalPosition = element.offsetTop;
    let startTime = null;
  
    function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let displacement = amplitude * Math.sin(frequency * timeElapsed / 1000);
      element.style.top = originalPosition + displacement + 'px';
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}
  
  // Example usage:
  let myElement = document.getElementById('top_graphic_1');
  applyBounce(myElement);