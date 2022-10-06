import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/SemakTinggi/Kenanga.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Kenanga</div>
                  </div>
                  <p>Kenanga (Cananga odorata) adalah nama bagi sejenis bunga dan pohon yang menghasilkannya. Ada 2 kelompok utama kenanga yang dibudidayakan yaitu kelompok Cananga (forma marcophylla Steeins) dan Ylang-ylang (forma genuina Steeins). Cananga memiliki cabang tegak lurus terhadap batang sedangkan Ylang-ylang memiliki cabang yang terkulai dan daun lebih kecil.[1] Selain itu, masih dikenal pula kenanga perdu (Cananga odorata fruticosa), yang banyak ditanam sebagai hiasan di halaman rumah.
Kenanga biasa merupakan tumbuhan asli di Indonesia dan ylang-ylang tumbuhan asli Filipina. Kenanga lazim pula ditanam di Polinesia, Melanesia, dan Mikronesia. Di Indonesia, bunga kenanga banyak menempati peran di dalam upacara-upacara khusus misalnya dalam upacara perkawinan. Kenanga adalah flora identitas Provinsi Sumatra Utara.
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Pohon</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Cananga odorata</span>                          
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