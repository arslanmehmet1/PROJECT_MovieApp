import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LiveTvIcon
            color="inherit"
            sx={{ mr: 2, fontSize: "35px" }}
          ></LiveTvIcon>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Arslan Cinema
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            href="/"
            sx={{ marginRight: "1rem" }}
          >
            Main
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            href="/login"
            sx={{ marginRight: "1rem" }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            href="/register"
            sx={{ marginRight: "2rem" }}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
