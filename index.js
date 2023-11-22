// Select the form and its radio buttons
const bostform = document.querySelector('[pricecalelement="form"]');
const radios = bostform.querySelectorAll('[pricecalelement="radio"]');
const priceBoost = document.getElementById("boost-price");

// Preselect the radio button with a price value of '20'
const preselectedValue = "850"; // Change this value to the desired preselected price
radios.forEach((radio) => {
  if (radio.getAttribute("price") === preselectedValue) {
    radio.checked = true; // Set the 'checked' property to true for the desired radio button
    priceBoost.innerText = preselectedValue; // Display only the preselected price
  }
});

// Add event listener to the form (optional, for dynamic updates)
bostform.addEventListener("change", function () {
  radios.forEach((radio) => {
    if (radio.checked) {
      const priceValue = radio.getAttribute("price");
      priceBoost.innerText = priceValue; // Update to display only the selected price
    }
  });
});

//

// Assuming checkboxes are stored in an array named 'checkboxes'
const checkboxes = document.querySelectorAll('[pricing-element="checkbox"]');

// Reference to the div for displaying the total value
const totalValueDiv = document.querySelector('[pricing-element="total-value"]');

// Initialize total value
let totalValue = 3500;

// Event listener for checkbox changes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        totalValue = 0; // Reset total value
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const price = parseFloat(checkbox.getAttribute('price'));
                totalValue += price; // Add the price to the total value if checkbox is checked
            }
        });
        // Display only the numeric total value in the designated div
        totalValueDiv.textContent = totalValue; // Display numeric total value
    });
});
