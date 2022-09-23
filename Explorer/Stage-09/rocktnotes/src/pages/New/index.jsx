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
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddLink() {
        // pegando o estado anterior do componente
        setLinks(prevState => [...prevState, newLink]),
        setNewLink("");
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tags => tags !== deleted));
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
                                    // quando tiver um parametro da função, usar arrow function
                                    onClick={() => handleRemoveLink(link)}
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
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                        key={index}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)} 
                                    />

                                ))

                            }

                            <NoteItem 
                                isNew 
                                placeholder="Nova tag" 
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    );
}