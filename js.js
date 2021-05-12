document.addEventListener("click", () => animateScene());

let isAnimated = false;
function animateScene() {
  const sceneElement = document.getElementById("scene");
  isAnimated
    ? (sceneElement.style.animation = "")
    : (sceneElement.style.animation = "sceneRotate 15s infinite linear");

  isAnimated = !isAnimated;
}
