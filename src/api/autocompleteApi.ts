import { AutocompleteResponse } from "../data-models/Autocomplete/AutocompleteSuggestionResponse";
import mapAutocompleteResponseToModel from "../data-models/Autocomplete/mapAutocompleteResponseToModel";

const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchAutocompleteSuggestions = async (
  query = ""
): Promise<AutocompleteResponse> => {
  const url = `${baseURL}/item-search/autocomplete?q=${query}`;

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

  return { data: mapAutocompleteResponseToModel(data), status };
};
