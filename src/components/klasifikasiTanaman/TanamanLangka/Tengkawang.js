import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/TanamanLangka/Tengkawang.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Tengkawang</div>
                  </div>
                  <p>Tengkawang banyak tumbuh di hutan Kalimantan Barat dan telah dibudidayakan sejak 1881. Pohon ini punya nilai ekonomis yang tinggi, sebab merupakan penghasil minyak nabati. Salah satu jenisnya yang paling populer adalah biji meranti merah, yang banyak diolah untuk menghasilkan minyak nabati. Turunannya juga digunakan sebagai bahan dasar pembuatan makanan, cokelat, pelumas, obat, lilin, dan kosmetik. Bisa terbayang bukan betapa banyak kegunaannya? Hal yang sama juga dirasakan oleh suku Dayak di Kalimantan Barat yang menganggap tengkawang sebagai pohon kehidupan. Bahkan karena manfaatnya yang penting, pohon ini diwariskan kepada keturunannya. Jika sudah tua, batangnya digunakan untuk membuat rumah. Semoga pohon ini tetap lestari agar bisa terus diwariskan dan anak cucu kita bisa melihat tanaman ini.
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Tanaman Langka</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Shorea</span>                          
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