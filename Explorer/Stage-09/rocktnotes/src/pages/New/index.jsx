import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/textarea';
import { NoteItem } from '../../components/noteitem';
import { Section } from '../../components/section';
import { Button } from '../../components/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Container, Form } from './style';

export function New() {
    const [links, setlinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    function handleAddLink() {
        // pegando o estado anterior do componente
        setlinks(prevState => [...prevState, newLink]),
        setNewLink("");
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Título" />

                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) =>	(
                                <NoteItem 
                                    key={String(index)}
                                    value={link}
                                    onClick={() => { }}
                                /> 
                            ))
                        }
                        <NoteItem 
                            isNew 
                            placeholder="Novo link" 
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
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