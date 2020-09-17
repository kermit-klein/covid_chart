import axios from "axios";

const getData = async (country) => {
  try {
    let response = await axios.get(
      `https://covid19.mathro.id/api/countries/${country}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
