import { ContributorModel } from "../Contributor/ContributorModel";

export interface ItemModel {
  persistentId: string;
  label: string;
  accessibleAt: string;
  category: string;
  contributors: ContributorModel[];
}

export interface SearchResultModel {
  page: number;
  perpage: number;
  pages: number;
  items: ItemModel[];
}
