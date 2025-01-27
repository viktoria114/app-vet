import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PetsIcon from "@mui/icons-material/Pets";
import {Tab, Tabs } from "@mui/material";
import { Outlet } from "react-router-dom";

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};

export const NavBar = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <>
    <AppBar position="fixed" color="white" sx={{ 
         bgcolor:"white"
      }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PetsIcon
            color="secondary"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
          className="Titulo"
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PET-CARE
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "100px" }}>
          <Tabs
         
		  sx={{
        height: "100px",
       
      }}
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            role="navigation"
            textColor="secondary"
            indicatorColor="secondary"
           
          >
            <Tab label="Inicio" href="/inicio" sx={{ height: "100px" , fontFamily: "'Montserrat', sans-serif",  fontWeight: 700, color: "black" }} />
            <Tab label="Clientes" href="/clientes" sx={{ height: "100px" , fontFamily: "'Montserrat', sans-serif",fontWeight: 700, color: "black"}}/>
            <Tab label="Mascotas" href="/mascotas" sx={{ height: "100px" , fontFamily: "'Montserrat', sans-serif",fontWeight: 700, color: "black"}}/>
          </Tabs>
        </Box>
      </Container>
      
    </AppBar>
    <Outlet/>
    </>
  );
};
