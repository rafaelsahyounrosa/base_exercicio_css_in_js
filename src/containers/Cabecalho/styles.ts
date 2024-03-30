import styled from 'styled-components'
// import { Titulo } from '../../components/Titulo/styles'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.corDeFundo};
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`
