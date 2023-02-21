import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/TanamanLangka/DaunPayung.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Daun Payung</div>
                  </div>
                  <p>Daun Payung adalah tumbuhan langka di Indonesia. Tumbuhan ini memiliki nama latin Johannesteijsmannia altifrons. Tanaman ini juga bisa disebut daun alo, daun raksasa, atau daun sang. Keunikan utama daun Payung terlihat dari daunnya berukuran raksasa, yakni 6 meter dengan lebar 1 meter. Bentuknya melebar di tengah serta meruncing di bagian pangkal dan ujung. Moms bisa menemukan tumbuhan ini di daerah Sumatera. Pada zaman dahulu, daun ini digunakan masyarakat untuk dinding rumah atau atap rumah. Tanaman Obat Langka Selain tanaman langka di atas, Indonesia juga memiliki banyak jenis tanaman obat.</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Tanaman Langka</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Johannesteijsmannia altifrons</span>                          
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