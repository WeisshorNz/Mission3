import StudentProyectLibrary from "./pages/StudentProjectLibrary";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentProyectLibrary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
