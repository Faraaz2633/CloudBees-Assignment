import React from "react";

// mui
import { Box, Container, Typography } from "@mui/material";

// icons
import GitHubIcon from '@mui/icons-material/GitHub';

// components
import UsersTable from "./UsersTable";

export default function Users() {
  return (
    <Container maxWidth="xl" sx={{
        zIndex: 10,
        position: 'relative'
    }}>
      <Box display='flex' gap={1} width={1} alignItems='center'>
        <GitHubIcon fontSize='large' />
        <Typography variant="h5" fontWeight="600">
          Users List
        </Typography>
      </Box>
      <Box bgcolor="#EAECF0" height="1px" width={1} my={3} />
      <UsersTable />
    </Container>
  );
}
