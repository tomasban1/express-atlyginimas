import { footer } from "./components/footer.js"
import { head } from "./components/head.js";
import { header } from "./components/header.js";

export function page404() {
    return `
        <!DOCTYPE html>
    <html lang="en">
    ${head('404')}
    <body>
      ${header()}
        <h1>404</h1>
        <h2>Page not found</h2>
        <p> Go to <a href="/">Main page</p>
        ${footer()}
    </body>
    </html>`;
}