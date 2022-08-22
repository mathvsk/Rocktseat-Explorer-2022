import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';
import { Input } from '../../components/input';
import { Section } from '../../components/section';
import { Note } from '../../components/note';

import { FiPlus, FiSearch } from 'react-icons/fi';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Item" /></li>
                <li><ButtonText title="Item" /></li>
                <li><ButtonText title="Item" /></li>
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

            <NewNote>
                <FiPlus />
                    Criar Nota
            </NewNote>
            
        </Container>
    );
}