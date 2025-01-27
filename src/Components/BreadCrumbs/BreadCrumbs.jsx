/* eslint-disable react/prop-types */
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import './style.css'
import { Link } from "react-router-dom";

export const BreadCrumbs = ({page}) => {
    return ( 
    <>
    <div className="catimage"> 
        <Container sx={{height:400, mt:12, mb:10}}>
            <Box sx={{pt:30}}>
        <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/inicio">
    Inicio
  </Link>
  <Typography sx={{ color: 'text.primary'}}>{page}</Typography>
</Breadcrumbs>
        <Typography variant="h2" sx={{ fontWeight:400 }}>{page}</Typography>
        </Box>
        </Container>
    </div>
    
    </>
    );
}