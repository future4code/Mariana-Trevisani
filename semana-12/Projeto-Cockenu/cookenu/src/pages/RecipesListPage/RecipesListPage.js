import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import {AddRecipeButton, RecipeListContainer} from "./Styled"
import useRequestData from '../../hooks/useRequestData'
import BASE_URL from '../../constants/urls'
import { Add } from "@material-ui/icons"
import { goToAddRecipes,  goToRecipesDetail  } from "../../routes/coordinator"
import { useHistory } from "react-router"


const RecipesListPage = () => {
  useProtectedPage()
  const history = useHistory()
  const recipes = useRequestData([],`${BASE_URL}/recipe/feed` )

  const onClickCard = (id) =>{
    goToRecipesDetail(history, id)
  }

  const recipeCard = recipes.map((recipe)=>{
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)} 
      />
    )
  })
  
  return (
    <RecipeListContainer>
      {recipeCard}
      <AddRecipeButton
        color={"primary"}
        onClick={()=>goToAddRecipes(history)}
      >
        <Add/>
      </AddRecipeButton>
    </RecipeListContainer>
  );
}

export default RecipesListPage;
