import { FormEvent, useState } from 'react'
import { BtnPesquisar, FormPesquisa, Input } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormPesquisa onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      ></Input>
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </FormPesquisa>
  )
}
export default FormVagas
