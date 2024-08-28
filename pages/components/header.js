export function header(currPageHref) {


    return ` <header>
                <img src="/img/logo" alt="logo">
                <nav>
                    <a class="${currPageHref === '/' ? 'active' : ''}" href="/">Home</a>
                    <a class="${currPageHref === '/about' ? 'active' : ''}" href="/about">About</a>
                    <a class="${currPageHref === '/all-acounts' ? 'active' : ''}" href="/all-acounts">Accounts</a>
                </nav>
             </header>`
}