/* eslint-disable react/prop-types */

        import Card from '@mui/material/Card';
        import CardContent from '@mui/material/CardContent';
        import Typography from '@mui/material/Typography';
        import CardActionArea from '@mui/material/CardActionArea';

export const FichaCliente = ({cliente}) => {

    return ( 
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "'Montserrat', sans-serif", fontWeight: 700}}>
                    {cliente.nombre}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#9c27b0', fontFamily: "'Montserrat', sans-serif",fontWeight: 500 }}>
                    Teléfono: {cliente.telefono} 
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#9c27b0', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                    Correo: {cliente.email} 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        
     
}