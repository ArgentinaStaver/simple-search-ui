import { SearchResultModel } from "./SearchResultModel";
import { SearchResultResponseModel } from "./SearchResultResponseModel";

const mapSearchResultResponseToModel = (
  searchResult: SearchResultResponseModel
): SearchResultModel => ({
  ...searchResult,
});

export default mapSearchResultResponseToModel;
