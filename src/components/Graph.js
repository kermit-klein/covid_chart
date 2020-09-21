import React, { useEffect, useState } from "react";
import { getDailyData } from "../modules/api";
import { Line, Bar } from "react-chartjs-2";
import classes from "../stylesheets/Graph.module.scss";

const Graph = (props) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await getDailyData();
      setDailyData(response);
    })();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map((element) => element.reportDate),
        datasets: [
          {
            data: dailyData.map((element) => element.confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((element) => element.deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = props.data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [
              props.data.confirmed.value,
              props.data.recovered.value,
              props.data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${props.country}` },
      }}
    />
  ) : null;

  return (
    <div className={classes.container}>
      {props.country ? barChart : lineChart}
    </div>
  );
};

export default Graph;
