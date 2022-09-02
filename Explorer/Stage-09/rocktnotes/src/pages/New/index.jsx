import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/textarea';
import { NoteItem } from '../../components/noteitem';
import { Section } from '../../components/section';
import { Button } from '../../components/button';

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

                    <Input placeholder="Título" />

                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem />
                        <NoteItem placeholder="Novo link" isNew />
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="react" />
                            <NoteItem placeholder="Nova tag" isNew />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    );
}