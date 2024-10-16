import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Autocomplete, Button, MenuItem, Stack, TextField } from "@mui/material";
import { SuggestionModel } from "../../data-models/Autocomplete/AutocompleteSuggestionModel";
import { fetchAutocompleteSuggestions } from "../../api/autocompleteApi";
import { useMobileView } from "../../utils/useMediaQuery";

interface ISearchForm {
  onSearch: (
    q: string,
    category: string,
  ) => void;
}

const SearchForm = ({ onSearch }: ISearchForm) => {
  const location = useLocation();
  const isMobile = useMobileView();
  const incomingQ = new URLSearchParams(location.search).get('q') || "";
  const incomingCategory = new URLSearchParams(location.search).get('category') || "";

  const [query, setQuery] = useState(incomingQ || "");
  const [category, setCategory] = useState(incomingCategory || 'tool-or-service');
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<SuggestionModel[]>([]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const handleCategory = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  }

  const handleSearch = () => onSearch(query, category);

  const handleAutocomplete = async (query: string) => {
    try {
      const { data } = await fetchAutocompleteSuggestions(query);
      if (data) {
        setAutocompleteSuggestions(data.suggestions);
        setQuery(data.phrase);
      }
    } catch (error) {
      alert("Failed to load autocomplete suggestions. Please try again.");
    }
  };

  useEffect(() => {
    if (incomingQ || incomingCategory) onSearch(query, category);
  }, [incomingQ, incomingCategory]);

  useEffect(() => {
    if (query) {
      handleAutocomplete(query);
    }
  }, [query]);

  return (
    <Stack sx={{ backgroundColor: '#fff', borderRadius: '16px' }}>
      <Stack direction={isMobile ? "column" : "row"} gap={3} alignItems="center" padding={5} justifyContent="center">
        <Stack width={isMobile ? "85%" : "35%"}>
          <Autocomplete
            id="free-solo"
            freeSolo
            onChange={(e, value) => setQuery(value || "")}
            options={autocompleteSuggestions.map((option) => option.phrase)}
            value={query}
            renderInput={(params) => <TextField
              {...params}
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
            }
          />
        </Stack>
        <Stack width={isMobile ? "85%" : "35%"}>
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
        <Stack width={isMobile ? "85%" : "20%"}>
          <Button
            variant="contained"
            onClick={handleSearch}
            fullWidth
            sx={{
              borderRadius: '999px',
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
