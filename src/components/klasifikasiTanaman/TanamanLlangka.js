import Header from "../../components/Header";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link} from "react-router-dom";

function BasicExample() {
  return (
    <>
    <Header />
    <div className="container">     
        <div className="section">
          <div className="row">          
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row justify-content-center">
    

    
    
    <Card style={{ width: '18rem' }}>
    <img src="/images/TanamanLangka/Tengkawang.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
      <Card.Body>
        <Card.Title>Tengkawang</Card.Title>
        <Card.Title><h6>Status : Tanaman Langka</h6> </Card.Title>
        <Link to="/Tengkawang">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/TanamanLangka/DaunPayung.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Daun Payung</Card.Title>
        <Card.Title><h6>Status : Tanaman Langka</h6> </Card.Title>
      
        <Link to="/DaunPayung">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/TanamanLangka/PohonDamar.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Pohon Damar</Card.Title>
        <Card.Title><h6>Status : Tanaman Langka</h6> </Card.Title> 
        <Link to="/PohonDamar">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/TanamanLangka/KantongSemar.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Kantong Semar</Card.Title>
        <Card.Title><h6>Status : Tanaman Langka</h6> </Card.Title> 
        <Link to="/KantongSemar">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/TanamanLangka/BungaCendana.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Bunga Cendana</Card.Title>
        <Card.Title><h6>Status : Tanaman Langka</h6> </Card.Title> 
        <Link to="/BungaCendana">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/TanamanLangka/BungaBangkaiRafflesia.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Bunga Bangkai Rafflesia</Card.Title>
        <Card.Title><h6>Status : Tanaman Langka</h6> </Card.Title> 
        <Link to="/BungaBangkaiRafflesia">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/TanamanLangka/EldeweissJawa.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Eldeweiss Jawa</Card.Title>
        <Card.Title><h6>Status : Tanaman Langka</h6> </Card.Title> 
        <Link to="/EldeweissJawa">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicExample;