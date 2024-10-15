export interface SuggestionModel {
  phrase: string;
  persistentId: string;
}

export interface AutocompleteSuggestionModel {
  phrase: string;
  suggestions: SuggestionModel[];
}
