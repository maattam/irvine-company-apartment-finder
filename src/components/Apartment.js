import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  CircularProgress,
  Typography,
} from "@material-ui/core";

import { findUnits } from "../domain/findUnits";

import { Unit } from "./Unit";

export const Apartment = ({ classes, name, communityId }) => {
  const [units, setUnits] = useState(null);

  useEffect(() => {
    findUnits({ communityId }).then(units => {
      setUnits(units.filter(filterUnit));
    });
  }, []);

  if (!units) {
    return (
      <Paper style={styles.root}>
        <div style={styles.loaderWrapper}>
          <CircularProgress />
        </div>
      </Paper>
    );
  }

  return (
    <Paper style={styles.root}>
      <Typography style={styles.title} variant="h6" id="tableTitle">
        {name}
      </Typography>

      <div style={styles.tableWrapper}>
        <Table>
          <Head />
          <TableBody>
            {units.map(unit => (
              <Unit key={unit.id} {...unit} />
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

const Head = () => (
  <TableHead>
    <TableRow>
      <TableCell>PLAN</TableCell>
      <TableCell>BLDG NO./APT NO.</TableCell>
      <TableCell>FLOOR</TableCell>
      <TableCell>PRICE</TableCell>
      <TableCell>SQFT</TableCell>
      <TableCell>AVAILABLE</TableCell>
      <TableCell>AMENITIES</TableCell>
    </TableRow>
  </TableHead>
);

const filterUnit = unit =>
  unit.bedrooms === 1 && unit.occupancyStatusCode === "VA";

const styles = {
  root: {
    width: "100%",
    marginTop: 30
  },
  tableWrapper: {
    overflowX: "auto"
  },
  loaderWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  title: {
    paddingLeft: 24,
    paddingTop: 24
  }
};
