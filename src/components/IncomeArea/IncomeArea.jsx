import React from "react";
//import { useFormik } from 'formik';
import { useTheme } from "../../context/ModeContext";
import { useIncome, useUpdateIncome } from "../../context/IncomeContext";
import "./styles.scss";
import ApiRequest from "../../hooks/ApiRequest";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Loading from "../Loading/Loading";

export default function IncomeArea() {
  const { coinId, currency, from, amount, isFilled } = useIncome();
  const setDataForm = useUpdateIncome();
  const darkTheme = useTheme();

  let componente = <Loading />
  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataForm((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDataForm({
      coinId: "",
      currency: "",
      from: "",
      amount: "",
      isFilled: true
    });
  };

  if (!isFilled) {
    componente = <p></p>
  } else {
    componente = <ApiRequest />
  }

  const formStyle = {
    backgroundColor: darkTheme ? "#161a1d" : "#f8f9fa",
    color: darkTheme ? "#eee" : "black",
    border: darkTheme ? "solid 1px white" : "",
  };

  const inputStyle = {
    backgroundColor: darkTheme ? "#161a1d" : "#f8f9fa",
    color: darkTheme ? "#eee" : "black",
    border: "solid 1px gray",
  };

  return (
    <>
      <div className="formContainer">
        <form className="incomeForm" style={formStyle}>
          <label htmlFor="coinId">Coin</label>
          <input
            type="text"
            name="coinId"
            value={coinId}
            onChange={handleChange}
            placeholder="bitcoin, ethereum..."
            style={inputStyle}
          />
          <label htmlFor="currency">Currency</label>
          <input
            type="text"
            name="currency"
            value={currency}
            onChange={handleChange}
            placeholder="eur, usd, jpy, etc..."
            style={inputStyle}
          />
          <label htmlFor="from">From</label>
          <input
            type="text"
            name="from"
            value={from}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
            style={inputStyle}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={handleChange}
            placeholder="10, 100, 1000..."
            style={inputStyle}
          />
          <Fab size="small" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </form>
      </div>
      {componente}
      </>
  );
}
