import React from 'react'

import Paragrafo from '../Paragrafo'
import Title from '../Title'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Title>Projeto Lista de tarefas</Title>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
      <LinkBotao>Vizualisar</LinkBotao>
    </Card>
  )
}

export default Projeto
