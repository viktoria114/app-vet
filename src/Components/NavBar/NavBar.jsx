import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PetsIcon from "@mui/icons-material/Pets";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  ThemeProvider,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../../services/theme";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavBar } from "../../hooks/useNavBar";

const styleTab = {
  height: "100px",
  fontWeight: 700,
  color: "black",
  display: { xs: "none", sm: "flex" },
};

export const NavBar = () => {
  const {
    toggleDrawer,
    menuItems,
    currentTab,
    handleChange,
    handleSesión,
    navigate,
    open
  } = useNavBar();
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="sticky"
          color="white"
          sx={{ bgcolor: "white", zIndex: 1100 }}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PetsIcon color="secondary" sx={{ mr: 1 }} />
              <Typography
                className="Titulo"
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
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
                sx={{ height: "100px" }}
                value={currentTab}
                onChange={handleChange}
                role="navigation"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="Inicio" value="one" sx={styleTab} />
                <Tab label="Clientes" value="two" sx={styleTab} />
                <Tab label="Mascotas" value="three" sx={styleTab} />
                <Button
                  color="inherit"
                  sx={{
                    marginLeft: "auto",
                    display: { xs: "none", sm: "flex" },
                  }}
                  onClick={handleSesión}
                >
                  Cerrar Sesión
                </Button>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{
                    marginLeft: "auto",
                    display: { xs: "flex", sm: "none" },
                    height: "100px",
                  }}
                  onClick={toggleDrawer()}
                >
                  <MenuIcon />
                </IconButton>
              </Tabs>

              <Drawer
                open={open}
                onClose={toggleDrawer()}
                anchor="top"
                sx={{ zIndex: 1000 }} // Menor zIndex que la Navbar
              >
                <Box
                  sx={{ width: "auto", mt: 13 }}
                  role="presentation"
                  onClick={toggleDrawer()}
                >
                  <List>
                    {menuItems.map(({ text, path }) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => navigate(path)}>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Container>
        </AppBar>
        <Outlet />
      </ThemeProvider>
    </>
  );
};
