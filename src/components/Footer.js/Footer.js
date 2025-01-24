import classes from "./Footer.module.css";
import github from "../../assets/footer/github.svg";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <ul className={classes.list}>
      <li className={classes.listItem}>
        {" "}
        <a href="https://github.com/Alim1899" rel="noreferrer" target="_blank">
          <img className={classes.icon} src={github} alt="github"></img>
        </a>
      </li>
      <li className={classes.listItem}>All Rights Reserved</li>
      <li className={classes.listItem}>{currentYear}</li>
    </ul>
  );
};

export default Footer;
