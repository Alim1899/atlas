import classes from "./MapList.module.css";
import menu from "../../../assets/map/menu.svg";
import { useState } from "react";
import SwitchButton from "../../UI/SwitchButton";
const MapList = () => {
  const [showMenu, setSHowMenu] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <div className={classes.mapHeaders}>
      <div className={classes.searchBar}>
        <input
          className={classes.searchMap}
          type="text"
          placeholder="მოძებნე რუკა"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <img
          onClick={() => setSHowMenu(!showMenu)}
          className={classes.menuIcon}
          src={menu}
          alt="menu"
        ></img>
      </div>
      {showMenu && (
        <div className={classes.menu}>
          <h4 className={classes.header}>რუკის ტიპები</h4>
          <SwitchButton label="აგროკლიმატი" switchId='agroclimate' mapChecked={false} />
          <SwitchButton label="გეოლოგია" switchId='geology' mapChecked={false} />
          <SwitchButton label="ქვათაცვენები" switchId='rockfall' mapChecked={false} />
          <SwitchButton label="მდინარეები" switchId='rivers' mapChecked={false} />
        </div>
      )}
    </div>
  );
};

export default MapList;
