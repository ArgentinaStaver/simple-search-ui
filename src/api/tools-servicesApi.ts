import { ToolOrServiceResponse } from "../data-models/ToolOrService/ToolOrServiceResponseModel";
import mapToolOrServiceResponseToModel from "../data-models/ToolOrService/mapToolOrServiceResponseToModel";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getToolById = async (
  persistentId: string
): Promise<ToolOrServiceResponse> => {
  const url = `${baseURL}/tools-services/${persistentId}?draft=false&approved=true&redirect=false`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  const status = await response.status;

  return { data: mapToolOrServiceResponseToModel(data), status };
};
