import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Box, AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material"
import StoreIcon from '@mui/icons-material/Store';


const Header = () => {
  const navigate = useNavigate();
  const goToHomePage = () => navigate("/");

  return (
    <Box sx={{ paddingBottom: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={goToHomePage}
          >
            <StoreIcon />
          </IconButton>
          <Stack direction={"row"} spacing={3}>
            <Link to="resources">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={"white"}>
                Resources
              </Typography>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
