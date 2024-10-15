import { AutocompleteSuggestionModel } from "./AutocompleteSuggestionModel";
import { AutocompleteResponseModel } from "./AutocompleteSuggestionResponse";

const mapAutocompleteResponseToModel = (
  suggestions: AutocompleteResponseModel
): AutocompleteSuggestionModel => ({
  ...suggestions,
});

export default mapAutocompleteResponseToModel;
