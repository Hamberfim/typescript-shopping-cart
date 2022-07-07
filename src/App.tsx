import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    /* tag fragment so it will render everything to the screen */
    <ShoppingCartProvider children={undefined}>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          {/* navigation routes - pages */}
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route
            exact
            path="https://github.com/Hamberfim/typescript-shopping-cart"
            element={}
          />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
