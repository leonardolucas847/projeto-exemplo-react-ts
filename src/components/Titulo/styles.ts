import styled from 'styled-components'

import type { Props } from '.'
export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
`
