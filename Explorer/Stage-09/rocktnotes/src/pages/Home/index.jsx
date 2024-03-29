import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';
import { Input } from '../../components/input';
import { Section } from '../../components/section';
import { Note } from '../../components/note';

import { FiPlus, FiSearch } from 'react-icons/fi';

import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const [search, setSearch] = useState([]);
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    function handleTagSelected(tagName) {
        if (tagName === 'all') {
            return setTagsSelected([]);
        }

        const alreadySelected = tagsSelected.includes(tagName)
        
        if (alreadySelected) {
            const filteredTads = tagsSelected.filter(tags => tags !== tagName);
            setTagsSelected(filteredTads);

        } else {
            setTagsSelected(prevState => [...prevState, tagName]);
        }

        
    };

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    // Se um use effect rece um array vazio []. Ele vai ser executado apenas uma vez
    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags');
            setTags(response.data);
        }

        fetchTags();
    }, []);

    // Se o use effect recebe a;gum valor dentro do array [value], ele é executado toda vez que tem alteração no componente colocado no array
    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }

        fetchNotes();
    }, [tagsSelected, search]);

    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
            <li>
                <ButtonText 
                    title="Todos"
                    onClick={() => handleTagSelected("all")}
                    isActive={tagsSelected.length === 0}
                />
            </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                isActive={tagsSelected.includes(tag.name)}
                                />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo título" 
                    icon={FiSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    {
                        notes.map(note => (
                            <Note 
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                    Criar Nota
            </NewNote>
            
        </Container>
    );
}