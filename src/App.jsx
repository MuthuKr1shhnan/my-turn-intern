import Merge from "./pages/Merge";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/merge-pdf' element={<Merge />} />
      </Routes>
    </>
  );
}

export default App;
