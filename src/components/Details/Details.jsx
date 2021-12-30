import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./DetailStyles";
import useTransactions from "../../useTransactions";
import Fade from "react-reveal/Fade";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <Fade left>
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </Fade>
    </Card>
  );
};

export default Details;
