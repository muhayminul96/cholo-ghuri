import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blog/Blogs/Blogs";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import NotFoundError from "./Pages/NotFoundError/NotFoundError";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/UserAuth/Login/Login";
import Signup from "./Pages/UserAuth/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/booking/:serviceId" element={<Booking></Booking>}></Route>
        <Route path="*" element={<NotFoundError></NotFoundError>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
