import { Header } from '../../components/header';
import { Input } from '../../components/input';

import { Container, Form } from './style';

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="">voltar</a>
                    </header>

                    <Input Placeholder="Título" />
                </Form>
            </main>
        </Container>
    );
}