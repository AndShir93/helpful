import React from 'react';
import { Grid, Container, Image, Menu, Button, Dropdown, Segment, Search, Form} from 'semantic-ui-react';
import geo from '../public/geo.svg';
import signIn from '../public/sign_in.svg';
import logo from '../public/logo.png'
import Contacts from '../components/Contacts';

export default function MenuHeader() {
  console.log(geo)
  return (
      <Container fluid>
        <Menu secondary stackable>
          <Menu.Item as='a'>
            <Image src={geo} size='mini'/>
          </Menu.Item>
          <Menu.Item as='a' position='right'>
            <Image size='mini' src={signIn}/>
            Войти
          </Menu.Item>
        </Menu>
        <Menu secondary stackable>
          <Menu.Item fitted><Image centered src={logo} href='/' size='small' alt='Полезные Люди'/></Menu.Item>
          <Menu.Item as='a'>Купить</Menu.Item>
          <Menu.Item as='a'>Снять</Menu.Item>
          <Menu.Item as='a'>Ипотека</Menu.Item>
          <Menu.Item as='a'>Услуги</Menu.Item>
          <Menu.Item as='a'>Контакты</Menu.Item>
        </Menu>
        <Menu stackable>
          <Menu.Item>
            <Search size='mini'/>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text='Купить' pointing='top left'>
              <Dropdown.Menu>
                <Segment.Group>
                  <Segment>
                    <Button.Group fluid>
                      <Button color='green'>Купить</Button>
                      <Button>Снять</Button>
                    </Button.Group>
                  </Segment>
                  <Segment>
                    <Button color='black' fluid>Показать предложений</Button>
                  </Segment>            
                </Segment.Group>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text='Жилье' pointing='top left'>
              <Dropdown.Menu>
                <Segment>
                  <Button.Group>
                    <Button color='green'>Жилье</Button>
                    <Button>Комерческая</Button>
                    <Button>Гаражи</Button>
                  </Button.Group>
                </Segment>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown pointing='top left' text='Комнат'>
              <Dropdown.Menu>
                <Segment.Group>
                  <Segment>
                    <Grid columns={3} style={{maxWidth: '320px'}}>
                      <Grid.Row>
                          <Grid.Column stretched><Button>1</Button></Grid.Column>
                          <Grid.Column stretched><Button>2</Button></Grid.Column>
                          <Grid.Column stretched><Button>3</Button></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column stretched><Button>4</Button></Grid.Column>
                          <Grid.Column stretched><Button>5+</Button></Grid.Column>
                          <Grid.Column stretched><Button>Студия</Button></Grid.Column>
                        </Grid.Row>
                    </Grid>
                  </Segment>
                  <Segment>
                    <Button color='black' fluid>Показать предложений</Button>
                  </Segment>
                </Segment.Group>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text='Цена' pointing='top left'>
              <Dropdown.Menu>
                <Segment.Group>
                  <Segment>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column>
                          <Button.Group fluid>
                            <Button color='green'>За все</Button>
                            <Button>За м2</Button>
                          </Button.Group>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <Form>
                            <Form.Group widths={2}>
                              <Form.Input placeholder='от'/>
                              <Form.Input placeholder='до'/>
                            </Form.Group>
                          </Form>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                  <Segment>
                    <Button fluid color='black'>Показать предложений</Button>
                  </Segment>
                </Segment.Group>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text='Фильтры'>

            </Dropdown>
          </Menu.Item>
          <Menu.Item position='right'>
            <Button color='black'>Сохранить поиск</Button>
          </Menu.Item>
        </Menu>
      </Container>
  );
}