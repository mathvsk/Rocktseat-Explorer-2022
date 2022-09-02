import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from 'react-router-dom';

export function SignUp() {
    return (
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>

                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome" 
                    title="text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail" 
                    title="email"
                    icon={FiMail}
                    />

                <Input 
                    placeholder="Senha" 
                    title="password"
                    icon={FiLock}        
                    />

                <Button title="Cadastrar" />

                <Link to="/">Voltar para Login</Link>
            </Form>

            
        </Container>
    )
}