
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import Blog from "./pages/About";
import Explores from "./pages/Explores";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router> {/* this is for the browser */}
        <Navbar />
        <Routes> {/* this is where it switch you to another page */}
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' exact element={<Blog/>} />
          <Route path='/book' exact element={<Menu/>} />
          <Route path='/explores' exact element={<Explores/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
