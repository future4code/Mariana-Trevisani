import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import StyledToobar from "./Styled"
import Button from '@material-ui/core/Button';
import {goToRecipesList, goToLogin} from "../../routes/coordinator"
import { useHistory } from 'react-router-dom';
import { LocalDiningOutlined } from '@material-ui/icons';


export const Header = ({rightButtonText, setRightButtonText})  => {
    const history = useHistory()
    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.removeItem("token")
    }
   
   
    const rightButtonAction = () => {
        if (token){
            logout()
            setRightButtonText ("login")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }

   return (
    <AppBar position="static">
        <StyledToobar>
            <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
            <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToobar>
    </AppBar>  
  );
}

export default Header