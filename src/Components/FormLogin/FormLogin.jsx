import { Box, Button, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// eslint-disable-next-line react/prop-types
export const FormLogin = ({isSmallScreen}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

      const handleLogin = () => {
        if (username === "admin" && password === "admin") {
          navigate("/inicio");
        } else {
          setError("Usuario o contraseña incorrectos");
        }
      };
      const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
      };
    
    return ( 
        <Box
          width={isSmallScreen ? "100%" : "40%"}
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ bgcolor: "#F0F0F0" }}
        >
          <Paper elevation={3} sx={{ p: 4, width: "80%", borderRadius: 2}}>
            <Box
              fullWidth
              sx={{
                bgcolor: "#9C27B0",
                p: 2,
                position: "relative",
                top: -50,
                borderRadius: 1,
              }}
            >
              <Typography variant="h6" align="center" sx={{ color: "white" }}>
                INICIO DE SESIÓN
              </Typography>
            </Box>

            <TextField
              label="Usuario"
              fullWidth
              margin="dense"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
              variant="outlined"
            />

            <TextField
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="dense"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              variant="outlined"
            ></TextField>

            {error && <Typography color="error">{error}</Typography>}

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              sx={{ bgcolor: "#9C27B0", mt: 2, p: 2 }}
            >
              INGRESAR
            </Button>
          </Paper>
        </Box>
     );
}