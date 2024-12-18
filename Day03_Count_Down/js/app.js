const endDateInput = document.getElementById('end-date-input');
const startButton = document.getElementById('start_Timer');
const endDateDisplay = document.getElementById('end-date');

const inputs = document.querySelectorAll('.col input');

let timer; // Declare timer globally to clear it later

startButton.addEventListener('click', () => {
  const val = endDateInput.value;
  if (!val) {
    alert('Please select a date and time!');
    return;
  }

  formatDate(endDateDisplay).innerText = `End Date: ${val}`;
  clearInterval(timer); // Clear any existing timer
  timer = setInterval(() => clock(val), 1000); // Start a new timer
});

function clock(endDate) {
  const end = new Date(endDate);
  const now = new Date();
  const diff = Math.floor((end - now) / 1000); // Calculate difference in seconds

  if (diff < 0) {
    clearInterval(timer); // Stop the interval when countdown ends
    inputs.forEach((input) => (input.value = 0)); // Reset all inputs to 0
    return;
  }

  // Calculate time units
  const days = Math.floor(diff / 3600 / 24); // Days
  const hours = Math.floor(diff / 3600) % 24; // Hours
  const minutes = Math.floor(diff / 60) % 60; // Minutes
  const seconds = diff % 60; // Seconds

  // Update input values
  inputs[0].value = days;
  inputs[1].value = hours;
  inputs[2].value = minutes;
  inputs[3].value = seconds;
}

function formatDate(dateString) {
    const date = new Date(dateString);
  
    // Extract parts of the date
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // Short month name
    const year = date.getFullYear();
  
    // Extract and format time
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Add leading zero to minutes
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
  
    // Format as "18 Dec 2024 07:49 AM"
    return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
  }
  
  const dateStr = "2024-12-18T07:49";
  console.log(formatDate(dateStr)); // Output: "18 Dec 2024 07:49 AM"
  