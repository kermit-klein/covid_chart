import React, { useEffect, useState } from "react";
import { getData } from "./modules/api";
import classes from "./stylesheets/App.module.scss";
import Graph from "./components/Graph";
import SelectCountry from "./components/SelectCountry";
import Cards from "./components/Cards";
import covid from "./images/covid1.jpg";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [data, setData] = useState({});

  const chooseCountry = async (country) => {
    setSelectedCountry(country);
    let fetchedData = await getData(country);
    setData(fetchedData);
  };

  useEffect(async () => {
    let fetchedData = await getData();
    setData(fetchedData);
  }, []);

  return (
    <div className={classes.container}>
      <img className={classes.image} src={covid} alt="Covid" />
      <Cards data={data} />
      <SelectCountry country={selectedCountry} chooseCountry={chooseCountry} />
      <Graph data={data} country={selectedCountry} />
    </div>
  );
}

export default App;
