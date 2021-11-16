import React from "react"
import { ErrorImage, ErrorPageContainer } from "./Styled";
import error from "../../assets/Error404.png"

const ErrorPage = () => {
  return (
    <ErrorPageContainer >
      <ErrorImage src={error} />
    </ErrorPageContainer>
  );
}

export default ErrorPage;
