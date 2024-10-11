import { ContributorModel } from "../Contributor/ContributorModel";

export interface SearchResultModel {
  label: string;
  accessibleAt: string;
  category: string;
  contributors: ContributorModel[];
}
