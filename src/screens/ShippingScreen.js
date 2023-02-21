import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Actions/cartActions";
import Form from 'react-bootstrap/Form';

const ShippingScreen = ({ history }) => {

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [catatan, setCatatan] = useState(shippingAddress.catatan);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country,catatan }));
    history.push("/payment");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>Alamat Pengiriman</h6>
          <input
            type="text"
            placeholder="Masukan Alamat"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Masukan Kota"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Masukan Kode Pos"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Maasukan Provinsi"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />       
          <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={5}  type="text"
            placeholder="Masukan catatan"
            value={catatan}
            required
            onChange={(e) => setCatatan(e.target.value)}/>
      </Form.Group>
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
