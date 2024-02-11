import React from "react";

// mui
import { Box } from "@mui/material";

// lib
import { Outlet } from "react-router-dom";

// component
import Header from "../components/header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Box
        sx={{
          pt: 10,
          pb: 4,
          px: 4,
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Box
          position="absolute"
          top="50%"
          right={0}
          sx={{
            transform: "translateY(-50%)",
          }}
        >
          <img
            src="/assets/illustration/numericIllustration.svg"
            alt="numeric-illustration"
          />
        </Box>
        <Outlet />
      </Box>
    </>
  );
}
