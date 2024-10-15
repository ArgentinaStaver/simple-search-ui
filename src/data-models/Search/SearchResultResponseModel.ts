import { ResponseModel } from "../ResponseModel";
import { ItemModel, SearchResultModel } from "./SearchResultModel";

export interface SearchResultResponseModel {
  page: number;
  perpage: number;
  pages: number;
  items: ItemModel[];
}

export interface SearchResultResponse extends ResponseModel {
  data?: SearchResultModel;
}

export interface SearcheResultsResponse extends ResponseModel {
  data: SearchResultModel[];
}
