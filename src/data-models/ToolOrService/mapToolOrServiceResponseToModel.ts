import { ToolServiceModel } from "./ToolOrServiceModel";
import { ToolOrServiceResponseModel } from "./ToolOrServiceResponseModel";

const mapToolOrServiceResponseToModel = (
  toolDetails: ToolOrServiceResponseModel
): ToolServiceModel => ({
  ...toolDetails,
});

export default mapToolOrServiceResponseToModel;
