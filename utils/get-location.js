import jsCookies from "js-cookies";
import { useDispatch } from "react-redux";

const { default: axios } = require("axios");

async function fetchLocation(lat, long) {
  try {
    const r = await axios.get(
      `https://amazon-ten-mauve.vercel.app//api/location?lat=${lat}&long=${long}`
    );
    return r.data;
  } catch (e) {
    console.log(e);
    return false;
  }
}
async function getCoords() {
  // first check is permission is on/off if not
  if ("geolocation" in navigator) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state == "granted") {
          // permission is granted
          console.log("Location permission is granted.");
        } else if (result.state == "prompt") {
          // permission is pending
          console.log("Location permission is pending.");
        } else if (result.state == "denied") {
          // permission is denied
          console.log("Location permission is denied.");
        } else if (result.state == "prompt") {
          // permission is pending
          console.log("Location permission is pending.");
        }
      });
  } else {
    alert(`Location is not supported by Browser`);
    return;
  }

  try {
    navigator.geolocation.getCurrentPosition(async (success) => {
      const { coords } = success;
      const { latitude, longitude } = coords;

      const loc = await fetchLocation(latitude, longitude);
      console.log(loc);
      const { results } = loc.location;
      const { footerAddress } = results[0];
      console.log(footerAddress);
      //   localStorage.setItem(
      //     "location",
      //     JSON.stringify({
      //       coords: [latitude, longitude],
      //       address: footerAddress,
      //     })
      //   );

      jsCookies.setItem("address", footerAddress);
      window.location.reload();
    });
  } catch (e) {
    console.log(e);
  }
}

export default getCoords;
