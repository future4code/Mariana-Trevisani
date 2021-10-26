export const goToLogin = (history) => { 
    history.pushState("/login")
}

export const goToSignUp = (history) => { 
    history.pushState("/cadastro")
}

export const goToAddRecipes = (history) => { 
    history.pushState("/adicionarReceitas")
}

export const goToRecipesDetail = (history, id) => { 
    history.pushState(`/detalhe/${id}`)
}

export const goToRecipesList = (history) => { 
    history.pushState("/")
}

