import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontBackCard from "./front-back-card/FrontBackCard";
import PassportPhoto from "./passport-photo/PassportPhoto";
import Home from "./home/Home";


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="front-back-card" element={<FrontBackCard />} />
      <Route path="passport-photo" element={<PassportPhoto />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
