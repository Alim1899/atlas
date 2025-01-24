import { GeoJSON } from "react-leaflet";
import agroclimateJSON from "../data/json/agro.json";
import geologyJSON from "../data/json/geology.json";
import rockfallJSON from "../data/json/rockfall.json";
import L from "leaflet";
import point from "../../../assets/map/point.svg";
import riversJSON from "../data/json/rivers.json";
import { useMaps } from "../MapContext/MapContext";

export default function JsonProvider() {
  const { state } = useMaps();
  const { rockfall, rivers, geology, agroclimate } = state;

  const customIcon = L.icon({
    iconUrl: point, // Example icon URL
    iconSize: [25, 21],
    iconAnchor: [12, 21],
    popupAnchor: [1, -34],
  });
  function polygonStyle(feature) {
    let color;
    if (feature.name === "geology") {
      let lyr = feature.properties.Index_;
      color =
        lyr === "K"
          ? "red"
          : lyr === "Q"
          ? "brown"
          : lyr === "yPz"
          ? "goldenRod"
          : lyr === "J"
          ? "#abccba"
          : lyr === "P"
          ? "#123abc"
          : lyr === "PR+Pz1"
          ? "#321cba"
          : lyr === "N"
          ? "yellow"
          : "cyan";
    } else if (feature.name === "agro") {
      const zone = feature.properties.zone;
      if (zone === "Cold") {
        color = "#2cbbce";
      } else if (zone === "mid_cold") {
        color = "#4de392";
      } else if (zone === "moderate") {
        color = "green";
      } else {
        color = "#09e80c";
      }
    }

    return {
      fillColor: color,
      weight: 0.5,
      opacity: 0.9,
      color: "black",
      fillOpacity: 0.8,
    };
  }
  const onEachPointFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(`<b>${feature.properties.name}</b>`);
    }
  };
  const onEachPolygonFeature = (feature, layer) => {
    if (feature.properties && feature.properties.Zone_) {
      layer.bindPopup(`
              <strong>Zone:</strong> ${feature.properties.Zone_}<br>
              <strong>Type:</strong> ${feature.properties.Agro_tipe}
            `);
    }
  };
  const pointToLayer = (feature, latlng) => {
    return L.marker(latlng, { icon: customIcon });
  };

  return (
    <>
      {rockfall && (
        <GeoJSON
          data={rockfallJSON.features}
          onEachFeature={onEachPointFeature}
          pointToLayer={pointToLayer}
        ></GeoJSON>
      )}
      {agroclimate && (
        <GeoJSON
          data={agroclimateJSON.features}
          style={polygonStyle}
          onEachFeature={onEachPolygonFeature}
        ></GeoJSON>
      )}
      {geology && (
        <GeoJSON
          data={geologyJSON.features}
          style={polygonStyle}
          onEachFeature={onEachPolygonFeature}
        ></GeoJSON>
      )}
      {rivers && <GeoJSON data={riversJSON.features}></GeoJSON>}
    </>
  );
}
