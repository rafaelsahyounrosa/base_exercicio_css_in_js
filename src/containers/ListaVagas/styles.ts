import styled from 'styled-components'

export const VagasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Três colunas por linha */
  column-gap: 16px; /* Espaçamento entre as colunas */
  row-gap: 16px; /* Espaçamento entre as linhas */
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Uma coluna por linha em telas menores */
  }
`
