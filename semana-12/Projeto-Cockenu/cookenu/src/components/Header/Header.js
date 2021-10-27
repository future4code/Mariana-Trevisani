import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import StyledToobar from "./Styled"
import Button from '@material-ui/core/Button';
import {goToRecipesList, goToLogin} from "../../routes/coordinator"
import { useHistory } from 'react-router-dom';


export const Header = ()  => {
    const history = useHistory()
   return (
    <AppBar position="static">
        <StyledToobar>
            <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
            <Button onClick={() => goToLogin(history)}color="inherit">Login</Button>
        </StyledToobar>
    </AppBar>  
  );
}

export default Header