import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useContext } from "react";
import {
  ContextGlobal,
  ContextProvider,
} from "./Components/utils/ContextGlobal";

function App() {
  const context = useContext(ContextGlobal);

  return (
    <>
      <ContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
