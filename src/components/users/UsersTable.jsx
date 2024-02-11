import React, { useEffect, useState } from "react";

// mui
import {
  Box,
  Button,
  CircularProgress,
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

// hooks
import { useLocation } from "react-router";
import useFetch from "../../hooks/useFetch";

// components
import UserTableRow from "./UserTableRow";

const StyledTableHead = styled(TableHead)(() => ({
  "& .MuiTableCell-root": {
    textWrap: "nowrap",
    fontWeight: "600",
  },
}));

export default function UsersTable() {
  const location = useLocation();
  const locationState = location.state;
  const [currentPage, setCurrentPage] = useState(
    locationState?.currentPage || 1
  );
  const [fetchParams, setFetchParams] = useState({
    url: `https://api.github.com/users?since=${currentPage * 10}&per_page=10`,
    method: "get",
    key: [
      "app",
      "get",
      "user",
      {
        name: `${currentPage}`,
      },
    ],
    cache: {
      enabled: true,
      suspense: 400,
    },
  });
  const { loading, error, data } = useFetch(fetchParams);

  useEffect(() => {
    setFetchParams((prevParams) => ({
      ...prevParams,
      url: `https://api.github.com/users?since=${currentPage * 50}&per_page=10`,
      key: [...prevParams.key.slice(0, -1), { name: `${currentPage}` }],
    }));
  }, [currentPage]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        bgcolor: "common.white",
        minHeight: 800,
        position: "relative",
      }}
    >
      {loading && (
        <Box
          height={1}
          width={1}
          bgcolor="common.white"
          position="absolute"
          top={0}
          left={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      )}
      <Table sx={{ minWidth: 650, minHeight: 800 }} aria-label="simple table">
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
              currentPage={currentPage}
            />
          ))}
        </TableBody>
      </Table>
      <Box
        display="flex"
        gap={1}
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Button
          variant="contained"
          startIcon={<ArrowBackRoundedIcon />}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </Box>
    </TableContainer>
  );
}
