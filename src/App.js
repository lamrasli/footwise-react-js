import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Products from "./components/Pages/Products/Products";
import Contact from "./components/Pages/Contact/Contact";
import Home from "./components/Pages/Home/Home";


import Pricing from "./components/Pages/Pricing/Pricing";
function App() {
  return (
    <>
    <Router>
        <Header />
        <Container >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Container>
    </Router>
    </>
  );
}

export default App;
