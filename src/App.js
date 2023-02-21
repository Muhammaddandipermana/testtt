import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import TanamanLangka from "./components/TanamanLangka";
import SemakTinggi from "./components/klasifikasiTanaman/SemakTinggi";
import TanamanLlangka from "./components/klasifikasiTanaman/TanamanLlangka";
import Pohon from "./components/klasifikasiTanaman/Pohon";
import SemakSedang from "./components/klasifikasiTanaman/SemakSedang";
import SemakRendah from "./components/klasifikasiTanaman/SemakRendah";
import GroundCover from "./components/klasifikasiTanaman/GroundCover";
import Rumput from "./components/klasifikasiTanaman/Rumput";
import ShopSection from "./components/homeComponents/ShopSection";
import SapuTangan from "./components/klasifikasiTanaman/KlasifikasiPohon/SapuTangan"
import Bungur from "./components/klasifikasiTanaman/KlasifikasiPohon/Bungur"
import DadapMerah from "./components/klasifikasiTanaman/KlasifikasiPohon/DadapMerah"
import CassilaFistula from "./components/klasifikasiTanaman/KlasifikasiPohon/CassilaFistula"
import Kamboja from "./components/klasifikasiTanaman/KlasifikasiSemakTinggi/Kamboja"
import Kastuba from "./components/klasifikasiTanaman/KlasifikasiSemakTinggi/Kastuba"
import Kenanga from "./components/klasifikasiTanaman/KlasifikasiSemakTinggi/Kenanga"
import Mawar from "./components/klasifikasiTanaman/KlasifikasiSemakSedang/Mawar"
import Melati from "./components/klasifikasiTanaman/KlasifikasiSemakSedang/Melati"
import Kemuning from "./components/klasifikasiTanaman/KlasifikasiSemakSedang/Kemuning"
import Keningkir from "./components/klasifikasiTanaman/KlasifikasiSemakRendah/Keningkir"
import KupingGajah from "./components/klasifikasiTanaman/KlasifikasiSemakRendah/KupingGajah"
import Aglaonema from "./components/klasifikasiTanaman/KlasifikasiSemakRendah/Aglaonema"
import TapakDara from "./components/klasifikasiTanaman/KlasifikasiSemakRendah/TapakDara"
import AsokaJawa from "./components/klasifikasiTanaman/KlasifikasiGroundCover/AsokaJawa"
import KacangKacangan from "./components/klasifikasiTanaman/KlasifikasiGroundCover/KacangKacangan"
import RumputKucai from "./components/klasifikasiTanaman/KlasifikasiGroundCover/RumputKucai"
import RumputManila from "./components/klasifikasiTanaman/KlasifikasiRumput/RumputManila"
import RumputPeking from "./components/klasifikasiTanaman/KlasifikasiRumput/RumputPeking"
import BungaBangkaiRafflesia from "./components/klasifikasiTanaman/TanamanLangka/BungaBangkaiRafflesia"
import BungaCendana from "./components/klasifikasiTanaman/TanamanLangka/BungaCendana"
import DaunPayung from "./components/klasifikasiTanaman/TanamanLangka/DaunPayung"
import EldeweissJawa from "./components/klasifikasiTanaman/TanamanLangka/EldeweissJawa"
import KantongSemar from "./components/klasifikasiTanaman/TanamanLangka/KantongSemar"
import PohonDamar from "./components/klasifikasiTanaman/TanamanLangka/PohonDamar"
import Tengkawang from "./components/klasifikasiTanaman/TanamanLangka/Tengkawang"











const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/page/:pagenumber" component={HomeScreen} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
          exact
        />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/TanamanLangka" component={TanamanLangka} />
        <Route path="/TanamanLlangka" component={TanamanLlangka} />
        <Route path="/BungaBangkaiRafflesia" component={BungaBangkaiRafflesia} />
        <Route path="/BungaCendana" component={BungaCendana} />
        <Route path="/DaunPayung" component={DaunPayung} />
        <Route path="/EldeweissJawa" component={EldeweissJawa} />
        <Route path="/KantongSemar" component={KantongSemar} />
        <Route path="/PohonDamar" component={PohonDamar} />
        <Route path="/Tengkawang" component={Tengkawang} />
        <Route path="/SemakTinggi" component={SemakTinggi} />
        <Route path="/Pohon" component={Pohon} />
        <Route path="/SemakRendah" component={SemakRendah} />
        <Route path="/SemakSedang" component={SemakSedang} />
        <Route path="/GroundCover" component={GroundCover} />
        <Route path="/Rumput" component={Rumput} />
        <Route path="/SapuTangan" component={SapuTangan} />
        <Route path="/Bungur" component={Bungur} />
        <Route path="/DadapMerah" component={DadapMerah} />
        <Route path="/CassilaFistula" component={CassilaFistula} />
        <Route path="/Kamboja" component={Kamboja} />
        <Route path="/Kastuba" component={Kastuba} />
        <Route path="/Kenanga" component={Kenanga} />
        <Route path="/Mawar" component={Mawar} />
        <Route path="/Kemuning" component={Kemuning} />
        <Route path="/Melati" component={Melati} />
        <Route path="/TapakDara" component={TapakDara} />
        <Route path="/KupingGajah" component={KupingGajah} />
        <Route path="/Keningkir" component={Keningkir} />
        <Route path="/Aglaonema" component={Aglaonema} />
        <Route path="/KacangKacangan" component={KacangKacangan} />
        <Route path="/RumputKucai" component={RumputKucai} />
        <Route path="/AsokaJawa" component={AsokaJawa} />
        <Route path="/RumputPeking" component={RumputManila} />
        <Route path="/RumputManila" component={RumputPeking} />


        <Route path="/ShopSection" component={ShopSection} />
        <PrivateRouter path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <PrivateRouter path="/shipping" component={ShippingScreen} />
        <PrivateRouter path="/payment" component={PaymentScreen} />
        <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
        <PrivateRouter path="/order/:id" component={OrderScreen} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
