import { loadStylesheet } from './utils.js';
function loadCards(containerId, component, stylesheet) {
    fetch(`/components/${component}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            loadStylesheet(stylesheet);
        })
        .catch(error => console.error(`Error loading ${component}:`, error));
}
// Load department cards on main page
if (document.getElementById("department-cards-container")) {
    loadCards("department-cards-container", "department-cards.html", "cards.css");
}

// Load statistics cards (for tickets page)
if (document.getElementById("stats-cards-container")) {
    loadCards("stats-cards-container", "stats-cards.html", "cards.css");
}
