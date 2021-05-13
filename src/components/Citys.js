import React from 'react';

function Citys() {

    let citys = [
        {'sehir':'Adana'},
        {'sehir':'Adıyaman'},
        {'sehir':'Afyonkarahisar'},
        {'sehir':'Ağrı'},
        {'sehir':'Aksaray'},
        {'sehir':'Amasya'},
        {'sehir':'Ankara'},
        {'sehir':'Antalya'},
        {'sehir':'Ardahan'},
        {'sehir':'Artvin'},
        {'sehir':'Aydın'},
        {'sehir':'Balıkesir'},
        {'sehir':'Bartın'},
        {'sehir':'Batman'},
        {'sehir':'Bayburt'},
        {'sehir':'Bilecik'},
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
        {'sehir':'Düzce'},
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
        {'sehir':'Iğdır'},
        {'sehir':'Isparta'},
        {'sehir':'İstanbul'},
        {'sehir':'İzmir'},
        {'sehir':'Kahramanmaraş'},
        {'sehir':'Karabük'},
        {'sehir':'Karaman'},
        {'sehir':'Kars'},
        {'sehir':'Kastamonu'},
        {'sehir':'Kayseri'},
        {'sehir':'Kırıkkale'},
        {'sehir':'Kırklareli'},
        {'sehir':'Kırşehir'},
        {'sehir':'Kilis'},
        {'sehir':'Kocaeli'},
        {'sehir':'Konya'},
        {'sehir':'Kütahya'},
        {'sehir':'Malatya'},
        {'sehir':'Manisa'},
        {'sehir':'Mardin'},
        {'sehir':'Mersin'},
        {'sehir':'Muğla'},
        {'sehir':'Muş'},
        {'sehir':'Nevşehir'},
        {'sehir':'Niğde'},
        {'sehir':'Ordu'},
        {'sehir':'Osmaniye'},
        {'sehir':'Rize'},
        {'sehir':'Sakarya'},
        {'sehir':'Samsun'},
        {'sehir':'Siirt'},
        {'sehir':'Sinop'},
        {'sehir':'Sivas'},
        {'sehir':'Şanlıurfa'},
        {'sehir':'Şırnak'},
        {'sehir':'Tekirdağ'},
        {'sehir':'Tokat'},
        {'sehir':'Trabzon'},
        {'sehir':'Tunceli'},
        {'sehir':'Uşak'},
        {'sehir':'Van'},
        {'sehir':'Yalova'},
        {'sehir':'Yozgat'},
        {'sehir':'Zonguldak'}
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
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
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
