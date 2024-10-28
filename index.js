// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
// This function moves the dodger element to the right
function moveDodgerRight() {
    // Get the current 'left' style property of the dodger
    // and remove the 'px' suffix to get just the number
    const leftNumbers = dodger.style.left.replace("px", "");
    
    // Convert the string to an integer
    // The second argument '10' ensures we're using base 10 numbering
    const left = parseInt(leftNumbers, 10);
  
    // Check if the dodger is not at the right edge
    // 360 seems to be the maximum allowed position
    if (left < 360) {
      // Move the dodger 1 pixel to the right
      // by updating its 'left' style property
      dodger.style.left = `${left + 1}px`;
    }
  }
  