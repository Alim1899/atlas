import classes from './MapList.module.css'
const MapList = () => {
  return (
    <div className={classes.mapHeaders}>
    <h2 className={classes.header}>რუკის სახეობები</h2>
    <label htmlFor="checkbox1">მადნეული</label>
    <input id="checkbox1" type="checkbox"></input>
    <label htmlFor="checkbox2">გეოლოგია</label>
    <input id="checkbox2" type="checkbox"></input>
    <label htmlFor="checkbox3">ქვათაცვენა</label>
    <input id="checkbox3" type="checkbox"></input>
  </div>
  )
}

export default MapList
