import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import Productpage from "../../pages/Productpage";
import Authpage from "../../pages/Authpage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<Productpage />} />
        <Route path="/auth" element={<Authpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
