import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Container, Form } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function Profile() {
    return (
        <Container>
            <header>
                <a href="">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}