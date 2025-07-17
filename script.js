const toggleBtn = document.getElementById("toggleSidebarBtn");
const sidebar = document.getElementById("sidebar");
const layout = document.querySelector(".main-layout");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  layout.classList.toggle("full-width");

  // Update button text based on visibility
  toggleBtn.textContent = sidebar.classList.contains("hidden")
    ? "Show Sidebar"
    : "Hide Sidebar";
});