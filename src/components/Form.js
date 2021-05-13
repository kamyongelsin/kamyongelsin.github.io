import React, {useState} from 'react';
import Typewriter from 'typewriter-effect';

function Form() {

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
    // Arama içerisindeki saklayacağımız değişken ve onu tanımlayacağımız fonksiyon.
    const [nereden, setNereden] = useState("");
    const [nereye, setNereye] = useState("");
    const [aciklama, setAciklama] = useState("");

    const handleNereye = (e) => {
        setNereye(e.target.value)
        console.log(nereye)
    }
    
    const handleNereden = (e) => {
        setNereden(e.target.value)
        console.log(nereden)
    }
    
    const handleAciklama = (e) => {
        setAciklama(e.target.value)
        console.log(aciklama)
    }
    // Submit
    const handleSubmit = (e) => {
        //Normal davranışını yaptırmaz.
        e.preventDefault()
        let metin = "Size kamyongelsin.com üzerinden ulaşıyorum. Nakliyem " + nereden + " içerisinden " + nereye + " içerisine taşınacak. Ürünüm hakkında bilgi ise " + aciklama
        let link = "https://wa.me/905322600861?text=" + encodeURI(metin)
        window.location.href = link;
        console.log(link)
    }

    return (
        <React.Fragment>
            <div className="container col-xl-10 col-xxl-8 px-4 mt-5">
                <div className="row align-items-center g-lg-5 py-1">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="display-6 fw-bold lh-1 mb-3">
                            Hemen teklif al!
                        </h1>
                        <p className="lead fw-bold">
                        <Typewriter
                            options={{
                                strings: [
                                    "Bütün fabrikasyon yüklerinizi",
                                    "Parsiyel (Parça) yüklerinizi",
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
                        hızlı, güvenilir bir şekilde taşıyalım.
                    </p>                   
                        <p className="col-lg-10 fs-4">
                            Yükünüze en uygun taşıma yetki belgesine sahip size yakın en uygun fiyatı veren boş aracı bulup siz değerli müşterilerimize hızlı bir şekilde yönlendirme yapıp taşıma işlerine hızlı çözümler sunmaktayız.
                        </p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-6">
                        <a href="tel:905322600861" style={{textDecoration:'none',color:'black'}}>
                            <h1 className="display-6 fw-bold mb-4 text-center">
                                <i class="fab fa-whatsapp whatsapp-color"></i> 0532 260 0861
                            </h1>
                        </a>
                        <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <select class="form-select" onChange={handleNereden} aria-label="Default select example">
                                    <option selected>Yükünüzün yükleneceği şehir</option>
                                    {
                                        citys.map((item) => {
                                            return(
                                                <option value={item.sehir}>{item.sehir}</option>
                                            )
                                            }
                                        )
                                    }
                                </select>                                                   
                                <label for="floatingInput">Nereden..</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select class="form-select" onChange={handleNereye} aria-label="Default select example">
                                    <option selected>Yükünüzün taşınacağı şehir</option>
                                    {
                                        citys.map((item) => {
                                            return(
                                                <option value={item.sehir}>{item.sehir}</option>
                                            )
                                            }
                                        )
                                    }
                                </select>                                                   
                                <label for="floatingInput">Nereye..</label>
                            </div>
                                     
                            <div className="form-floating mb-3">
                                <input type="text" onChange={handleAciklama} className="form-control" id="floatingPassword" placeholder="Taşınacak ürün hakkında bilgi verin" />
                                <label for="floatingPassword">Taşınacak ürün hakkında bilgi verin</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit"><i class="fab fa-whatsapp"></i> Fiyat al</button>
                            <hr className="my-4"/>
                            <small className="text-muted">
                                Yazdıklarınız Whatsapp üzerinden bize ulaşacaktır. Açılan ekrandan bize iletin.
                            </small>
                        </form>
                    </div>
                </div>
                </div>
        </React.Fragment>
    )
}

export default Form
