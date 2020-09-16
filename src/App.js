import React, { useEffect, useState } from "react";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [data, setData] = useState({});

  const chooseCountry = () => {
    // data fetch
  };

  useEffect(() => {
    // data fetch
  }, []);

  return (
    <div className="App">
      <Cards data={data} />
      <SelectCountry country={selectedCountry} chooseCountry={chooseCountry} />
      <Graph data={data} country={selectedCountry} />
    </div>
  );
}

export default App;
