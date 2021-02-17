import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import logo from '../public/logo.svg'

export default function Contacts (){
    return(
        <Container>
            <Grid columns={2}>
                <Grid.Column>
                    <Image size='medium' src={logo} alt='Логотип'/>
                    <p>ООО "Полезные Люди" ИНН 1840085213</p>
                    <p>Политика обработки персональных данных</p>
                </Grid.Column>
                <Grid.Column>

                </Grid.Column>
            </Grid>
        </Container>
    )
}