import { SearchResultModel } from "./SearchResultModel";
import { SearchResultResponseModel } from "./SearchResultResponseModel";

const mapSearchResultResponseToModel = (
  searchResult: SearchResultResponseModel
): SearchResultModel => ({
  ...searchResult,
  items: searchResult.items.map((item) => ({
    ...item,
    lastInfoUpdate: new Date(item.lastInfoUpdate),
  })),
});

export default mapSearchResultResponseToModel;
