/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const Contacto = ({ cliente }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Typography variant="h2" sx={{ fontWeight: 500 }}>
            Contacto
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
              mt: 2,
            }}
          >
            <Avatar sx={{ bgcolor: "#DED8FA" }}>
              <PhoneIcon />
            </Avatar>
            <Typography variant="h6">{cliente.telefono}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar sx={{ bgcolor: "#DED8FA" }}>
              <EmailIcon />
            </Avatar>
            <Typography variant="h6">{cliente.email}</Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h2" sx={{ fontWeight: 500 }}>
            Acciones
          </Typography>
          <Button>Editar</Button>
          <Button>Borrar</Button>
        </Grid>
      </Grid>
    </Container>
  );
};
