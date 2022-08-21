import { Container, Profile } from "./style"

export function Header () {
    return (
    <>
      <Container>
        <Profile>
          <img src="https://github.com/mathvsk.png" alt="Foto de usuário" />

          <div>
            <span>Bem-vindo,</span>
            <strong>Matheus</strong>
          </div>
        </Profile>
      </Container>
    </>
    )
}