import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';

import { FiPlus } from 'react-icons/fi';

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