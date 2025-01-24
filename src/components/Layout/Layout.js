import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../Home/Home";
import Map from "../Map/Map/Map";
import { MapsProvider } from "../Map/MapContext/MapContext";
const Layout = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
        <MapsProvider>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/map" element={<Map />} />
      </Routes>
        </MapsProvider>
    </BrowserRouter>
  );
};
export default Layout;
