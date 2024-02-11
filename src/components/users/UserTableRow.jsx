import React from "react";

// mui
import { TableCell, TableRow, styled } from "@mui/material";

// lib
import { useNavigate } from "react-router-dom";

// hooks
import useFetch from "../../hooks/useFetch";

const StyledImg = styled("img")(() => ({
  borderRadius: "50%",
}));

export default function UserTableRow({ currentUserData, currentPage }) {
  const { loading, error, data } = useFetch({
    url: `https://api.github.com/users/${currentUserData.login}`,
    method: "get",
    key: [
      "app",
      "get",
      "user",
      {
        name: `${currentUserData.login}`,
      },
    ],
    cache: {
      enabled: true,
      suspense: 200,
    },
  });

  const navigate = useNavigate();

  const name = data?.name?.split(" ");
  const nameLength = data?.name?.split(" ").length;

  const handleClick = () => {
    navigate(`${currentUserData.login}`, {
      state: {
        currentPage,
        githubUserName: currentUserData.login
      },
    });
  };

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover": {
          bgcolor: "#F5F5F5",
        },
        transition: "all ease 0.2s",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <TableCell component="th" scope="row">
        <StyledImg src={data?.avatar_url} alt="avatar" width={32} height={32} />
      </TableCell>
      <TableCell align="left">{data?.login}</TableCell>
      <TableCell align="left">
        {nameLength > 0
          ? name.splice(0, name.length - 1).map((str) => `${str} `)
          : "-"}
      </TableCell>
      <TableCell align="left">
        {nameLength > 1 ? name[name?.length - 1] : "-"}
      </TableCell>
      <TableCell align="left">{data?.following}</TableCell>
      <TableCell align="left">{data?.followers}</TableCell>
      <TableCell align="left">{data?.public_repos}</TableCell>
    </TableRow>
  );
}
