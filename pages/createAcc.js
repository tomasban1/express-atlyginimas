
import { footer } from "./components/footer.js";
import { head } from "./components/head.js";
import { header } from "./components/header.js";

export function createAcc() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
    const day = (date.getDate() < 10 ? '0' : '') + (date.getDate() + 1);
    const maxDate = `${year}-${month}-${day}`



    return `
        <!DOCTYPE html>
    <html lang="en">
    ${head('Salaries', ['main', 'header', 'form'])}
    <body>
        ${header()}
        <main>
            <h1>Create account</h1> 
            <img src="/" alt="tuscias" />
            <form class="form" action="" method="">
                <div class="form-row">
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
                <div class="form-row">
                    <label htmlFor="">Date of start</label>
                    <input type="date" min="2020-01-01" max="${maxDate}" />
                </div>
                <div class="form-row">
                    <label htmlFor="">Hourly pay</label>
                    <input type="number" min="0" max="9999" value="0" step="0.01" />
                </div>
                <div>
                    <button type="submit">Create account</button>
                </div>
            </form>
        </main>
       ${footer()}
       <script type="module" src="/js/create-account.js"></script>
    </body>
    </html>`;
}