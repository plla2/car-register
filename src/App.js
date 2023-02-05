import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CarListing from "./CarListing";
import CarCreate from "./CarCreate";
import CarEdit from "./CarEdit";
import CarDetail from "./CarDetail";

function App() {
  return (
    <div className="App">
      <h1>Entered Cars's Info</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarListing />}></Route>
          <Route path="/car/create" element={<CarCreate />}></Route>
          <Route path="/car/edit/:carid" element={<CarEdit />}></Route>
          <Route path="/car/detail:carid" element={<CarDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
