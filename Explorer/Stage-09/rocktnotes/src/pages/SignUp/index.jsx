import { useState } from 'react';
import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { api } from '../../services/api'

import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link, useNavigate } from 'react-router-dom';

export function SignUp() {
    // criar um estado para capturar a informações e armazenar em memoria
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password ) {
            return alert('Preencha todos os campos')
        }

        api.post('/user', { name, email, password })
        .then(() => {
             alert("Usuário cadastrado com sucesso!")
             navigate('/')
        })
        .catch(error => {
            if(error.response){ // verificando se existe um erro personalizado no nosso backend
                alert(error.response.data.message) 
            } else {
                alert('Não foi possível cadastrar o usuário')
            }
        })
    }

    return (
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>

                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome" 
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)} // onChange(dispara evento toda vez que o input muda). Capturando o evento(e) e atribuindo para setName 
                />

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
                    onChange={e => setPassword(e.target.value)}        
                />

                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/">Voltar para Login</Link>
            </Form>

            
        </Container>
    )
}