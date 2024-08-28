import { footer } from "./components/footer.js";
import { head } from "./components/head.js";
import { header } from "./components/header.js";

export function pageHome() {
    return `
        <!DOCTYPE html>
    <html lang="en">
    ${head('Salaries', ['main', 'header'])}
    <body>
        ${header('/')}
        <main>
            <h1>Welcome to our platform</h1>
            <p>Choose your action:</p>
            <a class="btn" href="/create-account">Create account</a>
            <a class="btn" href="/all-acounts">View all acounts</a>
        </main>
       ${footer()}
    </body>
    </html>`;
}