import { Container, Links, Content } from "./style"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Section } from "../../components/section"
import { Tag } from "../../components/tag"
import { ButtonText } from "../../components/buttonText"

export function Details () {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis numquam adipisci ducimus, enim, iure neque eaque vero illum dolorem, expedita sunt quibusdam? Modi, earum minus! Adipisci modi harum vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id eveniet, debitis sunt quia tenetur ut accusantium, ab blanditiis maxime suscipit? Consequuntur odit facere ad, laudantium sunt atque inventore molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorem iste enim qui perspiciatis? Delectus, nesciunt accusantium commodi ipsum consequatur voluptates accusamus. Maiores autem, in itaque optio eius nulla quisquam?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}