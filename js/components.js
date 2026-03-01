class SiteHeader extends HTMLElement {
    connectedCallback() {
        // 1. Inject the HTML
        this.innerHTML = `
            <div id="menu-overlay" class="menu-overlay"></div>
            <nav id="side-menu" class="side-menu">
                <div class="close-btn" id="close-btn">&times;</div>
                <ul class="nav-links">
                    <li><a href="index.html#">ΑΡΧΙΚΗ</a></li>
                    <li><a href="index.html#licenses">ΑΔΕΙΕΣ ΟΔΗΓΗΣΗΣ</a></li>
                    <li><a href="index.html#insurances">ΑΣΦΑΛΕΙΕΣ ΟΧΗΜΑΤΩΝ</a></li>
                    <li><a href="services.html">ΥΠΗΡΕΣΙΕΣ</a></li>
                    <li><a href="contact.html">ΕΠΙΚΟΙΝΩΝΙΑ</a></li>
                </ul>
            </nav>
            <header>
                <div class="hamburger">&#9776;</div>
                <div class="logo-container">
                    <img src="assets/logo.jpg" alt="Logo" class="logo-img">
                </div>
            </header>
        `;

        const hamburgerMenu = this.querySelector('.hamburger');
        const sideMenu = this.querySelector('#side-menu');
        const closeBtn = this.querySelector('#close-btn');
        const overlay = this.querySelector('#menu-overlay');
        const navMenuLinks = this.querySelectorAll('.nav-links a');

        const toggleMenu = () => {
            sideMenu.classList.toggle('open');
            overlay.classList.toggle('open');
        };

        if (hamburgerMenu) hamburgerMenu.addEventListener('click', toggleMenu);
        if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
        if (overlay) overlay.addEventListener('click', toggleMenu);

        navMenuLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        const headerElement = this.querySelector('header');
        const scrollThreshold = 520;
        let isSticky = false;

        window.addEventListener('scroll', () => {
            if (!headerElement) return; // Safety check

            if (window.scrollY > scrollThreshold && !isSticky) {
                isSticky = true;
                headerElement.classList.remove('sticky-hide');
                headerElement.classList.add('sticky');
                document.body.style.paddingTop = headerElement.offsetHeight + 'px';
            } 
            else if (window.scrollY <= scrollThreshold && isSticky) {
                isSticky = false;
                headerElement.classList.add('sticky-hide');
                
                setTimeout(() => {
                    if (!isSticky) {
                        headerElement.classList.remove('sticky');
                        headerElement.classList.remove('sticky-hide');
                        document.body.style.paddingTop = '0px';
                    }
                }, 400);
            }
        });
    }
}
customElements.define('site-header', SiteHeader);



class SiteFooter extends HTMLElement {
    connectedCallback() {
        // 1. Inject the HTML
        this.innerHTML = `
            <footer class="site-footer">
                <div class="footer-container">
                    <div class="footer-info">
                        <h4>ΣΧΟΛΗ ΟΔΗΓΩΝ ΛΙΑΠΑΚΗΣ ΝΙΚΟΣ</h4>
                        <p>Ηράκλειο Κρήτης</p>
                        <p>&copy; 2026 Όλα τα δικαιώματα διατηρούνται.</p>
                    </div>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/sxoliodigon.liapakis" class="social-link" title="Facebook">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
                        </a>
                        <a href="#" class="social-link" title="Instagram">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('site-footer', SiteFooter);