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

