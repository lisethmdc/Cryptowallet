import React from "react";
import { useTheme } from "../../context/ModeContext";
//import { useIncome } from '../../context/IncomeContext';

import "./styles.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ data }) {
  const newArrDates = [];
  const newArrPrices = [];

  const chartPoints = 25;
  let length = data.length; //console.log(apiArr)
  let interval = length / chartPoints; //console.log(newSize)

  for (let i = 0; i < chartPoints; i++) {
    newArrDates[i] = data[Math.round(i * interval)][0];
    newArrPrices[i] = data[Math.round(i * interval)][1];
  }
  console.log(newArrDates);
  console.log(newArrPrices);

 // const total = (newArrPrices[newArrPrices.length-1] / newArrPrices[0]) * amount;
  
  const finalDates = newArrDates.map((item) =>
    new Date(item).toLocaleDateString("en-US")
  );
  console.log(finalDates);

  const darkTheme = useTheme();

  const chartStyle = {
    backgroundColor: darkTheme ? '#161a1d' : '#f8f9fa',
    color: darkTheme ? '#eee' : 'black',
    border: darkTheme ? 'solid 1px white' : ''
  }

  const state = {
    labels: finalDates,
    datasets: [
      {
        label: "Price",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#023C40",
        borderColor: "#023C40",
        borderWidth: 1.5,
        data: newArrPrices,
      },
    ],
  };
  return (
    <>    <div className="card" style={chartStyle}>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Amount gained in historic",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
          
        }}
      />
    </div>

    </>

  );
}
