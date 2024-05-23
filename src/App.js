import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Stores/Pages/Home/Home";
import MobilePage from "./Stores/Pages/MobilePage";
import AcPage from "./Stores/Pages/AcPage";
import Bookspage from "./Stores/Pages/Bookspage";
import Computerspage from "./Stores/Pages/Computerspage";
import Fridgepage from "./Stores/Pages/Fridgepage";
import FurniturePage from "./Stores/Pages/FurniturePage";
import KitchenPage from "./Stores/Pages/KitchenPage";
import Menpage from "./Stores/Pages/Menpage";
import Speakerpage from "./Stores/Pages/Speakerspage";
import Tvpage from "./Stores/Pages/Tvpage";
import Watchpage from "./Stores/Pages/Watchpage";
import Womenpage from "./Stores/Pages/Womenpage";
import SingleMobile from "./Stores/singles/SingleMobile";
import SingleAc from "./Stores/singles/SingleAc";
import SingleBook from "./Stores/singles/SingleBook";
import SingleCom from "./Stores/singles/SingleCom";
import SingleFridge from "./Stores/singles/SingleFridge";
import SingleFurniture from "./Stores/singles/SingleFurniture";
import SingleKitchen from "./Stores/singles/SingleKitchen";
import SingleMen from "./Stores/singles/SingleMen";
import SingleSpeaker from "./Stores/singles/SingleSpeaker";
import SingleTv from "./Stores/singles/SingleTv";
import SingleWatch from "./Stores/singles/SingleWatch";
import SingleWomen from "./Stores/singles/SingleWomen";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/books" element={<Bookspage />} />
        <Route path="/computers" element={<Computerspage />} />
        <Route path="/fridges" element={<Fridgepage />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/men" element={<Menpage />} />
        <Route path="/speakers" element={<Speakerpage />} />
        <Route path="/tvs" element={<Tvpage />} />
        <Route path="/watches" element={<Watchpage />} />
        <Route path="/women" element={<Womenpage />} />
        <Route path="/mobiles/:id" element={<SingleMobile />} />
        <Route path="/ac/:id" element={<SingleAc />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/computers/:id" element={<SingleCom />} />
        <Route path="/fridge/:id" element={<SingleFridge />} />
        <Route path="/furniture/:id" element={<SingleFurniture />} />
        <Route path="/kitchen/:id" element={<SingleKitchen />} />
        <Route path="/men/:id" element={<SingleMen />} />
        <Route path="/speakers/:id" element={<SingleSpeaker />} />
        <Route path="/tvs/:id" element={<SingleTv/>} />
        <Route path="/watches/:id" element={<SingleWatch/>} />
        <Route path="/women/:id" element={<SingleWomen />} />
      </Routes>
    </div>
  );
};
export default App;
