import { useState, useCallback } from "react";
import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";

interface ISearchForm {
  onSearch: (
    q: string,
    category: string,
  ) => void;
}

const SearchForm = ({ onSearch }: ISearchForm) => {
  const location = useLocation();
  const incomingQ = new URLSearchParams(location.search).get('q') || "";
  const incomingCategory = new URLSearchParams(location.search).get('category') || "";

  const [query, setQuery] = useState(incomingQ);
  const [category, setCategory] = useState(incomingCategory || 'tool-or-service');

  const fetch = useCallback(onSearch, [query, category]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const handleCategory = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  }

  if (incomingQ || incomingCategory) {
    fetch(query, category);
  }

  const handleSearch = () => fetch(query, category);

  return (
    <Stack sx={{
      backgroundColor: '#fff',
      borderRadius: '16px',
    }}>
      <Stack direction="row" gap={3}
        alignItems={"center"}
        padding={5}
        justifyContent={"center"}>
        <Stack width={"35%"}>
          <TextField
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            value={query}
            onChange={handleInputChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 30,
                height: 50,
              },
            }}
          />
        </Stack>
        <Stack width={"35%"}>
          <TextField
            id="outlined-select-categories"
            select
            label="Categories"
            value={category}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 30,
                height: 50,
              }
            }}
            onChange={handleCategory}
          >
            {['tool-or-service'].map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack>
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              borderRadius: '999px',
              maxWidth: '160px',
              minWidth: '160px',
              height: 50,
            }}
          >
            Search
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SearchForm;
