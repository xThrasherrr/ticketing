export function attemptLogin(username, password) {
    return true; // Replace with actual authentication logic
}

export function isGlobalAdmin(username) {
    return true; // Replace with actual admin check logic
}

export function addNavbarItem(text, href) {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = href;
        a.textContent = text;
        li.appendChild(a);
        navbar.appendChild(li);
    }
}

// Function to dynamically load stylesheets if not already added
export function loadStylesheet(stylesheet) {
    if (!document.querySelector(`link[href="/styles/${stylesheet}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `/styles/${stylesheet}`;
        document.head.appendChild(link);
    }
}