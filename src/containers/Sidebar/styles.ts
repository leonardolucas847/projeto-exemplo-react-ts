import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-bottom: 40px;
  margin-top: 24px;
`

export const BotaoTema = styled.button`
  padding: 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  @media (max-width: 768px) {
    margin-bottom: 48px;
    text-align: center;
  }
`
