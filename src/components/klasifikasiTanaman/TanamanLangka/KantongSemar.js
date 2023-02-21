import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/TanamanLangka/KantongSemar.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Kantong Semar</div>
                  </div>
                  <p>Kantong semar adalah tumbuhan karnivora yang membentuk genus Nepenthes dan termasuk dalam famili monotipik Nepenthaceae. Ia terdiri dari 130 spesies tidak termasuk jenis hibrida alami maupun buatan. Genus ini merupakan tumbuhan karnivor di kawasan tropis Dunia Lama, kini meliputi negara Indonesia, Republik Rakyat Tiongkok bagian selatan, Indochina, Malaysia, Filipina, Madagaskar bagian barat, Seychelles, Kaledonia Baru, India, Sri Lanka, dan Australia. Habitat dengan spesies terbanyak ialah di pulau Kalimantan dan Sumatra.</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Tanaman Langka</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Nepenthes</span>                          
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