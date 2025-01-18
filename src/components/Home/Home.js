import classes from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Map from "../Map/Map";
const Home = () => {
  return (
    <div className={classes.main}>
      <Navbar />
      <Map />
    </div>
  );
};

export default Home;
