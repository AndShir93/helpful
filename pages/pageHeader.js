import React from 'react';
import { Grid, Container, Image, Icon, Menu, Button, Dropdown} from 'semantic-ui-react';
import Link from 'next/link'
import geo from '../public/geo.svg'
import signIn from '../public/sign_in.svg'

function PageHeader() {
  console.log(geo)
  return (
      <Container fluid>
        <Menu secondary stackable>
          <Menu.Item as='a'>
            <Image src={geo} size='mini'/>
            Москва
          </Menu.Item>
          <Menu.Item as='a' position='right'>Войти или зарегистрироваться</Menu.Item></Menu>
        <Menu secondary stackable pointing>
          <Menu.Item as='a'></Menu.Item>
          <Menu.Item as='a'>Купить</Menu.Item>
          <Menu.Item as='a'>Снять</Menu.Item>
          <Menu.Item as='a'>Ипотека</Menu.Item>
          <Menu.Item as='a'>Услуги</Menu.Item>
        </Menu>
        <Menu stackable>
          <Menu.Item>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text='Купить' pointing='top'>
              <Dropdown.Menu >
                <Grid padded='horizontally'>
                  <Grid.Row>
                    <Button.Group fluid>
                      <Button primary>Купить</Button>
                      <Button>Снять</Button>
                    </Button.Group>
                  </Grid.Row>
                  <Grid.Row>
                    <Button color='black' fluid>Показать предложений</Button>
                  </Grid.Row>
                </Grid>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text='Жилье'>
              <Dropdown.Menu>
                <Button.Group>
                  <Button primary>Жилье</Button>
                  <Button>Комерческая</Button>
                  <Button>Гаражи</Button>
                </Button.Group>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text='Комнат'>

            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text='Цена'>

            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text='Фильтры(2)'>

            </Dropdown>
          </Menu.Item>
          <Menu.Item position='right'>
            <Button color='black'>Сохранить поиск</Button>
          </Menu.Item>
        </Menu>
      </Container>
  );
}
export default PageHeader