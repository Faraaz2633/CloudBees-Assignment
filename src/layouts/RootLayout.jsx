import React from "react";

// mui
import { Box } from "@mui/material";

// lib
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Box>header</Box>
      <Box
        sx={{
          pt: {
            xs: 1,
            md: 4,
          },
          pb: 4,
          px: 4,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
