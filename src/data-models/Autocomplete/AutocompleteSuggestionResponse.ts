import { ResponseModel } from "../ResponseModel";
import { SuggestionModel } from "./AutocompleteSuggestionModel";

export interface AutocompleteResponseModel {
  phrase: string;
  suggestions: SuggestionModel[];
}

export interface AutocompleteResponse extends ResponseModel {
  data?: AutocompleteResponseModel;
}
