import React, { useEffect, useState } from "react";
import getData from "./modules/api";
import classes from "./stylesheets/App.module.scss";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [data, setData] = useState({});

  const chooseCountry = async (country) => {
    setSelectedCountry(country);
    fetchedData = await getData(country);
    setData(fetchedData);
  };

  useEffect(async () => {
    fetchedData = await getData();
    setData(fetchedData);
  }, []);

  return (
    <div className={classes.container}>
      <Cards data={data} />
      <SelectCountry country={selectedCountry} chooseCountry={chooseCountry} />
      <Graph data={data} country={selectedCountry} />
    </div>
  );
}

export default App;
