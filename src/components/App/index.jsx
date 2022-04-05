// IMPORT CSS
import "./../App/App.css";

// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import Balance from "../Balance";
import Income from "../Income";
import Expenses from "../Expense";
import History from "../History";
import Transaction from "../Transaction";
import {
  Typography,
  AppBar,
  Card,
  CardAction,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";

// 3. CREATE FUNCTIONAL COMPONENT
const App = () => {
  return (
    <div className="wrapper">
      <Typography variant="h3" className="title">
        Expense Tracker
      </Typography>
      <div className="container">
        <Balance />
        <div className="income-expenses">
          <Income />
          <Expenses />
        </div>
        <History />
        <Transaction />
      </div>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
