import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/textarea';
import { NoteItem } from '../../components/noteitem';
import { Section } from '../../components/section';
import { Button } from '../../components/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Container, Form } from './style';

import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

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
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote() { 
        if(!title) {
            return alert("Adicione um titulo")
        }

        if(newLink) {
            return alert("Adicione o link no campo para continuar")
        }

        if(newTag) {
            return alert("Adicione a tag no campo para continuar")
        }

        await api.post('/notes', {
            title,
            description,
            tags,
            links
        });

        alert('Nota criada com sucesso!!')
        navigate('/')
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

                    <Input 
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <TextArea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}    
                    />

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

                    <Button 
                        title="Salvar"
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    );
}