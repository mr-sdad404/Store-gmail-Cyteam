// ================================
// CY TEAM - Sidebar & Dashboard JS
// ================================

// Toggle Sidebar
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

// Tutup sidebar jika klik ESC
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeMenu();
    }
});

// Tutup sidebar
function closeMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (sidebar) sidebar.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
}

// Klik area luar sidebar
document.addEventListener("click", function (e) {

    const sidebar = document.getElementById("sidebar");
    const button = document.querySelector(".menu-btn");

    if (!sidebar || !button) return;

    if (
        sidebar.classList.contains("active") &&
        !sidebar.contains(e.target) &&
        !button.contains(e.target)
    ) {
        closeMenu();
    }

});

// ========================
// Jam Digital Indonesia
// ========================

function updateClock() {

    const clock = document.getElementById("clock");