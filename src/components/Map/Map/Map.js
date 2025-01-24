import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import maps from "../data/layers/layers";
import "leaflet/dist/leaflet.css";
import agroclimate from "../data/agro.json";
import classes from "./Map.module.css";

function Map() {
  const center = [41.52, 44.48];

  function style(feature) {
    // You can use feature.properties to customize styles
    const zone = feature.properties.zone;
    let color;

    if (zone === "Cold") {
      color = "#2cbbce";
    } else if (zone === "mid_cold") {
      color = "#4de392";
    } else if (zone === "moderate") {
      color = "green";
    } else {
      color = "#09e80c";
    }

    return {
      fillColor: color,
      weight: 0.5,
      opacity: 0.9,
      color: "black",
      fillOpacity: 0.8,
    };
  }
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.Zone_) {
      layer.bindPopup(`
        <strong>Zone:</strong> ${feature.properties.Zone_}<br>
        <strong>Type:</strong> ${feature.properties.Agro_tipe}
      `);
    }
  };
  return (
    <div className={classes.main}>
      
      <div className={classes.shape}>
        <MapContainer
          center={center}
          zoom={9}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution={maps.maptiler.attribution}
            url={maps.maptiler.url}
            maxZoom={20}
          />

          <GeoJSON
            data={agroclimate.features}
            style={style}
            onEachFeature={onEachFeature}
          ></GeoJSON>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
