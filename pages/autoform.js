import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { withRouter } from 'next/router';
import Registration from '../usecases/Registration';

function AutoFormPage({ router, request, response, schema }) {
  console.log({ request });

  function onSubmit(query) {
    router.push({ pathname: 'autoform', query });
  }

  return (
      <Segment compact>
          <Form>
            <Form.Select 
              options={[{text:"Продажа", value:"Продажа", selected: true},{text:"Покупка", value:"Покупка"},{name: "Продажа + покупка", value: "Продажа + покупка"}]}
              placeholder="Выберите услугу">
            </Form.Select>
            <Form.Field>
              <input placeholder="Имя"/>
            </Form.Field>
            <Form.Field>
              <input placeholder="Телефон"/>
            </Form.Field>
            <Button fluid primary type="submit">Отправить заявку</Button>
          </Form>
      </Segment>
  );
}
export default withRouter(AutoFormPage);

export async function getServerSideProps({ query: request }) {
  const usecase = new Registration();
  const props = {
    request,
    response: await usecase.process(request),
    schema: usecase.getSchema(request)
  };
  return { props };
}