import { ContributorModel } from "../Contributor/ContributorModel";
import { ResponseModel } from "../ResponseModel";
import { RelatedItem } from "./ToolOrServiceModel";

export interface ToolOrServiceResponseModel {
  label: string;
  description: string;
  accessibleAt: string[];
  contributors: ContributorModel[];
  relatedItems: RelatedItem[];
}

export interface ToolOrServiceResponse extends ResponseModel {
  data?: ToolOrServiceResponseModel;
}
