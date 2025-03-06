import { isGlobalAdmin, addNavbarItem } from './utils.js';

let username = "John Doe"; // Replace with the actual username

window.onload = function() {
    if (isGlobalAdmin(username)) { // Add admin-specific navbar items if the user is a global admin on page load
        addNavbarItem("Admin Panel", "/pages/admin.html");
    }
};