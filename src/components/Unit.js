import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

export const Unit = ({ id, name, rent, marketRent, sqFt, amenities, availableAt, floor }) => (
  <TableRow>
    <TableCell>{name}</TableCell>
    <TableCell>{id}</TableCell>
    <TableCell align="right">{floor}</TableCell>
    <TableCell align="right">{rent} ({marketRent})</TableCell>
    <TableCell align="right">{sqFt}</TableCell>
    <TableCell>{availableAt}</TableCell>
    <TableCell>{amenities.join(", ")}</TableCell>
  </TableRow>
);
