import { ContributorModel } from "../Contributor/ContributorModel";

export interface RelatedItem {
  id: number;
  label: string;
  description: string;
}

export interface ToolServiceModel {
  label: string;
  description: string;
  accessibleAt: string[];
  contributors: ContributorModel[];
  relatedItems: RelatedItem[];
}
