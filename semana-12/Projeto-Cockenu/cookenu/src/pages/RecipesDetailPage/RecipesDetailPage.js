import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import BASE_URL from "../../constants/urls";
import { ScreenContainer, RecipeContainer, RecipeImage } from "./Styled";
import { Typography } from "@material-ui/core";

const RecipesDetailPage = () => {
  useProtectedPage()

  const params = useParams()
  const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]

  return (
    <ScreenContainer>
      {recipe &&
      <RecipeContainer>
        <RecipeImage src={recipe.image}/>
        <Typography gutterBotton align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
        <Typography align={'center'}>{recipe.description}</Typography>
      </RecipeContainer>}
    </ScreenContainer>
  );
}

export default RecipesDetailPage;
