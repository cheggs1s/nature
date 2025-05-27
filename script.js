// JavaScript to add 'scrolled' class to .nav when page is scrolled
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');

    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  const hamburger = document.querySelector('.hamburger');
  const navContainer = document.querySelector('.nav-container');

  hamburger.addEventListener('click', () => {
    hamburger.setAttribute('aria-expanded', navContainer.classList.contains('show'));
  });

  const header = document.getElementById("header");

  const images = [
    'https://images.unsplash.com/photo-1609669456419-a00d51aa0eec?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1733259748225-1ee627330aac?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1558644137-0b44c8072bce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more images if you'd like
  ];

  let index = 0;

  // Set initial image
  header.style.backgroundImage = `url('${images[index]}')`;

  setInterval(() => {
    // Trigger fade-out
    header.classList.add('fading');

    // After fade-out duration, change image and fade back in
    setTimeout(() => {
      index = (index + 1) % images.length;
      header.style.backgroundImage = `url('${images[index]}')`;
      header.classList.remove('fading');
    }, 1000); // duration must match CSS fade timing
  }, 5000); // change image every 5 seconds

  //--------------------
  const slider = document.getElementById('imageSlider');
  const afterContainer = document.querySelector('.after-container');

  slider.addEventListener('input', () => {
    afterContainer.style.width = `${slider.value}%`;
  });
  //------------------
  document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values (use parseFloat and fallback to 0)
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const car = parseFloat(document.getElementById('car').value) || 0;
    const flights = parseFloat(document.getElementById('flights').value) || 0;
    const meat = parseFloat(document.getElementById('meat').value) || 0;

    // Emission factors in kg CO2e per unit
    const electricityEmissions = electricity * 0.475;
    const carEmissions = car * 0.404;
    const flightEmissions = flights * 0.2;
    const meatEmissions = meat * 27;

    const totalEmissions = electricityEmissions + carEmissions + flightEmissions + meatEmissions;

    // Format numbers with commas and 2 decimals
    function formatNumber(num) {
      return num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    // Display the results inside the #result div
    document.getElementById('result').innerHTML = `
      <h2>Your Estimated Annual Carbon Footprint</h2>
      <p><strong>Electricity:</strong> ${formatNumber(electricityEmissions)} kg CO₂e</p>
      <p><strong>Car Travel:</strong> ${formatNumber(carEmissions)} kg CO₂e</p>
      <p><strong>Flights:</strong> ${formatNumber(flightEmissions)} kg CO₂e</p>
      <p><strong>Meat Consumption:</strong> ${formatNumber(meatEmissions)} kg CO₂e</p>
      <hr />
      <p><strong>Total:</strong> ${formatNumber(totalEmissions)} kg CO₂e per year</p>
    `;
  });
//----------
const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

  if (!isHomePage) {
    const main = document.querySelector('main');
    if (main) {
      // Adjust padding-top to nav height (example 70px)
      main.style.paddingTop = '70px';
    }
  }
});
