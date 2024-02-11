import React from "react";

// mui
import { Box, Typography, styled } from "@mui/material";

// lib
import { Link } from "react-router-dom";

// styles
const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  zIndex: "100",
  top: 0,
  left: 0,
  borderBottom: "1px solid #EAECF0",
  background: theme.palette.common.white,
  backdropFilter: "blur(5px)",
  padding: theme.spacing(2, 5),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2, 2),
  },
}));

const NavWrapper = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.xl,
  margin: "auto",
  width: "100%",
}));

export default function Header() {
  return (
    <HeaderWrapper component="header">
      <NavWrapper component="nav">
        <Link to="/">
          <Box display="flex" gap={1} alignItems="center">
            <img
              src="/assets/icons/cloudbees_logo.jpg"
              alt="logo"
              width={32}
              height={32}
            />
            <Typography variant="h5" fontWeight="bold" color="common.black">
              CloudBees Assignment
            </Typography>
          </Box>
        </Link>
      </NavWrapper>
    </HeaderWrapper>
  );
}
