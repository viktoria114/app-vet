/* eslint-disable react/prop-types */
import { Avatar, Box, Button, List, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const CardInicio = ({title, icon, list, onClick}) => {
 
    return ( 
        <Box
        sx={{
          position: "relative",
          top: -130,
          width: 300,
          height: 200,
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          color: "black",
          textAlign: "center",
          transition: "0.3s",
          "&:hover": {
            bgcolor: "#D7C3F6", // Fondo cambia al hacer hover
          },
          "&:hover .text": {
            color: "white", // Cambia el color del texto
          },
          "&:hover .avatar": {
            bgcolor: "white", // Cambia el fondo del avatar al hacer hover
          },
          "&:hover .button": {
            bgcolor: "white", // Botón cambia a morado
            color: "#9C27B0",
          },
        }}
      >
        <Avatar
          className="avatar"
          sx={{
            bgcolor: "#F0F0F0",
            p: 2,
            position: "absolute",
            top: -30,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {icon}
        </Avatar>

        <Typography
          className="text"
          variant="h5"
          sx={{ fontWeight: 600, mt: 4 }}
        >
          Gestión de {title}
        </Typography>

        <List className="text" sx={{ mt: 2 }}>
          <Typography>Listado general</Typography>
          <Typography>{list[0]}</Typography>
          <Typography>{list[1]}</Typography>
          <Typography>Creación y eliminación</Typography>
        </List>

        <Button
          variant="contained"
          className="button"
          sx={{
            bgcolor: "#9C27B0",
            color: "white",
            mt: 2,
          }}
          onClick={onClick}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
     );
}