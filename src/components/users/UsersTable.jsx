import React, { useEffect, useState } from "react";

// mui
import {
  Box,
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

// icons
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import UserTableRow from "./UserTableRow";
import useFetch from "../../hooks/useFetch";

const StyledTableHead = styled(TableHead)(() => ({
  "& .MuiTableCell-root": {
    textWrap: "nowrap",
    fontWeight: "600",
  },
}));

export default function UsersTable() {
  const [fetchParams, setFetchParams] = useState({
    url: `https://api.github.com/users?since=${10}&per_page=30`,
    method: "get",
    key: [
      "app",
      "get",
      "user",
      {
        name: `1`,
      },
    ],
    cache: {
      enabled: true,
      suspense: 0,
    },
  });

  const { loading, error, data } = useFetch(fetchParams);

  return (
    <TableContainer
      component={Paper}
      sx={{
        bgcolor: "common.white",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <StyledTableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="left">Username</TableCell>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Following</TableCell>
            <TableCell align="left">Followers</TableCell>
            <TableCell align="left">Public Repos</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {data?.map((row) => (
            <UserTableRow
              key={row.login}
              currentUserData={row}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
