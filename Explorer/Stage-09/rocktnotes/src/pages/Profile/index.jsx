import { useState } from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useAuth } from "../../hooks/auth";
import { Link } from 'react-router-dom';


export function Profile() {
    // Pegando as informaçoes do user referente ao contexto
    const { user } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setpasswordOld] = useState();
    const [passwordNew, setpasswordNew] = useState();

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/mathvsk.png" 
                        alt="Foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        
                        <input 
                            id="avatar"
                            type="file" />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setpasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setpasswordNew(e.target.value)}
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}