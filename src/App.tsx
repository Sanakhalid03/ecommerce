import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Productpage from "./Components/Productpage";
import Productscategory from "./Components/Productscategory";
import Specificcategory from "./Components/Specificcategory";

function App() {
  return (
    <>
      <Header />
  
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/productpage/:id"} element={<Productpage />} />
        <Route path={"/categories/:name/productpage/:id"} element={<Productpage />} />
        <Route path={"/productscategory"} element={<Productscategory />} />
        <Route path={"/categories/:name"} element={<Specificcategory />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
