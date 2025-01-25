import { GeoJSON } from "react-leaflet";
import agroclimateJSON from "../data/json/agro.json";
import geologyJSON from "../data/json/geology.json";
import rockfallJSON from "../data/json/rockfall.json";
import L from "leaflet";
import point from "../../../assets/map/point.svg";
import riversJSON from "../data/json/rivers.json";
import { useMaps } from "../MapContext/MapContext";
import getMaps from "../MapContext/FireMaps";
export default function JsonProvider() {
  const { state } = useMaps();
  const { rockfall, rivers, geology, agroclimate, opacity, weight } = state;

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
          ? "#feedde"
          : lyr === "Q"
          ? "#fdd0a2"
          : lyr === "yPz"
          ? "#fdae6b"
          : lyr === "J"
          ? "#fd8d3c"
          : lyr === "P"
          ? "#f16913"
          : lyr === "PR+Pz1"
          ? "#d94801"
          : lyr === "N"
          ? "#fff5eb"
          : "#8c2d04";
    } else if (feature.name === "agro") {
      const zone = feature.properties.zone;
      if (zone === "Cold") {
        color = "#ffffcc";
      } else if (zone === "mid_cold") {
        color = "#c2e699";
      } else if (zone === "moderate") {
        color = "#78c679";
      } else {
        color = "#238443";
      }
    }

    return {
      fillColor: color,
      weight: weight / 100,
      opacity: opacity / 100,
      color: "black",
      fillOpacity: opacity / 100,
    };
  }
  const onEachPolygonFeature = (feature, layer) => {
    if (feature.properties && feature.properties.Zone_) {
      layer.bindPopup(`
        <strong>Zone:</strong> ${feature.properties.Zone_}<br>
        <strong>Type:</strong> ${feature.properties.Agro_tipe}
        `);
    }
  };
  getMaps("rockfall");
  const pointToLayer = (feature) => {
    const coordinates = feature.geometry.coordinates;
    const latlng = [coordinates[1], coordinates[0]];
    return L.marker(latlng, { icon: customIcon });
  };

  const onEachPointFeature = (feature, layer) => {
    if (feature.properties) {
      layer.bindPopup(`<b>კლდეზვავი</b>`);
    }
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
