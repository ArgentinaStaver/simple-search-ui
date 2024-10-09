import { Outlet } from 'react-router-dom';
import { Box, Grid2 } from '@mui/material';
import Header from '../components/Header';

const sx = {
  minHeight: '100vh',
  minWidth: '100vw',
  backgroundColor: '#f7f7f7',
};

const MainLayout = () => {
  
  return (
    <Box sx={sx}>
      <Header />
      <Grid2 container component='main' margin='0 auto' >
        <Grid2 size={12} component="div">
          <Outlet />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default MainLayout;
