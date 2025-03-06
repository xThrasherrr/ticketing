function loadHeader() {
    fetch("../components/header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Error loading header:", error));
}

loadHeader(); // Load header on page load. Allows for lazy loading of header content.