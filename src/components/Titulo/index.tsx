import { Titulo as StyledTitulo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}
const Titulo = (props: Props) => (
  <StyledTitulo style={{ fontSize: props.fontSize }}>
    {props.children}
  </StyledTitulo>
)

export default Titulo
