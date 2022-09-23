import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';
import { Input } from '../../components/input';
import { Section } from '../../components/section';
import { Note } from '../../components/note';

import { FiPlus, FiSearch } from 'react-icons/fi';

import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Home() {
    const [tags, setTags] = useState([])

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags');
            setTags(response.data);
        }

        fetchTags();
    }, []);

    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
            <li><ButtonText title="Todos" /></li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name} 
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{ 
                        title: 'React', 
                        tags: [
                            {id: '1', name:'react'},
                            {id: '2', name:'reactJS'},
                        ]
                        }}
                    />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                    Criar Nota
            </NewNote>
            
        </Container>
    );
}