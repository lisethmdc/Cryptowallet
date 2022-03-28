import React, { useState, useEffect } from "react";
import Chart from "../components/Chart/Chart";
import Loading from "../components/Loading/Loading";
import { useIncome } from "../context/IncomeContext";

export default function ApiRequest() {
  const [data, setData] = useState([]);
  const { coinId, currency } = useIncome();
  let component = <Loading />;
  
  const myDate = Math.round(new Date().getTime() / 1000).toString();

  //const crypto = 'bitcoin';
  //const currency = "eur";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1562079127&to=`+ myDate
      );
      const newData = await response.json();
      setData(newData.prices);
    };
    fetchData();
  }, [coinId, currency, myDate]);

  
  if (!data.length) {
    component = <Loading />;
  } else {
    component = <Chart data={data} />;
  }

  return (
    <div>
      {component}
    </div>);
}
