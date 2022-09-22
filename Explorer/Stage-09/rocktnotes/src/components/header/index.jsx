import { RiShutDownLine} from "react-icons/ri"
import { useAuth } from '../../hooks/auth'

import { Container, Profile, Logout } from "./style"

export function Header () {
  const { signOut } = useAuth();
    return (
      <Container>
        <Profile to="/profile">
          <img src="https://github.com/mathvsk.png" alt="Foto de usuário" />

          <div>
            <span>Bem-vindo,</span>
            <strong>Matheus</strong>
          </div>
        </Profile>

        <Logout onClick={signOut}>
          <RiShutDownLine />
        </Logout>
      </Container>
    )
}