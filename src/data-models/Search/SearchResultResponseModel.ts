import { ContributorModel } from "../Contributor/ContributorModel";
import { ResponseModel } from "../ResponseModel";
import { SearchResultModel } from "./SearchResultModel";

export interface SearchResultResponseModel {
  label: string;
  accessibleAt: string;
  category: string;
  contributors: ContributorModel[];
}

export interface SearchResultResponse extends ResponseModel {
  data?: SearchResultModel;
}

export interface SearcheResultsResponse extends ResponseModel {
  data: SearchResultModel[];
}
