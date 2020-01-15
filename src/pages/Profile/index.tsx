import * as React from 'react';

import { helperRedirect } from 'utils/redirect';

import {
  Wrapper,
  Container,
  Sidebar,
  Content,
  Header,
} from './styles';

export interface OuterProps {
  name?: any;
}

class Profile extends React.Component<OuterProps, {}> {
  componentDidMount() {
    helperRedirect('/login');
  }

  render () {
    return (
      <Wrapper>
        <Sidebar>
          <div>
            Иванов Сергей
          </div>

          <div>
            Экзамены
          </div>
          <div>
            Расписание экзаменов
          </div>
          <div>
            Заявки в рассмотрении
          </div>
        </Sidebar>
        <Container>
          <Header>
            Экзамены
          </Header>
          <Content>
            Расписание экзаменов
            Список всех экзаменов, открытых для записи, а также тех, на которые вы записаны

            <table>
              <thead>
                <tr>
                  <th>Дата и время</th>
                  <th>Квалификация</th>
                  <th>Уровень</th>
                  <th>Город</th>
                  <th>Статус</th>
                </tr>
              </thead>
            </table>
          </Content>
        </Container>
      </Wrapper>
    );
  }
}

export default Profile;
