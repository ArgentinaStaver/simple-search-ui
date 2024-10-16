import { useNavigate } from "react-router";
import { Box, Stack, Typography } from "@mui/material";
import SearchForm from "../components/Search/SearchForm";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (q: string, category: string) => {
    navigate(`/resources?q=${q}&category=${category}`)
  };

  return (
    <Box sx={{ width: '80%', margin: '0 auto' }}>
      <Stack py={5}>
        <Typography variant="h4" textAlign="center" sx={{ color: '#164a78' }}>Explore our Social Sciences & Humanities Open Marketplace</Typography>
      </Stack>
      <SearchForm onSearch={handleSearch} />
    </Box>
  );
}

export default HomePage;
