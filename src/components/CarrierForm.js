import React, { useState } from "react";
import axios from "axios";

function CarrierForm() {
  let citys = [
    { sehir: "Adana" },
    { sehir: "Adıyaman" },
    { sehir: "Afyonkarahisar" },
    { sehir: "Ağrı" },
    { sehir: "Aksaray" },
    { sehir: "Amasya" },
    { sehir: "Ankara" },
    { sehir: "Antalya" },
    { sehir: "Ardahan" },
    { sehir: "Artvin" },
    { sehir: "Aydın" },
    { sehir: "Balıkesir" },
    { sehir: "Bartın" },
    { sehir: "Batman" },
    { sehir: "Bayburt" },
    { sehir: "Bilecik" },
    { sehir: "Bingöl" },
    { sehir: "Bitlis" },
    { sehir: "Bolu" },
    { sehir: "Burdur" },
    { sehir: "Bursa" },
    { sehir: "Çanakkale" },
    { sehir: "Çankırı" },
    { sehir: "Çorum" },
    { sehir: "Denizli" },
    { sehir: "Diyarbakır" },
    { sehir: "Düzce" },
    { sehir: "Edirne" },
    { sehir: "Elazığ" },
    { sehir: "Erzincan" },
    { sehir: "Erzurum" },
    { sehir: "Eskişehir" },
    { sehir: "Gaziantep" },
    { sehir: "Giresun" },
    { sehir: "Gümüşhane" },
    { sehir: "Hakkari" },
    { sehir: "Hatay" },
    { sehir: "Iğdır" },
    { sehir: "Isparta" },
    { sehir: "İstanbul" },
    { sehir: "İzmir" },
    { sehir: "Kahramanmaraş" },
    { sehir: "Karabük" },
    { sehir: "Karaman" },
    { sehir: "Kars" },
    { sehir: "Kastamonu" },
    { sehir: "Kayseri" },
    { sehir: "Kırıkkale" },
    { sehir: "Kırklareli" },
    { sehir: "Kırşehir" },
    { sehir: "Kilis" },
    { sehir: "Kocaeli" },
    { sehir: "Konya" },
    { sehir: "Kütahya" },
    { sehir: "Malatya" },
    { sehir: "Manisa" },
    { sehir: "Mardin" },
    { sehir: "Mersin" },
    { sehir: "Muğla" },
    { sehir: "Muş" },
    { sehir: "Nevşehir" },
    { sehir: "Niğde" },
    { sehir: "Ordu" },
    { sehir: "Osmaniye" },
    { sehir: "Rize" },
    { sehir: "Sakarya" },
    { sehir: "Samsun" },
    { sehir: "Siirt" },
    { sehir: "Sinop" },
    { sehir: "Sivas" },
    { sehir: "Şanlıurfa" },
    { sehir: "Şırnak" },
    { sehir: "Tekirdağ" },
    { sehir: "Tokat" },
    { sehir: "Trabzon" },
    { sehir: "Tunceli" },
    { sehir: "Uşak" },
    { sehir: "Van" },
    { sehir: "Yalova" },
    { sehir: "Yozgat" },
    { sehir: "Zonguldak" },
  ];
  // Arama içerisindeki saklayacağımız değişken ve onu tanımlayacağımız fonksiyon.
  const [name, setName] = useState("");
  const [telephone_number, setTelephoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [vehicle_model_year, setVehicleModelYear] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleTelephoneNumber = (e) => {
    setTelephoneNumber(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleVehicleType = (e) => {
    setVehicleType(e.target.value);
  };

  const handleVehicleModelYear = (e) => {
    setVehicleModelYear(e.target.value);
  };
  // Submit
  const handleSubmitCarrier = (e) => {
    //Normal davranışını yaptırmaz.
    e.preventDefault();

    const carier = {
      name,
      telephone_number,
      city,
      vehicle_type,
      vehicle_model_year,
      k_document_image: "",
      drivers: [
        {
          driver_name: "",
          driver_tc_number: "",
          driver_telephone_number: "",
          driver_licence_image_front: "",
          driver_licence_image_back: "",
        },
      ],
      vehicles: [
        {
          license_plate: "",
          traffic_insurance_image: "",
          vehicle_license_image: "",
          k_warrant_number: "",
          k_warrant_image: "",
        },
      ],
    };
    console.log(carier);

    axios
      .post("https://kamyongelsinadmin.herokuapp.com/carrier/api", carier)
      .then(() => console.log("Carier Created"))
      .catch((err) => {
        console.error(err);
      });
    alert("Kaydınız başarıyla alınmıştır.");
    window.location.href = "/";
  };

  return (
    <React.Fragment>
      <div className="bg-light mt-5 pt-5">
        <div className="container col-xl-10 col-xxl-8 px-4">
          <div className="row align-items-center g-lg-5 py-1">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-6 fw-bold lh-1 mb-3">Nakliyeci misin?</h1>
              <p className="col-lg-10 fs-4">
                Sana ulaşabilmemiz için lütfen formu doldur. Bu sayede seni yeni
                nakliye fırsatlarından haberdar edebileceğiz.
              </p>
            </div>
            <div className="col-lg-6 col-md-10 mx-auto">
              <form
                onSubmit={handleSubmitCarrier}
                className="p-4 p-md-5 border rounded-3 bg-light"
              >
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    onChange={handleName}
                    className="form-control"
                    placeholder="İsim Soyisim"
                    name="name"
                    id="name"
                    required
                  />
                  <label for="floatingPassword">İsim Soyisim</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="number"
                    name="telephone_number"
                    className="form-control"
                    data-mask="(0000) 000 0000"
                    data-mask-visible="true"
                    placeholder="Telefon Numaranız"
                    autocomplete="off"
                    onChange={handleTelephoneNumber}
                    required
                  />
                  <label for="floatingPassword">Telefon Numaranız</label>
                </div>

                <div className="form-floating mb-3">
                  <select
                    class="form-select"
                    onChange={handleCity}
                    aria-label="Default select example"
                    defaultValue={'DEFAULT'}
                    required
                  >
                    <option value="DEFAULT" disabled>Seçiniz</option>
                    {citys.map((item) => {
                      return <option value={item.sehir}>{item.sehir}</option>;
                    })}
                  </select>
                  <label for="floatingInput">Yaşadığınız şehir</label>
                </div>

                <div className="form-floating mb-3">
                  <select
                    name="vehicle_type"
                    class="form-select"
                    onChange={handleVehicleType}
                  >
                    <option selected="">Seçiniz</option>
                    <option value="tir_acik_1360">Tır Açık 13.60</option>
                    <option value="tir_kapali_1360">Tır Kapalı 13.60</option>
                    <option value="tir_frigo_1360">Tır Frigo 13.60</option>
                    <option value="tir_kısa">Tır Kısa (Açık damperli)</option>
                    <option value="kirkayak_acik">Kırkayak Açık</option>
                    <option value="kirkayak_kapali">Kırkayak Kapalı</option>
                    <option value="kirkayak_frigo">Kırkayak Frigo</option>
                    <option value="kamyon_onteker_acik">
                      Kamyon Onteker Açık
                    </option>
                    <option value="kamyon_onteker_kapalı">
                      Kamyon Onteker Kapalı
                    </option>
                    <option value="kamyon_onteker_frigo">
                      Kamyon Onteker Frigo
                    </option>
                    <option value="alti_teker_acik">6 Teker Açık</option>
                    <option value="alti_teker_kapali">6 Teker Kapalı</option>
                    <option value="kamyonet_kasali_acik">
                      Kamyonet Kasalı Açık
                    </option>
                    <option value="kamyonet_kasali_kapali">
                      Kamyonet Kasalı Kapalı
                    </option>
                    <option value="kamyonet_panelvan">Kamyonet Panelvan</option>
                  </select>
                  <label for="floatingInput">Aracınızın Türü</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    class="form-select"
                    onChange={handleVehicleModelYear}
                    name="vehicle_model_year"
                  >
                    <option selected="">Seçiniz</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                  </select>
                  <label for="floatingInput">Aracınızın Model yılı</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  <i class="fas fa-truck-moving"></i> Kayıt Ol
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CarrierForm;
