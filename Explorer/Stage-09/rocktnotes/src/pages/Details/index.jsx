import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Links, Content } from "./style"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Section } from "../../components/section"
import { Tag } from "../../components/tag"
import { ButtonText } from "../../components/buttonText"

export function Details () {

  const [data, setData] = useState(null);
  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    // usado -1 para voltar pra rota anterior (dessa maneira, não empilha req no histórico)
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente remover a nota?');

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data);
    }

    fetchNotes();
  }, [])

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonText 
              title="Excluir Nota"
              onClick={handleRemove}
            />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }


            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag 
                    key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }

            <Button 
              title="Voltar"
              onClick={handleBack}
            />
          </Content>
        </main>
      }
    </Container>
  );
}