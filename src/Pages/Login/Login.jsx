import {
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  Container,
  useMediaQuery,
} from "@mui/material";
import { FormLogin } from "../../Components/FormLogin/FormLogin";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

export const Login = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Box
        height="100vh"
        display="flex"
        flexDirection={isSmallScreen ? "column" : "row"}
      >
        {!isSmallScreen && (
          <Box
            sx={{
              width: "70%",
              backgroundImage: "url('/catslogin.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "white",
              textAlign: "center",
              px: 4,
            }}
          >
            <Container>
              <Typography variant="h3" color="white" fontWeight="bold">
                Bienvenido al sitio!
              </Typography>
              <Typography variant="h5" sx={{ mt: 2 }}>
                Pet Care es una plataforma diseñada para ayudar a gestionar
                clientes y mascotas en una veterinaria, facilitando el
                seguimiento de sus registros y detalles de manera eficiente.
              </Typography>
            </Container>
          </Box>
        )}
        <FormLogin isSmallScreen={isSmallScreen}></FormLogin>
      </Box>
    </ThemeProvider>
  );
};
