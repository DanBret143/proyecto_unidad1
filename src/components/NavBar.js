import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ color: 'white', mr: 2 }}>
            Alumno: Bretado Soriano Daniel
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Link to="/seccion1" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', backgroundColor: '#1C2833', '&:hover': { backgroundColor: '#2E4053', borderColor: 'white' }, mr: 1 }}>
              Sección 1
            </Button>
          </Link>
          <Link to="/seccion2" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', backgroundColor: '#1C2833', '&:hover': { backgroundColor: '#2E4053', borderColor: 'white' }, mr: 1 }}>
              Sección 2
            </Button>
          </Link>
          <Link to="/seccion3" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', backgroundColor: '#1C2833', '&:hover': { backgroundColor: '#2E4053', borderColor: 'white' }, mr: 1 }}>
              Sección 3
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ color: 'white', backgroundColor: '#007bff', '&:hover': { backgroundColor: '#0069d9' }, mr: 1 }}>
              Inicio
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}