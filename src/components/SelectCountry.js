import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { allCountries } from "../modules/api.js";
import classes from "../stylesheets/SelectCountry.module.scss";

const SelectCountry = (props) => {
  const [countryList, setCountryList] = useState([]);
  const [country, setCountry] = useState("Global");

  useEffect(() => {
    (async () => {
      setCountryList(await allCountries());
    })();
  }, []);

  return <div></div>;
};

export default SelectCountry;
