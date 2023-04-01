

// Get the toggle button, close button, and sidebar
const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// Add a click event listener to the toggle button
toggleBtn.addEventListener('click', () => {
  // Toggle the "sidebar-active" class on the sidebar
  sidebar.classList.toggle('sidebar-active');
});

// Add a click event listener to the close button
closeBtn.addEventListener('click', () => {
  // Remove the "sidebar-active" class from the sidebar
  sidebar.classList.remove('sidebar-active');
});
