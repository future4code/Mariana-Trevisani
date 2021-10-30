import React from "react"
import {ScreenContainer} from "./Styled";
import AddRecipeForm from "./AddRecipeForm.js";
import useProtectedPage from "../../hooks/useProtectedPage";


const AddRecipesPage = () => {
  useProtectedPage()
  return (
    <ScreenContainer >      
      <AddRecipeForm />
    </ScreenContainer>
  );
}

export default AddRecipesPage;
