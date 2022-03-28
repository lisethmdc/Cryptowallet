import React, { useReducer } from "react";
import { login } from "./login";
import { useTheme } from "../../context/ModeContext";
import { Link } from "react-router-dom";
import "./styles.scss";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function reducer(state, action) {
  switch (action.type) {
    case "inputFields": {
      return {
        ...state,
        [action.inputName]: action.payload, // [name]: value
      };
    }
    case "login": {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect username or password...",
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        username: "",
        password: "",
      };
    }
    default:
      return state;
  }
}

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export default function LoginReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { username, password, isLoading, error, isLoggedIn } = state;

  const darkTheme = useTheme();

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      //debugger
      dispatch({ type: "error" });
    }
  };

  const formStyle = {
    backgroundColor: darkTheme ? "#161a1d" : "#f8f9fa",
    color: darkTheme ? "#eee" : "black",
    border: darkTheme ? "solid 1px white" : "",
  };

  const inputStyle = {
    backgroundColor: darkTheme ? "#161a1d" : "#f8f9fa",
    border: "solid 1px gray",
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
        </>
      ) : (
        <>
        <form onSubmit={onSubmit} className="loginForm" style={formStyle}>
          <p>Please login!</p>
          {error && <p>{error}</p>}
          <div>
            <AccountCircleIcon sx={{ color: "#643047" }} />
            <input
              type="text"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "inputFields",
                  inputName: "username",
                  payload: e.target.value,
                })
              }
              placeholder="Username"
              style={inputStyle}
            />
          </div>
          <div>
            <VpnKeyIcon sx={{ color: "#643047" }} />

            <input
              type="password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "inputFields",
                  inputName: "password",
                  payload: e.target.value,
                })
              }
              placeholder="Password"
              style={inputStyle}
            />
          </div>
          <Link to='wallet'>

          <button type="submit" className="buttonLogin">
            {isLoading ? "Logging in..." : "Login"}
          </button>
          </Link>
        </form>
        </>
      )}
    </div>
  );
}
