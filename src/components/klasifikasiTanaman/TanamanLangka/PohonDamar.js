import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/TanamanLangka/PohonDamar.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Pohon Damar</div>
                  </div>
                  <p>Genus Agathis, sering disebut pohon damar, atau dalam bahasa Maori disebut kauri, adalah genus dari 21 spesies pohon yang selalu berdaun sepanjang tahun dari famili konifer purba Araucariaceae. Meskipun dahulunya menyebar luas selama periode Jurasik, sekarang mereka hanya ditemukan di daerah yang lebih kecil di belahan Bumi selatan. Pohon-pohon ini bercirikan batang yang sangat besar dan percabangan sedikit atau tidak ada pada beberapa bagian batang di bawah tajuk. Pohon muda biasanya berbentuk kerucut; hanya saat dewasa tajuknya menjadi lebih membulat atau tidak beraturan. Kulit kayunya lembut dan berwarna abu-abu muda atau cokelat abu-abu, biasanya mengelupas menjadi serpihan-serpihan yang menebal pada pohon yang lebih tua. Struktur cabangnya sering kali horizontal, atau menaik saat lebih besar. Cabang paling bawah sering kali meninggalkan luka cabang melingkar bila mereka tanggal dari batang yang berada lebih di bawah.</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Tanaman Langka</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Agathis</span>                          
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