import axios from "axios";

const getData = async (country) => {
  const url = country
    ? `https://covid19.mathdro.id/api/countries/${country}`
    : "https://covid19.mathdro.id/api/";

  try {
    let response = await axios.get(url);
    debugger;
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getDailyData = async () => {
  try {
    let response = await axios.get("https://covid19.mathdro.id/api/daily");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const allCountries = async () => {
  try {
    let response = await axios.get("https://covid19.mathdro.id/api/countries");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { getData, getDailyData, allCountries };
