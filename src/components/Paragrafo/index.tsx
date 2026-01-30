import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}
const Paragrafo = (props: Props) => (
  <P tipo={props.tipo} fontSize={props.fontSize}>
    {props.children}
  </P>
)

export default Paragrafo
