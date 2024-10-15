import { SearchResultResponse } from "../data-models/Search/SearchResultResponseModel";
import mapSearchResultResponseToModel from "../data-models/Search/mapSearchResultResponseToModel";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getSearchResults = async (
  query = "",
  category = "tool-or-service",
  page = 1,
  perPage = 25
): Promise<SearchResultResponse> => {
  const url = `${baseURL}/item-search?q=${query}&categories=${category}&advanced=false&includeSteps=false&page=${page}&perpage=${perPage}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  const status = await response.status;

  return { data: mapSearchResultResponseToModel(data), status };
};
