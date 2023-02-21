import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/TanamanLangka/BungaCendana.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Bunga Cendana</div>
                  </div>
                  <p>Santalum album atau dikenal dengan nama Cendana adalah pohon penghasil kayu cendana dan minyak cendana. Kayunya digunakan sebagai rempah-rempah, bahan dupa, aromaterapi, campuran parfum, serta sangkur keris (warangka). Kayu yang baik bisa menyimpan aromanya selama berabad-abad. Konon di Sri Lanka kayu ini digunakan untuk membalsam jenazah putri-putri raja sejak abad ke-9. Di Indonesia, kayu ini banyak ditemukan di Nusa Tenggara Timur, khususnya di Pulau Timor, meskipun sekarang bisa ditemukan pula di Pulau Jawa dan pulau-pulau Nusa Tenggara lainnya.
Cendana adalah tumbuhan parasit pada awal kehidupannya. Kecambahnya memerlukan pohon inang untuk mendukung pertumbuhannya, karena perakarannya sendiri tidak sanggup mendukung kehidupannya. Karena prasyarat inilah cendana sukar dikembangbiakkan atau dibudidayakan.</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Tanaman Langka</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Santalum album</span>                          
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
    </>
  );
}

export default BasicExample;