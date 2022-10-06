import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/SemakTinggi/Kastuba.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Kastuba</div>
                  </div>
                  <p>Kastuba atau poinsettia (Euphorbia pulcherrima) adalah tanaman subtropis yang berasal dari Meksiko bagian selatan dan Amerika Tengah. Nama 'poinsettia' diambil dari nama duta besar pertama Amerika Serikat (AS) untuk Meksiko,[1] Joel Roberts Poinsett,[2] yang memperkenalkan tanaman hias ini ke AS pada tahun 1825.
Daun bagian atas yang berwarna merah sesuai dengan warna-warni hiasan Natal, meskipun terdapat pula forma yang daun bagian atasnya berwarna putih dan hijau muda. Di kawasan empat-musim, kastuba digunakan sebagai tanaman hias pengganti bunga yang sulit didapat di musim dingin.
Dalam folklor Amerika Selatan, kastuba merupakan tokoh utama dalam mitos penciptaan yang dipercaya Suku Maya sebagai makhluk perkasa dari dunia lain. Dalam bahasa Náhuatl, tanaman ini disebut cuitlaxochitl (bunga kotoran), karena benihnya tumbuh di atas kotoran burung yang makan biji kastuba. Dalam bahasa Spanyol, tanaman ini disebut disebut flor de pascua (bunga Paskah), flor de nochebuena (bunga malam Natal), atau arbolito de navidad (tumbuhan Natal).
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Pohon</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Euphorbia pulcherrima</span>                          
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