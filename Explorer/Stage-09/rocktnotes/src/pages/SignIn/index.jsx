import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Form, Background } from './style';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

export function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');

    const { signIn } = useAuth()

    // boas práticas: usar HANDLE quando é algo disparado pelo user
    function handleSignIn() {
        signIn({ email, password })
    }

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
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassord(e.target.value)}
                />

                <Button  title="Entrar" onClick={handleSignIn} />

                <Link to="/register">Criar conta</Link>

            </Form>

            <Background />
        </Container>
    );
}