document.addEventListener('DOMContentLoaded', function() {
  try {
    const alertBox = document.getElementById("customAlert");
    if (alertBox) {
      alertBox.style.display = "flex";
      console.log("Modal displayed successfully at", new Date().toLocaleTimeString());
    } else {
      console.error("Error: Element with ID 'customAlert' not found.");
    }

    // Verificar carga de imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('load', () => {
        console.log(`Image loaded successfully: ${img.src}`);
      });
      img.addEventListener('error', () => {
        console.error(`Failed to load image: ${img.src}`);
      });
    });
  } catch (error) {
    console.error("Error in script execution:", error);
  }
});

function closeAlert() {
  try {
    const alertBox = document.getElementById("customAlert");
    if (alertBox) {
      alertBox.style.display = "none";
      console.log("Modal closed successfully at", new Date().toLocaleTimeString());
    } else {
      console.error("Error: Element with ID 'customAlert' not found.");
    }
  } catch (error) {
    console.error("Error closing modal:", error);
  }
}