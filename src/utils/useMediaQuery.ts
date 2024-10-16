import { useMediaQuery } from "@mui/material";

const useMediaQueryHook = (query: string) => useMediaQuery(query);

export const useMobileView = () => useMediaQueryHook("(max-width:700px)");

export default useMobileView;
