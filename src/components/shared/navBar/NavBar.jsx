import { AppBar, Box, Button, Grow, Toolbar, Typography } from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthStore } from "../../../hooks/useAuthStore";

export const NavBar = () => {
  const { user, startLogout } = useAuthStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {user.name}
          </Typography>
          <Button
            variant="outlined"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={startLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
