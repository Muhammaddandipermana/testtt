import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import { Carousel, Navbar, Nav, NavDropdown,Button } from "react-bootstrap";

const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <Navbar expand="lg">
              <Navbar.Brand href="#home" className="btn-small"><strong><small>The Plant Marketplace Indonesia</small></strong></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="https://theplant.vercel.app/">Home</Nav.Link>
                  <Nav.Link href="https://wa.me/6289627706016">Contact</Nav.Link>
                  <NavDropdown title="Social Media" id="basic-nav-dropdown">
                    <div className="justify-content-center justify-content-lg-end d-flex align-items-center">
                      <Nav.Link href="https://m.facebook.com/100006825333146/">
                        <i className="fab fa-facebook-f"></i>
                      </Nav.Link>
                      <Nav.Link href="https://www.instagram.com/muhammaddandipermana/followers/">
                        <i className="fab fa-instagram"></i>
                      </Nav.Link>
                      <Nav.Link to="">
                        <i className="fab fa-linkedin-in"></i>
                      </Nav.Link>
                      <Nav.Link to="">
                        <i className="fab fa-youtube"></i>
                      </Nav.Link>
                      <Nav.Link href="https://youtube.com/@rtxyami530">
                        <i className="fab fa-pinterest-p"></i>
                      </Nav.Link>
                    </div>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logotheplant.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                        <Nav.Link className="dropdown-item" href="https://www.admintheplant.cf/login">
                          Admin
                        </Nav.Link>
                      </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
              </div>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1>
                    <font color="white" size="5">
                      <strong>Tanaman</strong>
                    </font>
                  </h1>
                  <font color="white" size="2">
                    <strong>
                      "Rasa itu seperti tanaman, harus dirawat dan dijaga kalau
                      tidak ya pasti mati dan hilang"
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img2.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black" size="5">
                      <strong>Tanaman</strong>
                    </font>
                  </h1>

                  <font color="black" size="2">
                    <strong>
                      "Kita diciptakan untuk mencintai. Tanpa cinta, kita
                      seperti tanaman tanpa air"
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img3.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black" size="5">
                      <strong>Tanaman</strong>
                    </font>
                  </h1>
                  <font color="black" size="2">
                    <strong>
                      "Kebebasan, ketika mulai berakar, adalah tanaman dengan
                      pertumbuhan yang cepat"
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img4.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black" size="5">
                      <strong>Bunga</strong>
                    </font>
                  </h1>
                  <font color="black" size="2">
                    <strong>"Bunga selalu membuat orang lebih baik"</strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img5.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="white" size="5">
                      <strong>Bunga</strong>
                    </font>
                  </h1>
                  <font color="white" size="2">
                    <strong>
                      "Dalam kegembiraan dan kesedihan, bunga adalah teman setia
                      kita"
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img6.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black" size="5">
                      <strong>Tanaman</strong>
                    </font>
                  </h1>
                  <font color="black" size="2">
                    <strong>"Gunakan tanaman untuk menghidupkan"</strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img7.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black" size="5">
                      <strong>Tanaman</strong>
                    </font>
                  </h1>
                  <font color="black" size="2">
                    <strong>"Tanaman adalah hal yang membahagiakan"</strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img8.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black" size="5">
                      <strong>Bunga</strong>
                    </font>
                  </h1>
                  <font color="black" size="2">
                    <strong>
                      "Setiap bunga adalah jiwa yang mekar di alam"
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img9.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black" size="5">
                      <strong>Pangan</strong>
                    </font>
                  </h1>
                  <font color="black" size="2">
                    <strong>
                      “Katakan apa yang Anda makan dan saya akan memberi tahu
                      siapa Anda”
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img10.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black" size="5">
                      <strong>Pangan</strong>
                    </font>
                  </h1>
                  <font color="black" size="2">
                    <strong>
                      “Makan adalah kebutuhan, tapi makan dengan pintar adalah
                      seni”
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            {/* <div className="col-12 d-flex align-items-center">
              <form onSubmit={submitHandler} className="input-group">
                <input
                  type="search"
                  className="form-control rounded search"
                  placeholder="Cari Tanaman"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit" className="search-button">
                  search
                </button>
              </form>
            </div> */}
            <br></br>
            <Link to="/ShopSection">
            <Button variant="success" >Beli Tanaman</Button>{' '}
            </Link >
            <Link to="/TanamanLlangka">
            <Button variant="success" >Tanaman Langka</Button>{' '}
            </Link >
            <Link to="/Pohon">
            <Button variant="success" >Pohon</Button>{' '}
            </Link >
            <Link to="/SemakTinggi"> <Button variant="success" >Semak Tinggi</Button>{' '}</Link>
            <Link to="/SemakSedang">
            <Button variant="success">Semak Sedang</Button>{' '}
            </Link>
            <Link to="/SemakRendah">
            <Button variant="success" >Semak Rendah</Button>{' '}
            </Link >
            <Link to="/GroundCover"> <Button variant="success" >Ground Cover</Button>{' '}</Link>
            <Link to="/Rumput">
            <Button variant="success">Rumput</Button>{' '}
            </Link>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="/images/logotheplant.png" />
                </Link>
              </div>
              {/* <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div> */}
              <div className="col-9 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Nav.Link href="https://www.admintheplant.cf/login">
                          Admin
                        </Nav.Link>
                  </>
                )}

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1>
                    <strong>Tanaman</strong>
                  </h1>
                  <p>
                    "Rasa itu seperti tanaman, harus dirawat dan dijaga kalau
                    tidak ya pasti mati dan hilang"
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img2.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black">
                      <strong>Tanaman</strong>
                    </font>
                  </h1>
                  <font color="black">
                    <strong>
                      "Kita diciptakan untuk mencintai. Tanpa cinta, kita
                      seperti tanaman tanpa air"
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img3.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black">
                      <strong>Tanaman</strong>
                    </font>
                  </h1>
                  <font color="black">
                    <strong>
                      "Kebebasan, ketika mulai berakar, adalah tanaman dengan
                      pertumbuhan yang cepat"
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img4.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black">
                      <strong>Bunga</strong>
                    </font>
                  </h1>
                  <font color="black">
                    <strong>"Bunga selalu membuat orang lebih baik"</strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img5.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Bunga</h3>
                  <p>
                    "Dalam kegembiraan dan kesedihan, bunga adalah teman setia
                    kita"
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img6.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black">
                      <strong>Tanaman</strong>
                    </font>
                  </h1>
                  <font color="black">
                    <strong>"Gunakan tanaman untuk menghidupkan"</strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img7.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black">
                      <strong>Tanaman</strong>
                    </font>
                  </h1>
                  <font color="black">
                    <strong>"Tanaman adalah hal yang membahagiakan"</strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img8.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black">
                      <strong>Bunga</strong>
                    </font>
                  </h1>
                  <font color="black">
                    <strong>
                      "Setiap bunga adalah jiwa yang mekar di alam"
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img9.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black">
                      <strong>Pangan</strong>
                    </font>
                  </h1>
                  <font color="black">
                    <strong>
                      “Katakan apa yang Anda makan dan saya akan memberi tahu
                      siapa Anda”
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/img10.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>
                    <font color="black">
                      <strong>Pangan</strong>
                    </font>
                  </h1>
                  <font color="black">
                    <strong>
                      “Makan adalah kebutuhan, tapi makan dengan pintar adalah
                      seni”
                    </strong>
                  </font>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div>           
            </div>
            <br></br>
            <div className="d-flex justify-content-center">
            <br></br>
            <Link to="/ShopSection">
            <Button variant="success" >Beli Tanaman</Button>{' '}
            </Link >
            <Link to="/TanamanLlangka">
            <Button variant="success" >Tanaman Langka</Button>{' '}
            </Link >
            <Link to="/Pohon">
            <Button variant="success" >Pohon</Button>{' '}
            </Link >
            <Link to="/SemakTinggi"> <Button variant="success" >Semak Tinggi</Button>{' '}</Link>
            <Link to="/SemakSedang">
            <Button variant="success">Semak Sedang</Button>{' '}
            </Link>
            <Link to="/SemakRendah">
            <Button variant="success" >Semak Rendah</Button>{' '}
            </Link >
            <Link to="/GroundCover"> <Button variant="success" >Ground Cover</Button>{' '}</Link>
            <Link to="/Rumput">
            <Button variant="success">Rumput</Button>{' '}
            </Link>
              </div>
            
          </div>         
        </div>
        
      </div>
     
    </div>
  );
};

export default Header;
