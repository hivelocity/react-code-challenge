import React from "react";
import { LoadingContainer } from "./styled";

const Loading = () => {
  return (
    <LoadingContainer data-testid="loader">
      <div className="ripples">
        <div></div>
        <div></div>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
