import React from 'react'
import { Checkbox, Container, Grid, Image, Segment, Button } from 'semantic-ui-react'
import flatPhoto from '../public/flat.png'

export default function Catalog(){
    return(
        <Container className='catalog'>
            <Segment>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={1}>
                            <Checkbox label='4101'/>
                        </Grid.Column>
                        <Grid.Column width={2}>12.09.2020</Grid.Column>
                        <Grid.Column width={3}>Ижевск, ул. Ворошилова 82</Grid.Column>
                        <Grid.Column width={2}>1 500 000 ₽</Grid.Column>
                        <Grid.Column width={3} as='a' href="/mainPage">Иванов Иван Иванович</Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column width={4}>
                            <Image src={flatPhoto}/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <i>Собственник</i>
                            <Button size='big' color='green'>Показать телефон</Button>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <p>Комнат в квартире: 1</p>
                            <p>Этаж: 6</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    )
}