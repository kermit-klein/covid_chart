import axios from "axios";

const getData = async (country) => {
  const url = country
    ? `https://covid19.mathro.id/api/countries/${country}`
    : "https://covid19.mathro.id/api/";

  try {
    let response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getDailyData = async () => {
  try {
    let response = await axios.get("https://covid19.mathro.id/api/daily");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const allCountries = () => {
    try {
        let response = await axios.get("https://covid19.mathro.id/api/countries")
        return response.data
    } catch (error) {
        console.log(err)
    }
}

export { getData, getDailyData, allCountries };
