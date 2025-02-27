import React from 'react'
import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Camila Dória</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        camiladoria84
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheira Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
