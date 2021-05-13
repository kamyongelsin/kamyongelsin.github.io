import React from 'react'
import heroesImage from '../figures/two_truck.jpg';

function Heroes() {
    let metin = "Size kamyongelsin.com üzerinden ulaşıyorum. Bir nakliye ihtiyacım var."
    let link = "https://wa.me/905322600861?text=" + encodeURI(metin)
    return (
        <div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
                <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <a href={link} className="btn btn-primary btn-lg px-4 me-sm-3">
                        <i class="fab fa-whatsapp"></i> Fiyat al
                    </a>
                    
                    <a href="tel:905322600861"className="btn btn-outline-secondary btn-lg px-4">
                        <i class="fas fa-phone"></i> Hemen ara
                    </a>
                </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg">
                <div class="position-lg-absolute top-0 left-0 overflow-hidden">
                <img class="d-block rounded-lg-3" src={heroesImage} alt="" width="720" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Heroes
