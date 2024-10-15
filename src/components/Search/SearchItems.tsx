import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Card, CardContent, Link, Stack, Typography } from "@mui/material";
import { ArrowBackIosNewRounded, KeyboardArrowRightOutlined, OpenInNew } from "@mui/icons-material";
import { SearchResultModel } from "../../data-models/Search/SearchResultModel";
import { getSearchResults } from "../../api/itemSearchApi";
import SearchForm from "./SearchForm";

const SearchItem = () => {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState<SearchResultModel | null>(null);

  const handleSearch = (query: string, cat: string) => getSearchResults(query, cat)
    .then(({ data }) => {
      if (Array.isArray(data?.items)) {
        setSearchResult(data);
      } else {
        console.error("Expected an array but got:", data);
      }
    })
    .catch((error) => console.log(error));

  const handleRedirectToItemDetails = (persistentId: string) => navigate(`/resources/${persistentId}`);

  const goToHomePage = () => navigate('/');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
      <Box sx={{ width: '80%', margin: `0 auto` }}>
        <Typography variant="h4" py={5}>Social Sciences & Humanities Open Marketplace</Typography>
        <SearchForm onSearch={handleSearch} />
      </Box>
      <Stack gap={2} width="60%">
        {searchResult &&
          searchResult.items.map((item) => {
            return (
              <Card elevation={3} sx={{ width: '100%' }}>
                <CardContent>
                  <Stack direction='column' gap={1}>
                    <Stack flexDirection="row" alignItems="center">
                      <Typography textAlign="left" flexGrow={1} variant="h6">{item.label}</Typography>
                      <Link href={item.accessibleAt} target="_blank" underline="none" alignContent="center" display="flex">
                        Access the source <OpenInNew fontSize="small" />
                      </Link>
                    </Stack>
                    <Typography textAlign="left" color="warning">{item.category}</Typography>
                    <Stack flexDirection="row" justifyContent="space-between">
                      {
                        item.contributors.map((contributor) => {
                          return (
                            <Typography>{contributor.role.label}: {contributor.actor.name}</Typography>
                          )
                        })
                      }
                      <Button
                        variant='contained'
                        endIcon={<KeyboardArrowRightOutlined />}
                        onClick={() => handleRedirectToItemDetails(item.persistentId)}
                      >
                        Details
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            )
          })
        }
      </Stack>
      <Button
        variant="text"
        disableRipple
        sx={{
          marginTop: '20px',
          '&.MuiButton-root:hover': {
            backgroundColor: 'unset',
          }
        }}
        startIcon={<ArrowBackIosNewRounded />}
        onClick={goToHomePage}
      >
        Back to Home
      </Button>
    </Box>
  )
}

export default SearchItem;
