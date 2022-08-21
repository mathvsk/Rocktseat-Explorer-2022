import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';

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

            </NewNote>
            
        </Container>
    );
}