import { footer } from "./components/footer.js";
import { head } from "./components/head.js";
import { header } from "./components/header.js";

export function pageAbout() {
    return `
        <!DOCTYPE html>
    <html lang="en">
    ${head('About project', ['main', 'header'])}
    <body>
       ${header('/about')}
        <main>
            <h1>About the project</h1>
            <p>Procject, where you can:</p>
            <h2>Worker profile</h2>
            <ul>
                <li>Create</li>
                <li>See al registered users</li>
                <li>Remove</li>
                <li>Update name</li>
                <li>Update surname</li>
            </ul>
        </main>
        ${footer()}
    </body>
    </html>`;
}