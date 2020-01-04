import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';
import logo from '~/assets/logo-purpura.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Tenclar Valus</strong>
              <Link to="/profile">Menu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Tenclar Valus"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
