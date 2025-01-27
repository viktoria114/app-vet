/* eslint-disable react/prop-types */

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardMedia } from '@mui/material';

export const FichaMascota = ({mascota}) => {

return ( 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="200"
          src={mascota.myFile}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "'Montserrat', sans-serif", fontWeight: 700}}>
            {mascota.nombre}
          </Typography>
          <Typography variant="body2" sx={{ color: '#9c27b0', fontFamily: "'Montserrat', sans-serif",fontWeight: 500 }}>
            Especie: {mascota.especie} 
          </Typography>
          <Typography variant="body2" sx={{ color: '#9c27b0', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            Raza: {mascota.raza} 
          </Typography>
          <Typography variant="body2" sx={{ color: '#9c27b0', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            Edad: {mascota.edad} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );


}