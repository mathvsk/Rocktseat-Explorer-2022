import { Container, Links } from "./style"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Section } from "../../components/section"
import { Tag } from "../../components/tag"

export function Details () {
  return (
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="node"/>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}