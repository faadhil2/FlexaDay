import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import SettingsIcon from "@mui/icons-material/Settings";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

export default function PermanentDrawerLeft(props) {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }} className="header">
      <CssBaseline />
      <Drawer
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
          width: drawerWidth,
          flexShrink: 0,
          backgroundColor: "#832121",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        className="drawer-root"
      >
        <img className="logo" src="images/logo6.png" alt="logo" />
        <Toolbar />

        <Divider />
        <List>
          {["Login", "Challenges", "Statistics"].map((text, index) => (
            <ListItem button key={text} className="side-link">
              <ListItemIcon>
                {(index <= 1 && (
                  <FontAwesomeIcon
                    className="side-link"
                    icon={
                      index === 0 ? faSignInAlt : index === 1 ? faDumbbell : 0
                    }
                  ></FontAwesomeIcon>
                )) || <EqualizerIcon className="side-link" />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Settings", "Theme"].map((text, index) => (
            <ListItem button key={text} className="side-link">
              <ListItemIcon>
                {index === 0 ? (
                  <SettingsIcon className="side-link" />
                ) : index === 1 ? (
                  <ColorLensIcon className="side-link" />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <div>{props.children}</div>
      </Box>
    </Box>
  );
}
