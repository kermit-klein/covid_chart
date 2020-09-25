import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { allCountries } from "../modules/api.js";

const TypeCountry = (props) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await allCountries();
      if (active) {
        setOptions(response.map((element) => element.name));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  return <div></div>;
};

export default TypeCountry;
