import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/SemakTinggi/Kamboja.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Kamboja</div>
                  </div>
                  <p>Kemboja,  kamboja atau semboja   (Plumeria) adalah sekelompok tumbuhan dalam genus Plumeria. Bentuknya berupa pohon kecil dengan daun jarang namun tebal. Bunganya yang harumnya sangat khas, dengan mahkota berwarna putih hingga merah keunguan, biasanya lima helai. Bunga dengan empat atau enam helai mahkota bunga oleh masyarakat tertentu dianggap memiliki kekuatan gaib. Jenis akarnya serabut dan tekstur bunganya tidak terlalu kasar dan tidak terlalu halus.
Tumbuhan ini berasal dari Amerika Tengah. Nama Plumeria diberikan untuk menghormati Charles Plumier (1646-1706), pakar botani asal Prancis. Walaupun berasal dari tempat yang jauh, kemboja sekarang merupakan pohon yang sangat populer di Pulau Bali karena ditanam di hampir setiap pura serta sudut kampung, dan memiliki fungsi penting dalam kebudayaan setempat. Di beberapa tempat di Nusantara, termasuk Malaya, kemboja ditanam di pekuburan sebagai tumbuhan peneduh dan penanda tempat. Kemboja dapat diperbanyak dengan mudah, melalui stek batang.
Plumeria saat ini populer digunakan sebagai tanaman hias outdoor awalnya tanaman ini hanya digunakan sebagai tanaman kuburan.
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Pohon</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Plumeria</span>                          
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