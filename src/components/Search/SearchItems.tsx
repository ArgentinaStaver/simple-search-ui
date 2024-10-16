import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { format } from "date-fns";
import { Box, Button, Card, CardActions, CardContent, Link, Pagination, Stack, Typography } from "@mui/material";
import { ArrowBackIosNewRounded, KeyboardArrowRightOutlined, OpenInNew } from "@mui/icons-material";
import { SearchResultModel } from "../../data-models/Search/SearchResultModel";
import { getSearchResults } from "../../api/itemSearchApi";
import SearchForm from "./SearchForm";
import useMobileView from "../../utils/useMediaQuery";

const SearchItem = () => {
  const navigate = useNavigate();
  const isMobile = useMobileView();
  const [searchResult, setSearchResult] = useState<SearchResultModel | null>(null);
  const [q, setQ] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleSearch = async (query: string, cat: string) => {
    try {
      const { data } = await getSearchResults(query, cat);
      if (Array.isArray(data?.items)) {
        setSearchResult(data);
        setQ(query);
        setCategory(cat);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  const handleRedirectToItemDetails = (persistentId: string) => navigate(`/resources/${persistentId}`);

  const goToHomePage = () => navigate('/');

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    getSearchResults(q, category, value)
      .then(({ data }) => {
        if (data) {
          setSearchResult(data);
        } else {
          console.error("Error");
        }
      })
  };

  const fetch = useCallback(handleSearch, [q, category]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
      <Box sx={{ width: '80%', margin: `0 auto` }}>
        <Typography variant="h4" py={5} sx={{ color: '#164a78' }}>Tools and Services Resources</Typography>
        <SearchForm onSearch={fetch} />
      </Box>
      <Stack gap={2} width={isMobile ? "85%" : "60%"}>
        {searchResult &&
          searchResult.items.map((item, index) => {
            return (
              <Card elevation={3} sx={{ width: '100%' }} key={index}>
                <CardContent>
                  <Stack direction='column' gap={1}>
                    <Stack flexDirection="row" alignItems="center">
                      <Typography textAlign="left" flexGrow={1} variant="h6" sx={{ color: '#25418D' }}>{item.label}</Typography>
                      <Link href={item.accessibleAt} target="_blank" underline="none" alignContent="center" display="flex">
                        Access the source <OpenInNew fontSize="small" />
                      </Link>
                    </Stack>
                    <Typography textAlign="left" color="warning">{item.category}</Typography>
                    <Typography textAlign="left" sx={{ color: "#25418D", fontSize: "14px" }}>
                      Last info update: {format(item.lastInfoUpdate, "MM/dd/yyyy")}
                    </Typography>
                    <Stack alignItems="flex-start">
                      {
                        item.contributors.map((contributor, index) => {
                          return (
                            <Typography key={index}>{contributor.role.label}: {contributor.actor.name}</Typography>
                          )
                        })
                      }
                    </Stack>
                  </Stack>
                </CardContent>
                <CardActions sx={{ justifyContent: "end" }}>
                  <Button
                    variant='contained'
                    endIcon={<KeyboardArrowRightOutlined />}
                    onClick={() => handleRedirectToItemDetails(item.persistentId)}
                    sx={{
                      alignContent: 'end'
                    }}
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            )
          })
        }
        {
          (error || searchResult?.items.length === 0) && <Typography>{"No items found for your search query"}</Typography>
        }
      </Stack>
      <Stack>
        {
          searchResult &&
          <Pagination count={searchResult.pages} page={searchResult.page} onChange={handlePageChange} variant="outlined" color="primary" />
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
