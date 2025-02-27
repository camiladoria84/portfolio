import React from 'react'
import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam quo
      commodi iste voluptatem. Velit accusantium hic quidem impedit! Est
      reprehenderit laudantium dolore totam neque officiis ad fuga voluptates
      optio.
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=camiladoria84&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=camiladoria84&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
