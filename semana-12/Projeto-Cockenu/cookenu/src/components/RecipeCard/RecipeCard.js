import React from 'react'
import { CardActionArea, CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {RecipeCardContainer} from './Styled'
import Grid from '@material-ui/core/Grid';





const RecipeCard = (props) => {
    

    return(
        <RecipeCardContainer>
            <Grid container spacing={5} wrap={'nowrap'}>
            <Grid item>
                <Card onClick={props.onClick}>
                    <CardActionArea>
                        <CardMedia
                            minWidth ={"256px"}
                            borderRadius = {"16px"}
                            component={'img'}
                            alt={props.title}
                            height={'150px'}
                            image={props.image}
                            title={props.title}
                        />
                        <CardContent>
                            <Typography align={'center'}>
                                {props.title.toUpperCase()}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            </Grid>
        </RecipeCardContainer>
    )
}

export default RecipeCard