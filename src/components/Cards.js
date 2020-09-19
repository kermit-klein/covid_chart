import React from "react";
import {
  CircularProgress,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import CountUp from "react-countup";
import classes from "../stylesheets/Cards.module.scss";
import clx from "classnames";

const Cards = (props) => {
  if (!props.data.confirmed) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Grid container spacing={3} justify="center">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={data.confirmed}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(data.lastDate).toDateString()}
          </Typography>
          <Typography variant="body2">Number of Active Cases</Typography>
        </CardContent>
      </Grid>
    </div>
  );
};

export default Cards;
