import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (!historicalData || !historicalData.prices) return;

    let dataCopy = [["Date", "Prices"]];
    historicalData.prices.forEach((item) => {
      dataCopy.push([
        new Date(item[0]).toLocaleDateString().slice(0, -5), // Format date
        item[1], // Price
      ]);
    });
    setData(dataCopy);
  }, [historicalData]);

  const options = {
    // curveType: "function",
    // legend: {
    //   position: "right",
    //   textStyle: {
    //     color: "#ffffff", // White legend text
    //   },
    // },
    hAxis: {
      // title: "Date",
      titleTextStyle: {
        color: "#ffffff", // White axis title text
      },
      textStyle: {
        color: "#ffffff", // White axis text
      },
      gridlines: {
        color: "#424242", // Dark gray gridlines
      },
      baselineColor: "#ffffff", // White baseline
    },
    vAxis: {
      // title: "Price",
      titleTextStyle: {
        color: "#ffffff", // White axis title text
      },
      textStyle: {
        color: "#ffffff", // White axis text
      },
      gridlines: {
        color: "#424242", // Dark gray gridlines
      },
      baselineColor: "#ffffff", // White baseline
    },
    backgroundColor: "#010101", // Dark background
    
    colors: ["#3b82f6"], // Blue line color
    width: "100%",
    height: "250px",
  };

  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
    //   width="100%"
    //   height="400px"
      legendToggle
    />
  );
};

export default LineChart;