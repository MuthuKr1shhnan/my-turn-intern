import Merge from "./pages/converstions/Merge";


import { Route, Routes } from "react-router-dom";

import  Home  from "./pages/Home";
import PDFPreviewTest from "./components/PdfPreviewTest";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/merge-pdf' element={<Merge />} />
         <Route path='/pdf' element={<PDFPreviewTest />} />
      </Routes>
    </>
  );
}

export default App;
