createGrid();

function createGrid(squaresNumber = 16) { 
  let newSize = 512 / squaresNumber + "px";
  squaresNumber *= squaresNumber;

  const gridsContainer = document.createElement("div");
  gridsContainer.classList.add("gridsContainer");
  document.body.appendChild(gridsContainer);

  
  for (i = 1; i <= squaresNumber; i++) {
    const div = document.createElement("div");
    div.style.cssText = `width: ${newSize}; height: ${newSize}`;

    gridsContainer.appendChild(div);
    div.addEventListener("mouseover", () => {
      
      div.style.backgroundColor = getRandomColor()
    });
    
  }
}

const btn = document.createElement("button");
btn.textContent = "Enter new number of squares per side";
document.body.appendChild(btn);
btn.addEventListener("click", () => {
  const newValue = prompt("Enter new value lower than 100");
  if (newValue > 100) {
    prompt("Limit exceeded")
    return;
  }
  if (newValue <= 100 && newValue > 0 && newValue) {
    
    const gridsContainer = document.querySelector(".gridsContainer");
    document.body.removeChild(gridsContainer);
    createGrid(newValue);
  }
});

function getRandomColor() { 
  const hex = '0123456789ABCDEF'; 
  let rgbColor = '#';
  for (let i = 0; i < 6; i++) { 
      rgbColor += hex[Math.floor(Math.random() * 16)]; 
  } 
  return rgbColor; 
} 