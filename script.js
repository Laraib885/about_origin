  // JavaScript to handle the language toggle
  let isFrench = false; // Default language is English

  document.getElementById('languageToggle').addEventListener('click', function () {
      const button = document.getElementById('languageToggle');

      // Toggle between French and English
      if (isFrench) {
          // Switch to English
          button.textContent = 'Language';
          // Replace the SVG with the English flag or icon
          button.innerHTML += `
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <!-- ... your SVG code for the English flag or icon ... -->
              </svg>`;
      } else {
          // Switch to French
          button.textContent = 'Langue';
          // Replace the SVG with the French flag or icon
          button.innerHTML += `
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <!-- ... your SVG code for the French flag or icon ... -->
              </svg>`;
      }

      // Toggle the language state
      isFrench = !isFrench;
  });