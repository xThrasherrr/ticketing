import { loadStylesheet } from './utils.js';
function loadModal() {
    fetch("../components/modal.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
            loadStylesheet("modals.css");
        })
        .catch(error => console.error("Error loading modal:", error));
}

// Open the modal with custom content
function openModal(title, message) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-body").textContent = message;
    document.getElementById("modal").style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Load the modal when the page loads
window.onload = loadModal;
