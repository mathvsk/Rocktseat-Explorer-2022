import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/header';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocktnotes</h1>
            </Brand>

            <Header />

            <Menu>

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