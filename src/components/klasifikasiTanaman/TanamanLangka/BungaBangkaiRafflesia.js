import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/TanamanLangka/BungaBangkaiRafflesia.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Bunga Bangkai Rafflesia</div>
                  </div>
                  <p>Rafflesia atau puspa nusa adalah sebuah genus tumbuhan berbunga yang semua spesiesnya hidup sebagai parasit. Anatomi tumbuhan pada Rafflesia tidak lengkap. Organ tubuh dari Rafflesia hanya berbentuk bunga yang mekar atau kuncup saja. Rafflesia tidak memiliki bagian daun, batang, dan akar. Sebagai ganti dari tidak adanya akar, Rafflesia memiliki suatu jaringan bernama haustorium yang mampu menyerap nutrisi hasil fotosintesis dari jaringan tumbuhan inangnya.
Rafflesia termasuk genus tumbuhan yang mengalami kelangkaan karena kehidupannya secara biologis bergantung kepada tumbuhan inang dari jenis Tetrastigma tertentu. Kondisi pertumbuhan Rafflesia ditentukan oleh kondisi tumbuhan inang. Faktor utama yang memengaruhi pertumbuhannya ialah iklim dan lingkungan tumbuhan inangnya. Hampir semua spesies Rafflesia hanya dapat tumbuh di habitat alaminya.</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Tanaman Langka</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Rafflesia arnoldii</span>                          
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