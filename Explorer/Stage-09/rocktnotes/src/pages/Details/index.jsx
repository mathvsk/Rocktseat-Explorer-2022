import { Container, Links } from "./style"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Section } from "../../components/section"

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



      <Button title="Voltar"/>
    </Container>
  )
}