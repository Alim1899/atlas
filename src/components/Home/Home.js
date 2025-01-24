import classes from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import MapLayout from "../Map/MapLayout/MapLayout";
import Footer from "../Footer.js/Footer";
const Home = () => {
  return (
    <div className={classes.main}>
      <Navbar />
      <MapLayout />
      <Footer/>
    </div>
  );
};

export default Home;
