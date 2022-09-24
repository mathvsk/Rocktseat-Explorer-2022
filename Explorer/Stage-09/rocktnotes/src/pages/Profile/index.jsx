import { useState } from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

import { useNavigate } from 'react-router-dom';


export function Profile() {
    // Pegando as informaçoes do user referente ao contexto
    const { user, updateProfile } = useAuth();
    console.log(user)

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setpasswordOld] = useState();
    const [passwordNew, setpasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1)
      }

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updateProfile({ user, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <button type='button' onClick={handleBack}>
                    <FiArrowLeft />
                </button>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src={avatar}
                        alt="Foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        
                        <input 
                            id="avatar"
                            type="file" 
                            onChange={handleChangeAvatar}    
                        />
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

                <Button title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}