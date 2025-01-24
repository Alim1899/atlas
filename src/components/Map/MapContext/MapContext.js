import { createContext, useContext, useMemo, useReducer } from "react";
const MapContext = createContext();
const initialState = {
  agroclimate: false,
  geology: false,
  rivers: false,
  rockfall: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "agroclimate":
      return { ...state, agroclimate: action.payload };
    case "geology":
      return { ...state, geology: action.payload };
    case "rivers":
      return { ...state, rivers: action.payload };
    case "rockfall":
      return { ...state, rockfall: action.payload };
    default:
      throw new Error("Unknown action type");
  }
};

const MapsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const mapsValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <MapContext.Provider value={mapsValue}>{children}</MapContext.Provider>
  );
};

const useMaps = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error("Maps provider used outside of a its wrapping element");
  }
  return context;
};

export { MapsProvider, useMaps };
