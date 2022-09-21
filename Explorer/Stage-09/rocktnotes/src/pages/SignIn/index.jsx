import { useContext } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Form, Background } from './style';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { MyContext } from '../../myContext';

import { Link } from 'react-router-dom';

export function SignIn() {

    const data = useContext(MyContext)

    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>

                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button  title="Entrar" />

                <Link to="/register">Criar conta</Link>

            </Form>

            <Background />
        </Container>
    );
}