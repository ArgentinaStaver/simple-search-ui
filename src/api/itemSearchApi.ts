import { SearchResultResponse } from "../data-models/Search/SearchResultResponseModel";
import mapSearchResultResponseToModel from "../data-models/Search/mapSearchResultResponseToModel";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getSearchResults = async (
  query = "",
  category = "tool-or-service"
): Promise<SearchResultResponse> => {
  const url = `${baseURL}/item-search?q=${query}&category=${category}&advanced=false&includeSteps=false`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { items } = await response.json();
  const status = await response.status;

  return { data: items.map(mapSearchResultResponseToModel), status };
};
