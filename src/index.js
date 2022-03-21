import * as React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import ImageListWithPagination from "./ImageListWithPagination";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ImageListWithPagination />
  </StyledEngineProvider>,
  document.querySelector("#root")
);
