import React from 'react'
import Typewriter from 'typewriter-effect';

import heroesImage from './figures/two_truck.jpg';


function Heroes() {

    let metin = "Size kamyongelsin.com üzerinden ulaşıyorum. Bir nakliye ihtiyacım var."
    let link = "https://wa.me/905322600861?text=" + encodeURI(metin)

    return (
            <div className="px-4 pt-3 text-center mb-5">
                <div className="col-lg-6 mx-auto">
                    <p className="lead fw-bold">
                        <Typewriter
                            options={{
                                strings: [
                                    "Bütün fabrikasyon yüklerinizi",
                                    "Parsiyel (Parça) yüklerinizi",
                                    "Ev eşyalarınızı",
                                    "Sebze-meyve yüklerinizi",
                                    "Canlı hayvanlarınızı"
                                    ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                    </p>
                    <p className="lead">
                        güvenilir nakliyecilerle taşıyalım.
                    </p>

                    <h1 className="display-6 mb-4">
                        <i class="fab fa-whatsapp whatsapp-color"></i> 0532 260 0861
                    </h1>            
                    <p className="lead fst-italic mb-4">
                        kamyongelsin.com, taşıma taleplerin için en uygun fiyatı anında verir.<br></br>
                        Hem zamandan hem maliyetten kazanmak artık senin elinde.<br></br>
                        Şimdi ihtiyacını anlat ve yüzlerce araç arasından en düşük fiyat teklifini anında al.
                    </p>

                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        
                        <a href={link} className="btn btn-primary btn-lg px-4 me-sm-3">
                            <i class="fab fa-whatsapp"></i> Fiyat al
                        </a>
                        
                        <a href="tel:905322600861"className="btn btn-outline-secondary btn-lg px-4">
                            <i class="fas fa-phone"></i> Hemen ara
                        </a>
                    </div>
                </div>
                <div className="overflow-hidden" style={{maxHeight:'50vh'}}>
                    <div className="container px-5">
                        <img
                            src={heroesImage}
                            alt="Example"
                            className="img-fluid border rounded-3 shadow-lg mb-4"
                            width="700"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
    )
}

export default Heroes
