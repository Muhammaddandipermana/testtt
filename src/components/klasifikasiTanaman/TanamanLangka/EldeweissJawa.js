import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/TanamanLangka/EldeweissJawa.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Eldeweiss Jawa</div>
                  </div>
                  <p>Anaphalis javanica, yang dikenal secara populer sebagai Edelweiss jawa (Javanese edelweiss) atau Bunga Senduro, adalah tumbuhan endemik zona alpina/montana di berbagai pegunungan tinggi Nusantara. Tumbuhan ini dapat mencapai ketinggian 8 meter dan dapat memiliki batang sebesar kaki manusia walaupun umumnya tidak melebihi 1 meter. Tumbuhan ini sekarang dikategorikan sebagai langka.
Biasanya Edelweiss berkembang biak dengan cara generatif karena serbuk-serbuk bunga generatif Edelweiss memiliki massa yang ringan, sehingga mudah terbawa oleh angin. Saat serbuk-serbuk menemukan tempat yang cocok untuk tumbuh, maka Edelweiss akan dapat tumbuh dengan baik
Bunga Edelweis adalah bunga endemik yang sering juga disebut sebagai Bunga Keabadian karena mampu tumbuh di tempat yang tandus dan bunganya tidak rontok karena pengaruh hormon tertentu.</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Tanaman Langka</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Anaphalis javanica</span>                          
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