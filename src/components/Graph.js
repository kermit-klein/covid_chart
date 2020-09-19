import React, { useEffect, useState } from "react";
import { getDailyData } from "../modules/api";
import { Line, Bar } from "react-chartjs-2";
import classes from "./Graph.module.css";

const Graph = (props) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    (async () => {
      setDailyData(await getDailyData());
    })();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div></div>;
};

export default Graph;
