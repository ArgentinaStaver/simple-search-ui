import { AutocompleteResponse } from "../data-models/Autocomplete/AutocompleteSuggestionResponse";
import mapAutocompleteResponseToModel from "../data-models/Autocomplete/mapAutocompleteResponseToModel";

const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchAutocompleteSuggestions = async (
  query = ""
): Promise<AutocompleteResponse> => {
  const url = `${baseURL}/item-search/autocomplete?q=${query}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      return { status: response.status };
    }

    const data = await response.json();

    return {
      data: mapAutocompleteResponseToModel(data),
      status: response.status,
    };
  } catch (error) {
    return { status: 404 };
  }
};
