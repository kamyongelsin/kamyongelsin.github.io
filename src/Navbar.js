import React from 'react';

function Navbar() {
    return (
        <React.Fragment>
            <header class="p-3 bg-dark text-white">
                <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-white text-decoration-none">
                        <span class="fs-4">Kamyongelsin.com</span>
                    </a>

                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" class="nav-link px-2 text-secondary">Anasayfa</a></li>
                        <li><a href="/" class="nav-link px-2 text-white">Hakkımızda</a></li>
                    </ul>

                    <div class="col-md-3 text-end">
                        <button type="button" class="btn btn-warning">Hemen Ara</button>
                    </div>
                </header>
                </div>
            </header>
        </React.Fragment>
    )
;}

export default Navbar;
