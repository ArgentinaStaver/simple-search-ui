import { ContributorModel } from "../Contributor/ContributorModel";
import { ResponseModel } from "../ResponseModel";
import { SearchResultModel } from "./SearchResultModel";

export interface ItemResponseModel {
  persistentId: string;
  label: string;
  accessibleAt: string;
  category: string;
  contributors: ContributorModel[];
  lastInfoUpdate: string;
}
export interface SearchResultResponseModel {
  page: number;
  perpage: number;
  pages: number;
  items: ItemResponseModel[];
}

export interface SearchResultResponse extends ResponseModel {
  data?: SearchResultModel;
}

export interface SearcheResultsResponse extends ResponseModel {
  data: SearchResultModel[];
}
