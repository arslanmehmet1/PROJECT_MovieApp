import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Margin } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="mb-5">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <LiveTvIcon
              color="inherit"
              onClick={() => navigate("/")}
              sx={{ mr: 2, fontSize: "35px", cursor: "pointer" }}
            ></LiveTvIcon>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Arslan Cinema
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate("/")}
              sx={{ marginRight: "1rem" }}
            >
              Main
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate("/login")}
              sx={{ marginRight: "1rem" }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate("/register")}
              sx={{ marginRight: "2rem" }}
            >
              Register
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
