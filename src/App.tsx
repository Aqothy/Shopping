import { Routes, Route } from "react-router-dom";
import { Store } from "./Pages/Store";
import { NavBar } from "./Components/NavBar";
import "./App.css";
import { ShoppingCartPopup } from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartPopup>
        <NavBar></NavBar>
        <Routes>
          <Route path="/store" element={<Store />} />
        </Routes>
      </ShoppingCartPopup>
    </>
  );
}

export default App;
