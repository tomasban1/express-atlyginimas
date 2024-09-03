import { data } from "../data/accountsData.js";
import { footer } from "./components/footer.js";
import { head } from "./components/head.js";
import { header } from "./components/header.js";
import { workDaysCount } from "../lib/helpers.js";



export function pageAllAcc() {
    const now = new Date();
    const currYear = now.getFullYear();
    const currMonth = now.getMonth() + 1;

    const prevYear = currMonth - 1 ? currYear - 1 : currYear;
    const prevMonth = currMonth - 1 || 12;

    const workHoursPerDay = 8;
    const prevMonthWorkDays = workDaysCount(prevYear, prevMonth);
    const currMonthWorkDays = workDaysCount(currYear, currMonth);

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
                        <td>Previous month</td>
                        <td>Current month</td>
                    </tr>
                </thead>
                <tbody>
                    ${data.map((item, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.date}</td>
                            <td>${item.rate}</td>
                            <td>${prevMonthWorkDays} d.d. (${item.rate * prevMonthWorkDays * workHoursPerDay} Eur)</td>
                            <td>${currMonthWorkDays} d.d. (${item.rate * currMonthWorkDays * workHoursPerDay} Eur)</td>
                        </tr>`).join('')}
                </tbody>
            </table>
        </main>
        ${footer()}
    </body>
    </html>`;
}