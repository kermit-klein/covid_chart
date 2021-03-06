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

  useEffect(() => {
    (async () => {
      setCountryList(await allCountries());
    })();
  }, []);

  const pickCountry = (e) => {
    props.chooseCountry(e.target.value === "Global" ? "" : e.target.value);
  };
  if (!countryList.length) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <FormControl variant="outlined" className={classes.formcontrol}>
      <InputLabel className={classes.label} id="country">
        Select Country
      </InputLabel>
      <Select
        labelId="country-picker"
        id="country-pick"
        label="Select Country"
        value={props.country}
        onChange={pickCountry}
      >
        <MenuItem value="Global">Global</MenuItem>
        {countryList.map((name, index) => (
          <MenuItem key={index} value={name.name}>
            {name.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCountry;
