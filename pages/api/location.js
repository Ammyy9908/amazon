import axios from "axios";
export default async function handler(req, res) {
  const { lat, long } = req.query;
  console.log(lat, long);
  try {
    const result = await axios.get(
      `https://api.dominos.co.in/locator-service/ve2/geocode?latitude=${lat}&longitude=${long}`
    );
    console.log(result.data);
    res.status(200).json({ location: result.data });
  } catch (e) {
    res.status(200).json({ location: null });
  }
}
