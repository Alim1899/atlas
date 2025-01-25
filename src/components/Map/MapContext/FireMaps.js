import { getDatabase, get, ref } from "firebase/database";
import app from "../../firebaseConfig";
const getMaps = async (id) => {
  const db = getDatabase(app);
  try {
    const projectsRef = ref(db, `geojson/${id}`);
    const snapshot = await get(projectsRef);
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No json data available for ");
    }
  } catch (error) {
    console.error("Error fetching json", error);
  }
};
export default getMaps;
