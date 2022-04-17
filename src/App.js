import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFoundError from "./Pages/NotFoundError/NotFoundError";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="*" element={<NotFoundError></NotFoundError>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
