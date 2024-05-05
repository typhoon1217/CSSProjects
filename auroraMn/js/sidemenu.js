document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class "Menu_UI"
    let menuUIs = document.querySelectorAll('.Menu_UI');
  
    // Add click event listener to each "Menu_UI" element
    menuUIs.forEach(function(menuUI) {
      menuUI.addEventListener('click', function(event) {
        // Check if the clicked element is a list item
        if (event.target.tagName === 'LI') {
          // Log the text content of the clicked item
          console.log("Clicked on:", event.target.textContent);
          // You can add more functionality here if needed
        }
      });
    });
  });