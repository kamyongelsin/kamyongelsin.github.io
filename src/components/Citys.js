import React from 'react';

function Citys() {

    let citys = [
        {'sehir':'Adana'},
        {'sehir':'Adıyaman'},
        {'sehir':'Afyonkarahisar'},
        {'sehir':'Ağrı'},
        {'sehir':'Amasya'},
        {'sehir':'Ankara'},
        {'sehir':'Antalya'},
        {'sehir':'Artvin'},
        {'sehir':'Aydın'},
        {'sehir':'Balıkesir'},
        {'sehir':'Bilecikk'},
        {'sehir':'Bingöl'},
        {'sehir':'Bitlis'},
        {'sehir':'Bolu'},
        {'sehir':'Burdur'},
        {'sehir':'Bursa'},
        {'sehir':'Çanakkale'},
        {'sehir':'Çankırı'},
        {'sehir':'Çorum'},
        {'sehir':'Denizli'},
        {'sehir':'Diyarbakır'},
        {'sehir':'Edirne'},
        {'sehir':'Elazığ'},
        {'sehir':'Erzincan'},
        {'sehir':'Erzurum'},
        {'sehir':'Eskişehir'},
        {'sehir':'Gaziantep'},
        {'sehir':'Giresun'},
        {'sehir':'Gümüşhane'},
        {'sehir':'Hakkari'},
        {'sehir':'Hatay'},
        {'sehir':'Isparta'},
        {'sehir':'Mersin'},
        {'sehir':'İstanbul'},
        {'sehir':'İzmir'},
        {'sehir':'Kars'},
        {'sehir':'Kastamonu'},
        {'sehir':'Kayseri'},
        {'sehir':'Kırklareli'},
        {'sehir':'Kırşehir'},
        {'sehir':'Kocaeli'},
        {'sehir':'Konya'},
        {'sehir':'Kütahya'},
        {'sehir':'Malatya'},
        {'sehir':'Manisa'},
        {'sehir':'Kahramanmaraş'},
        {'sehir':'Mardin'},
        {'sehir':'Muğla'},
        {'sehir':'Muş'},
        {'sehir':'Nevşehir'},
        {'sehir':'Niğde'},
        {'sehir':'Ordu'},
        {'sehir':'Rize'},
        {'sehir':'Sakarya'},
        {'sehir':'Samsun'},
        {'sehir':'Siirt'},
        {'sehir':'Sinop'},
        {'sehir':'Sivas'},
        {'sehir':'Tekirdağ'},
        {'sehir':'Tokat'},
        {'sehir':'Trabzon'},
        {'sehir':'Tunceli'},
        {'sehir':'Şanlıurfa'},
        {'sehir':'Uşak'},
        {'sehir':'Van'},
        {'sehir':'Yozgat'},
        {'sehir':'Zonguldak'},
        {'sehir':'Aksaray'},
        {'sehir':'Bayburt'},
        {'sehir':'Karaman'},
        {'sehir':'Kırıkkale'},
        {'sehir':'Batman'},
        {'sehir':'Şırnak'},
        {'sehir':'Bartın'},
        {'sehir':'Ardahan'},
        {'sehir':'Iğdır'},
        {'sehir':'Yalova'},
        {'sehir':'Karabük'},
        {'sehir':'Kilis'},
        {'sehir':'Osmaniye'},
        {'sehir':'Düzce'},
    ]
    
    return (
        <div className="container text-center mt-5">
            <h1 className="display-6 fw-bold lh-1 mb-3">
                Merkez Ofislerimiz
            </h1>            
            <div className="row mt-5">
                <div className="col-8 offset-2">
                    <div className="row">
                        {
                        citys.map((item) => {
                            return(
                            <div className="col-lg-3 col-md-4 col-4 mb-3">
                                <button type="button" class="btn btn-outline-primary">
                                        {item.sehir}   
                                    </button>
                                </div>
                            )
                            }
                        )
                    }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Citys
