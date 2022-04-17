import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFoundError from "./Pages/NotFoundError/NotFoundError";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundError></NotFoundError>}></Route>
      </Routes>
    </div>
  );
}

export default App;
