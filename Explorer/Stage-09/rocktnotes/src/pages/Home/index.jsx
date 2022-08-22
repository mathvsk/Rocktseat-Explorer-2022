import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';
import { Input } from '../../components/input';

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

            </Content>

            <NewNote>
                <FiPlus />
                    Criar Nota
            </NewNote>
            
        </Container>
    );
}