/* eslint-disable react/prop-types */
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";

export const BreadCrumbs = ({ firstpage, secondpage }) => {
  if (secondpage == null) {
    return (
      <>
        <div className="catimage">
          <Container sx={{ height: 400, mb: 10 }}>
            <Box sx={{ pt: 30 }}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" to={{pathname: "/inicio"}}>
                  Inicio
                </Link>
                <Typography sx={{ color: "text.primary" }}>
                  {firstpage}
                </Typography>
              </Breadcrumbs>
              <Typography variant="h2" sx={{ fontWeight: 600 }}>
                {firstpage}
              </Typography>
            </Box>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="catimage">
        <Container sx={{ height: 400, mb: 10 }}>
          <Box sx={{ pt: 30 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" to={{pathname: "/inicio"}}>
                Inicio
              </Link>
              <Link underline="hover" color="inherit" to={{pathname: "/clientes"}}>
                {firstpage}
              </Link>
              <Typography sx={{ color: "text.primary" }}>
                {secondpage}
              </Typography>
            </Breadcrumbs>
            <Typography variant="h2" sx={{ fontWeight: 600 }}>
              {secondpage}
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  );
};
