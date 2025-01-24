import classes from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Map from "../Map/Map/Map";
import Footer from "../Footer.js/Footer";
const Home = () => {
  return (
    <div className={classes.main}>
      <Navbar />
      <Map />
      <Footer/>
    </div>
  );
};

export default Home;
