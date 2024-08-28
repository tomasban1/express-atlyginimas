import { data } from "../data/accountsData.js";
import { footer } from "./components/footer.js";
import { head } from "./components/head.js";
import { header } from "./components/header.js";



export function pageAllAcc() {


    return `
        <!DOCTYPE html>
    <html lang="en">
    ${head('All accounts', ['main', 'header', 'table', 'button'])}
    <body>
       ${header('/all-acounts')}
        <main>
            <div class="flex">
                <h1>All accounts</h1>
                <a class="btn" href="/create-account">Create new account</a>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Starting date</td>
                        <td>Hourly pay</td>
                        <td>Salary</td>
                    </tr>
                </thead>
                <tbody>
                    ${data.map((item, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.date}</td>
                            <td>${item.rate}</td>
                            <td>${item.salary}</td>
                        </tr>`).join('')}
                </tbody>
            </table>
        </main>
        ${footer()}
    </body>
    </html>`;
}