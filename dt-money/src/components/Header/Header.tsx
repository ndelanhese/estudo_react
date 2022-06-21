import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

const Header = () => {
    return (<Container>
        <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button">Nova Transação</button>
        </Content>
    </Container>);
}

export default Header;

